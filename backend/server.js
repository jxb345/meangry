const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const bodyParser = require("body-parser");
const { send } = require("./sendEmail.js");
const {
  collectFeedback,
  numOfUsers,
  removeEmailAddress,
  selectEmailAddress,
  verifyEmailAddress,
} = require("./models.js");
const { saveEmail } = require("./emailsDbConnect.js");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.urlencoded( { extended: true }));
app.use(bodyParser.json());


app.get("/about", (req, res) => {
  res.render("about");
})

app.get("/doNotReply", (req, res) => {
  res.render("doNotReply");
})

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

app.post("/feedback", (req, res) => {
  console.log('req.body--------------------------------', req.body)
  let feedback = req.body.feedback;
  let id = JSON.parse(Object.keys(req.body)[1]);
  id = id.identifier;
  collectFeedback(id , feedback, () => {
    res.render("thanksFeedback")
  })
})

app.get("/info", (req, res) => {
  res.render("info");
})


app.get("/remove/:emailId", (req, res) => {
  const emailIdToRemove = req.params.emailId;
  removeEmailAddress(emailIdToRemove, (identifier) => {
    res.render("unsubscribed", {
      identifier: identifier
    });
  });
});

app.post("/send", (req, res) => {
  let subject = req.body.subject;
  let body = req.body.body;
  selectEmailAddress((recipient) => {
      send(recipient.email, recipient.identifier, subject, body, false);
    res.send("email has been sent from /sent");
  });
});

app.get("/users", (req, res) => {
  numOfUsers((users) => {
    res.send({ users });
  });
});

app.get("/verify/:emailId", (req, res) => {
  const emailIdToVerify = req.params.emailId;
  console.log('emailtoverify', emailIdToVerify)
  verifyEmailAddress(emailIdToVerify, () => {
    res.render("verified");
  });
});


app.listen(3600, () => {
  console.log(`listening on 3600`);
});
