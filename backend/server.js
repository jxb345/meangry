
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
const { send } = require('./sendEmail.js');
const { selectEmailAddress, numOfUsers } = require('./models.js');
const {  saveEmail } = require('./emailsDbConnect.js')


app.use(express.static('public'));
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  numOfUsers()
  .then(data => {
    console.log('data in users' , data);
    res.send(data);
  })
})

app.post('/send', (req, res) => {
  let subject = req.body.subject;
  let body = req.body.body;
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

