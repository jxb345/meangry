const nodemailer = require('nodemailer');


const send = (to, subject, body) => {
  console.log('to', to)

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER,
        pass: process.env.PASS
      }
    });

    let mailOptions = {
      to: to,
      subject: subject,
      text: body
    }

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log('error', error);
      } else {
        console.log('Email sent', + info.response)
        return;
      }

    })
  };

  module.exports = { send }