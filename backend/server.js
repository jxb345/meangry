const express = require('express');
const app = express();
const port = 3200;
const { send } = require('./sendEmail.js');
const { selectEmailAddress } = require('./sendEmail.js');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

// app.post('/send', (req, res) => {
//   console.log('req')
//   res.send('test worked');
// });

app.post('/send', (req, res) => {
    console.log('req.body', req.body);
    // selectEmailAddress(() => {
    //   send(req.body.subject, req.body.body)
    // })
    res.status('email sent');
  })

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

