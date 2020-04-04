const express = require('express');
const app = express();
const port = 3200;
const { send } = require('./sendEmail.js')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.post('/send', (req, res) => {
  console.log('req.body', req.body);
  res.status('email sent');
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

