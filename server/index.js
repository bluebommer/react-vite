require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 4242;

app.use(cors());
app.use(express.json());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const orderSchema = new mongoose.Schema({
  items: [
    {
      id: String,
      name: String,
      price: Number,
      quantity: Number,
      image: String,
      size: mongoose.Schema.Types.Mixed,
      fingerSizes: mongoose.Schema.Types.Mixed
    }
  ],
  total: Number,
  shipping: Object,
  createdAt: String,
  paymentStatus: String,
});

const Order = mongoose.model('Order', orderSchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is running', timestamp: new Date().toISOString() });
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

app.post('/save-order', async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    await newOrder.save();

    const itemHtmlList = newOrder.items.map(i => {
      const sizeInfo = i.size ? `<p><strong>Size:</strong> ${typeof i.size === 'string' ? i.size : JSON.stringify(i.size)}</p>` : '';
      const fingerInfo = i.fingerSizes ? `<p><strong>Finger Sizes:</strong> ${JSON.stringify(i.fingerSizes)}</p>` : '';
      return `
        <li style="margin-bottom: 20px; border: 1px solid #eee; padding: 10px; border-radius: 8px;">
          <img src="${i.image}" alt="${i.name}" width="100" style="border-radius:8px; margin-bottom:5px; display: block;" />
          <p style="margin: 5px 0;"><strong>${i.name}</strong> x${i.quantity || 1} - $${i.price}</p>
          ${sizeInfo}
          ${fingerInfo}
        </li>
      `;
    }).join('');

    const htmlHeader = `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <img src="https://res.cloudinary.com/dpwmay6fc/image/upload/v1751634787/logo_1_avkoiv.png"  alt="Logo" style="height: 60px; margin-bottom: 20px;" />
    `;

    const htmlFooter = `</div>`;

    const clientEmailHtml = `
      ${htmlHeader}
      <h2 style="color: #d63384;">🛒 New Order Received!</h2>
      <p><strong>Customer:</strong> ${newOrder.shipping.name}</p>
      <p><strong>Phone:</strong> ${newOrder.shipping.phone}</p>
      <h3 style="color: #d63384;">Items:</h3>
      <ul style="padding-left: 20px;">${itemHtmlList}</ul>
      <p><strong>Total:</strong> <span style="color: #d63384; font-weight: bold;">$${newOrder.total.toFixed(2)}</span></p>
      <h3 style="color: #d63384;">Shipping Address:</h3>
      <p>
        ${newOrder.shipping.name}<br/>
        ${newOrder.shipping.street}<br/>
        ${newOrder.shipping.city}, ${newOrder.shipping.state} ${newOrder.shipping.zip}<br/>
        ${newOrder.shipping.country}
      </p>
      ${htmlFooter}
    `;

    const customerEmailHtml = `
      ${htmlHeader}
      <h2 style="color: #d63384;">🎉 Order Confirmation</h2>
      <p>Hi ${newOrder.shipping.name},</p>
      <p>Thank you for your order! Here's a summary of what you purchased:</p>
      <h3 style="color: #d63384;">Items:</h3>
      <ul style="padding-left: 20px;">${itemHtmlList}</ul>
      <p><strong>Total:</strong> <span style="color: #d63384; font-weight: bold;">$${newOrder.total.toFixed(2)}</span></p>
      <p>Your items will be shipped to:</p>
      <p>
        ${newOrder.shipping.name}<br/>
        ${newOrder.shipping.street}<br/>
        ${newOrder.shipping.city}, ${newOrder.shipping.state} ${newOrder.shipping.zip}<br/>
        ${newOrder.shipping.country}
      </p>
      <p>If you have any questions, reply to this email.</p>
      <p>❤️ Thank you for shopping with us!</p>
      ${htmlFooter}
    `;

    // Send to client
    await transporter.sendMail({
      from: `"Order Notification" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `🛒 New Order from ${newOrder.shipping.name}`,
      html: clientEmailHtml,
    });

    // Send to customer
    await transporter.sendMail({
      from: `"Your Shop" <${process.env.EMAIL_USER}>`,
      to: newOrder.shipping.email,
      subject: `✅ Your Order Confirmation`,
      html: customerEmailHtml,
    });

    res.status(200).json({ message: 'Order saved and emails sent!' });
  } catch (error) {
    console.error('Failed to save order or send email:', error);
    res.status(500).json({ error: 'Failed to save order or send email' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
