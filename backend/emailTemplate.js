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

const email = new Email({
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

console.log('email.send', email.send)

email
  .send(
    {
    template: 'verify',
    message: {
      to: process.env.EMAIL
    }
    ,
    locals: {
      identifier: 'testId'
    }
  }
  )
  .then(console.log)
  .catch(console.error);