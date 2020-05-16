const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const nodemailer = require('nodemailer');
const Email = require('email-templates');

const send = (to, identifier, subject, body, verifyEmail) => {
    let transporter = nodemailer.createTransport({
      service: process.env.MAILSERVICE,
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.PASS
      }
    });

    let htmlPropValue = ''
    let hrefAttribute = `http://localhost:3600/remove/${identifier}`;

    if (verifyEmail) {
      htmlPropValue =
      `<div>
        <a href=http://localhost:3600/verify/${identifier}>VERIFY</a> your email address to receive heatMail.
      </div>
      `
    } else {
      htmlPropValue =
      `<p>${body}</p>
        <br/>
        <div>
        <a href=${hrefAttribute}>Unsubscribe</a> to stop receiving heatMail.
        </div>
        `
    }

    // let mailOptions = {
    //   to: to,
    //   subject: subject,
    //   html: htmlPropValue
    // }

    const email = new Email({
      message: {
        from: 'too.angrily@gmail.com'
      },
      // uncomment below to send emails in development/test env:
      // send: true
      transport: {
        jsonTransport: true
      }
    });

    email
      .send({
        template: 'verify',
        message: {
          to: 'jkurtasbell@gmail'
        }
        // ,
        // locals: {
        //   name: 'Elon'
        // }
      })
      .then(console.log)
      .catch(console.error);


    // transporter.sendMail(email, function(error, info) {
    //   if (error) {
    //     console.log('error', error);
    //   } else {
    //     console.log('Email sent', + info.response)
    //     return;
    //   }

    // })
  };

  module.exports = { send }