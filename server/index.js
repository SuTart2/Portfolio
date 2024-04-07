const path = require('path');
const express = require('express');
const transporter = require('./config');
require('dotenv').config()
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

const cors = require('cors')

const corsOptions = {
  origin: 'https://portfolio-client-7rus.onrender.com', // replace with your frontend server address
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

app.post('/send', (req, res) => {
  console.log(process.env.email)
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: req.body.subject, // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Subject: ${req.body.subject}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err)
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting me. I will get back to you shortly'
        });
      }
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});

app.listen(3030, () => {
  console.log('server start on port 3030');
});
