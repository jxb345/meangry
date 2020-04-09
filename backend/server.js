
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
const { send } = require('./sendEmail.js');
const { selectEmailAddress } = require('./models.js');
const {  saveEmail } = require('./emailsDbConnect.js')


app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/send', (req, res) => {
  console.log('req.body', req.body);
  let subject = req.body.subject;
  let body = req.body.body;
  selectEmailAddress()
   .then(recipient => send(recipient, subject, body));
    res.send('all complete from server.js')
});

app.post('/email', (req, res) => {
  console.log('req,body in /eamil', req.body)
  saveEmail(req.body)
})

app.listen(3600, () => {
  console.log(`listening on 3600`);
})

