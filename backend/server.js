
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
const { send } = require('./sendEmail.js');
const { selectEmailAddress } = require('./models.js');

app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/send', (req, res) => {
  console.log('req.body', req.body);
  let subject = req.body.subject;
  let body = req.body.body;
  selectEmailAddress()
   .then(recipient => send(recipient, subject, body));
    res.status(console.log('email sent'));
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})

