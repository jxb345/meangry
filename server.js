const express = require('express');
const app = express();
const port = 3200;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hi')
} )

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

