const nodemailer = require('nodemailer');

const send = (to, subject, body) => {

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: email,
        pass: password,
      }
    });

    let mailOptions = {
      from: from,
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