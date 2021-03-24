const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const nodemailer = require("nodemailer");
const Email = require("email-templates");

const send = (to, identifier, subject, body, verifyEmail) => {
  const findTemplate = (verifyEmail, identifier, subject, body) => {
    const templateInfo = {};
    if (verifyEmail) {
      templateInfo.name = "verify";
      templateInfo.locals = {
        identifier: identifier,
      };
    } else {
      templateInfo.name = "vent";
      templateInfo.locals = {
        subject: subject,
        body: body,
        identifier: identifier,
      };
    }
    return templateInfo;
  };

  let template = findTemplate(verifyEmail, identifier, subject, body);

  console.log('to------------------', to)
  console.log("template", template);

  const root = path.join(__dirname, "emails");
  const email = new Email({
    views: { root },
    message: {
      from: process.env.EMAILUSER,
    },
    // uncomment below to send emails in development/test env:
    send: true,
    transport: nodemailer.createTransport({
      service: process.env.MAILSERVICE,
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.PASS,
      },
      debug: false,
      logger: false,
    }),
  });

  email
    .send({
      template: template.name,
      message: {
        // change value to parameter "to"
        to: process.env.EMAIL,
        attachments: [
          {
            filename: "heatMailTitle.png",
            path: "./public/heatMailTitle.png",
            cid: "1234", //same cid value as in the html img src
          },
        ],
      },
      locals: template.locals,
    })
    .then(console.log)
    .catch(console.error);
};

module.exports = { send };
