const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const nodemailer = require('nodemailer');

const send = (to, subject, body) => {
    console.log('body: ', body);
    let transporter = nodemailer.createTransport({
      service: process.env.MAILSERVICE,
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.PASS
      }
    });

    let mailOptions = {
      to: to,
      subject: subject,
      html:
      `<p>${body}</p><br/>
      <div>
      Click <a href="https://78sidekick.com">HERE</a> to stop
      receiving heatMail.
      </div>
      `
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