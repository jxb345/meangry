const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const Email = require('email-templates');


// let transporter = nodemailer.createTransport({
//   service: process.env.MAILSERVICE,
//   auth: {
//     user: process.env.EMAILUSER,
//     pass: process.env.PASS
//   }
// });
const emailTemp = (template) => {

  console.log('template', template)
    const root = path.join(__dirname, 'emails');
    const email = new Email({
      views: { root },
      message: {
        from: process.env.EMAILUSER
      },
      // uncomment below to send emails in development/test env:
      send: true,
      transport: nodemailer.createTransport({
        service: process.env.MAILSERVICE,
        auth: {
          user: process.env.EMAILUSER,
          pass: process.env.PASS
        }
      })
    });


    email
      .send(
        {
        template: template.name,
        message: {
          to: process.env.EMAIL
        }
        ,
        locals: {
          identifier: template.locals
        }
      }
      )
      .then(console.log)
      .catch(console.error);

}

module.exports = { emailTemp }