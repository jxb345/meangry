const express = require('express');
const app = express();
const port = 3200;
const { send } = require('./sendEmail.js')

app.use(express.static('public'));

app.get('/send', (req, res) => {
  res.send('hi')
} )

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

