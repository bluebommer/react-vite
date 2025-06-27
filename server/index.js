require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
require('dotenv').config();
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 4242;

// Initialize Stripe with your secret key
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

// ✅ Basic test route
app.get('/', (req, res) => {
  res.json({
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// ✅ Optional test API route
app.get('/api/test', (req, res) => {
  res.json({
    message: 'API is working!',
    data: { test: true }
  });
});

// ✅ NEW: Stripe PaymentIntent route
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // in cents (e.g. $10.00 = 1000)
      currency: 'usd',
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});
const EasyPost = require('@easypost/api');
const easyPost = new EasyPost(process.env.EASYPOST_API_KEY);

app.post('/create-shipping-label', async (req, res) => {
  const {
    to_name,
    to_street1,
    to_city,
    to_state,
    to_zip,
    to_country,
    to_phone,
  } = req.body;

  try {
    const toAddress = await easyPost.Address.create({
      name: to_name,
      street1: to_street1,
      city: to_city,
      state: to_state,
      zip: to_zip,
      country: to_country,
      phone: to_phone,
    });

    const fromAddress = await easyPost.Address.create({
      company: 'Your Store Name',
      street1: '123 Main St',
      city: 'Lagos',
      state: 'LA',
      zip: '100001',
      country: 'NG',
      phone: '08012345678',
    });

    const parcel = await easyPost.Parcel.create({
      length: 10,
      width: 6,
      height: 4,
      weight: 16, // ounces
    });

    const shipment = await easyPost.Shipment.create({
      to_address: toAddress,
      from_address: fromAddress,
      parcel: parcel,
    });

    await shipment.buy(shipment.rates[0]);

    res.json({
      tracking_number: shipment.tracking_code,
      label_url: shipment.postage_label.label_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


app.post('/save-order', async (req, res) => {
  const newOrder = req.body;
  const filePath = path.join(__dirname, 'data', 'orders.json');

  try {
    const existingData = await fs.promises.readFile(filePath, 'utf-8');
    const orders = JSON.parse(existingData);
    orders.push(newOrder);
    await fs.promises.writeFile(filePath, JSON.stringify(orders, null, 2));
    res.status(200).json({ message: 'Order saved successfully' });
  } catch (error) {
    console.error('Failed to save order:', error);
    res.status(500).json({ error: 'Failed to save order' });
  }
});




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/test`);
});
