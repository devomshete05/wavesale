import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.post('/api/enquiry', async (req, res) => {
  const { product, name, email, phone, message } = req.body
  if (!name || !email) return res.status(400).json({ error: 'Missing name or email' })

  const subject = `New Enquiry: ${product?.name || 'Product'}`
  const text = `Enquiry for ${product?.name || ''}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\n\nMessage:\n${message || ''}`

  try {
    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject,
      text,
    })
    res.json({ ok: true })
  } catch (err) {
    console.error('Failed to send enquiry email', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(PORT, () => console.log(`Enquiry server listening on ${PORT}`))
