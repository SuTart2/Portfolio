const nodemailer = require('nodemailer');
const dotenv = require("dotenv")
dotenv.config()

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: wenhong19680907@gmail.com, // your email address to send email from
    pass: sbks mhwe thkd ckmc // your gmail account password
  }
});

module.exports = transporter;
