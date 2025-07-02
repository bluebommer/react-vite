require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const EasyPost = require('@easypost/api');

const app = express();
const PORT = process.env.PORT || 4242;

// Middleware
app.use(cors());
app.use(express.json());

// Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// EasyPost
const easyPost = new EasyPost(process.env.EASYPOST_API_KEY);

// MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const orderSchema = new mongoose.Schema({
  items: Array,
  total: Number,
  shipping: Object,
  createdAt: String,
  paymentStatus: String,
});

const Order = mongoose.model('Order', orderSchema);

// Email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Server is running', timestamp: new Date().toISOString() });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!', data: { test: true } });
});

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

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
      weight: 16,
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
  const newOrder = new Order(req.body);

  try {
    await newOrder.save();

    const orderText = `
New Order Received!

Customer: ${newOrder.shipping.name}
Phone: ${newOrder.shipping.phone}

Items:
${newOrder.items.map(i => `- ${i.name} x${i.quantity || 1} ($${i.price})`).join('\n')}

Total: $${newOrder.total.toFixed(2)}

Shipping Address:
${newOrder.shipping.street}
${newOrder.shipping.city}, ${newOrder.shipping.state}, ${newOrder.shipping.zip}
${newOrder.shipping.country}
    `;

   // Email label
await transporter.sendMail({
  from: `"Shipping Label" <${process.env.EMAIL_USER}>`,
  to: `${process.env.EMAIL_TO}, ${req.body.customer_email}`
, // or use req.body.email if sending to customer
  subject: `📦 Shipping Label for ${to_name}`,
  text: `Here is your shipping label:\n\nTracking: ${shipment.tracking_code}\nLabel URL: ${shipment.postage_label.label_url}`,
}, (err, info) => {
  if (err) {
    console.error('❌ Failed to email label:', err);
  } else {
    console.log('✅ Label emailed:', info.response);
  }
});

// Respond as usual
res.json({
  tracking_number: shipment.tracking_code,
  label_url: shipment.postage_label.label_url,
});


    res.status(200).json({ message: 'Order saved and email sent!' });
  } catch (error) {
    console.error('Failed to save order or send email:', error);
    res.status(500).json({ error: 'Failed to save order or send email' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
