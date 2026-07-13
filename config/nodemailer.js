// const nodemailer = require("nodemailer");

// // Using Gmail to send emails
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//   },
// });

// // Using external library for sending emails like brevo
// // const transporter = nodemailer.createTransport({
// //   host: "smtp-relay.brevo.com",
// //   port: 587,
// //   auth: {
// //     user: process.env.SMTP_USER,
// //     pass: process.env.SMTP_PASS,
// //   },
// // });

// module.exports = transporter;

const nodemailer = require("nodemailer");
const dns = require("dns");

// Prefer IPv4 addresses
dns.setDefaultResultOrder("ipv4first");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  family: 4,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

module.exports = transporter;
