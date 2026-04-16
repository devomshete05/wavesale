const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/api/enquiry', async (req, res) => {
  try {
    const { product, customerName, customerEmail, customerPhone, message } = req.body;
    if (!customerName || !customerEmail || !customerPhone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const adminMailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Enquiry - ${product || 'Product'}`,
      html: `
        <h2>New Enquiry</h2>
        <p>Name: ${customerName}</p>
        <p>Email: ${customerEmail}</p>
        <p>Phone: ${customerPhone}</p>
        <p>Product: ${product || 'N/A'}</p>
        <p>Message: ${message || '-'}</p>
      `,
    };

    const customerMailOptions = {
      from: process.env.FROM_EMAIL,
      to: customerEmail,
      subject: 'Enquiry Received',
      html: `
        <p>Hi ${customerName},</p>
        <p>We received your enquiry. We will contact you soon.</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Email send failed' });
  }
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});