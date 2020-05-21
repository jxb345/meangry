const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const { emailTemp } = require('./emailTemplate.js')

const send = (to, identifier, subject, body, verifyEmail) => {


  const whichTemplate = (verifyEmail, identifier, subject, body) => {
    const templateInfo = {};

    if (verifyEmail) {
      templateInfo.name = 'verify';
      templateInfo.locals = {
        identifier: identifier
      }
    } else {
      templateInfo.name = 'vent';
      templateInfo.locals = {
        subject: subject,
        body: body,
        identifier: identifier
      }
    }

    return templateInfo;

  }
    // let transporter = nodemailer.createTransport({
    //   service: process.env.MAILSERVICE,
    //   auth: {
    //     user: process.env.EMAILUSER,
    //     pass: process.env.PASS
    //   }
    // });

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

    // const email = new Email({
    //   message: {
    //     from: process.env.EMAILUSER
    //   },
    //   // uncomment below to send emails in development/test env:
    //   send: true,
    //   transport: nodemailer.createTransport({
    //     service: process.env.MAILSERVICE,
    //     auth: {
    //       user: process.env.EMAILUSER,
    //       pass: process.env.PASS
    //     }
    //   })
    // });

    console.log('emailSendInfo', emailSendInfo)

  //   email
  //     .send({
  //       template: emailSendInfo.template,
  //       message: {
  //         to: to
  //       }
  //       ,
  //       locals: emailSendInfo.locals
  //     })
  //     .then(console.log)
  //     .catch(console.error);

  // };

  emailTemp(emailSendInfo)
}

  module.exports = { send }