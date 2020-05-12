
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
const { send } = require('./sendEmail.js');
const { selectEmailAddress, numOfUsers, removeEmailAddress } = require('./models.js');
const {  saveEmail } = require('./emailsDbConnect.js')


app.use(express.static('public'));
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  numOfUsers((users) => {
    res.send({ users });
  });
});

app.get('/remove/:emailId', (req, res) => {
  console.log('req.params', req.params);
  const emailToRemove = req.params.emailId;
  removeEmailAddress(emailToRemove, () => {
    console.log('unsubscribed w/in REMOVE endpoint');
    res.send()
  })
})

app.post('/send', (req, res) => {
  let subject = req.body.subject;
  let body = req.body.body;
  console.log('insde /send', body)
  selectEmailAddress((recipient) => {
    send(recipient.email, subject, body)
  //  .then(() => {
  //    res.send(console.log('all complete from server.js'));
  //  });
  });
});

app.post('/email', (req, res) => {
  console.log('req.body in /email: ', req.body)
  saveEmail(req.body.email, () => {
    console.log('email saved from server.js');
    res.send('emailed saved from server.js');
  })
});


app.listen(3600, () => {
  console.log(`listening on 3600`);
});

