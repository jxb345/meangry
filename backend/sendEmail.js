const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const nodemailer = require('nodemailer');

const send = (to, subject, body, verifyEmail) => {
    console.log('body: ', body);
    let transporter = nodemailer.createTransport({
      service: process.env.MAILSERVICE,
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.PASS
      }
    });

    let htmlPropValue = ''
    let hrefAttribute = `http://localhost:3600/remove/${to}`;

    if (verifyEmail) {
      htmlPropValue =
      `<div>
        Click <a href=http://localhost:3600/verify/${to}>HERE</a> to VERIFY your email address.
      </div>
      `
    } else {
      htmlPropValue =
      `<p>${body}</p>
        <br/>
        <div>
        Click <a href=${hrefAttribute}>HERE</a> to stop
        receiving heatMail.
        </div>
        `

    }


    let mailOptions = {
      to: to,
      subject: subject,
      html: htmlPropValue
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