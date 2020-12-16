const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const pug = require('pug');
const bodyParser = require("body-parser");
const { send } = require("./sendEmail.js");
const {
  selectEmailAddress,
  numOfUsers,
  verifyEmailAddress,
  removeEmailAddress,
} = require("./models.js");
const { saveEmail } = require("./emailsDbConnect.js");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/doNotReply", (req, res) => {
  res.render("doNotReply");
})

app.get("/users", (req, res) => {
  numOfUsers((users) => {
    res.send({ users });
  });
});

app.get("/remove/:emailId", (req, res) => {
  const emailIdToRemove = req.params.emailId;
  removeEmailAddress(emailIdToRemove, () => {
    res.render("unsubscribed");
  });
});

app.get("/verify/:emailId", (req, res) => {
  const emailIdToVerify = req.params.emailId;
  verifyEmailAddress(emailIdToVerify, () => {
    res.render("verified");
  });
});

app.post("/send", (req, res) => {
  let subject = req.body.subject;
  let body = req.body.body;
  // should each email be sent to... say, three
  // recipients instead of just one?
  selectEmailAddress((recipient) => {
  for (let i = 0; i < 3; i += 1) {
      send(recipient.email, recipient.identifier, subject, body, false);
  }
    res.send("email has been sent from /sent");
  });
});

app.post("/email", (req, res) => {
  let addToEmailList = req.body.email;
  let emailList = {};
  saveEmail(addToEmailList, (document) => {
    if (document === "ALREADY ADDED") {
      emailList.status = "ALREADY SIGNED UP!";
      res.send(emailList);
    } else {
      send(
        document.email,
        document.identifier,
        "Welcome to heatMail - Verify Your Email Address",
        "",
        true
      );
      emailList.status = "ADDED!";
      res.send(emailList);
    }
  });
});

app.listen(3600, () => {
  console.log(`listening on 3600`);
});
