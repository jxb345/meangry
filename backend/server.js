const express = require('express');
const app = express();
const port = 3200;
const bodyParser = require('body-parser')
const { send } = require('./sendEmail.js');
const { selectEmailAddress } = require('./sendEmail.js');

app.use(express.static('public'));
app.use(bodyParser.json())

app.post('/send', (req, res) => {
    console.log('req.body', req.body);
    // selectEmailAddress(() => {
    //   send(req.body.subject, req.body.body)
    // })
    res.status(console.log('email sent'));
  })

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

