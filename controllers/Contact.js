const transporter = require("../config/nodemailer");
const messageModel = require("../models/message");

const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = new messageModel({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();

    // Using Gmail
    const mailOptions = {
      from: email,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: subject,
      text: `My name is ${name}. I want to discuss about the following details :
${message}`,
    };

    // Using brevo
    // const mailOptions = {
    //   from: email,
    //   to: process.env.SENDER_EMAIL,
    //   subject: subject,
    //   text: `My name is ${name}. I want to discuss about the following details : ${message}`,
    // };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, msg: "Email sent successfully." });
  } catch (error) {
    console.error("Send Email Error:", error);

    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = sendMessage;
