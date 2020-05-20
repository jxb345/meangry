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

    let emailSendInfo = whichTemplate(verifyEmail, identifier, subject, body);
    // let htmlPropValue = ''
    // let hrefAttribute = `http://localhost:3600/remove/${identifier}`;

    // if (verifyEmail) {
    //   htmlPropValue =
    //   `<div>
    //     <a href=http://localhost:3600/verify/${identifier}>VERIFY</a> your email address to receive heatMail.
    //   </div>
    //   `
    // } else {
    //   htmlPropValue =
    //   `<p>${body}</p>
    //     <br/>
    //     <div>
    //     <a href=${hrefAttribute}>Unsubscribe</a> to stop receiving heatMail.
    //     </div>
    //     `
    // }

    // let mailOptions = {
    //   to: to,
    //   subject: subject,
    //   html: htmlPropValue
    // }

    const email = new Email({
      message: {
        from: process.env.EMAILUSER
      },
      // uncomment below to send emails in development/test env:
      send: true,
      transport: transporter
    });

    email
      .send({
        template: emailSendInfo.template,
        message: {
          to: to
        }
        ,
        locals: emailSendInfo.locals
      })
      .then(console.log)
      .catch(console.error);

  };

  const whichTemplate = (verifyEmail, identifier, subject, body) => {
    const templateInfo = {};

    if (verifyEmail) {
      templateInfo.template = 'verify';
      templateInfo.locals = {
        id: identifier
      }
    } else {
      templateInfo.template = 'vent';
      templateInfo.locals = {
        subject: subject,
        body: body
      }
    }

  }


  module.exports = { send }