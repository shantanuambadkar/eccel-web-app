const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
  const { custName, custEmail, custMobile, custVehicleNo, custLocation } =
    req.body;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'shantanuambadkar@gmail.com',
      pass: 'CuriousShan@351',
    },
  });

  // Email content
  let mailOptions = {
    from: 'shantanuambadkar@gmail.com',
    to: 'shantanuambadkar@gmail.com',
    subject: 'New Form Submission',
    text: `Name: ${custName}\nEmail: ${custEmail}\nMobile No: ${custMobile}\nVehicl No: ${custVehicleNo},\nLocation: ${custLocation}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 5000 || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
