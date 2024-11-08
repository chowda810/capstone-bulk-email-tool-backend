const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Email sending endpoint (dummy for now)
router.post('/send', async (req, res) => {
  // Example sending email using Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: req.body.recipients,
    subject: req.body.subject,
    text: req.body.body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send(info.response);
  });
});

module.exports = router;
