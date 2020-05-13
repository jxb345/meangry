const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/emailAddresses');
const { v4: uuidv4 } = require('uuid');


let emailSchema = mongoose.Schema({
  id: Number,
  identifier: String,
  email: String,
  numSent: Number,
  verified: Boolean
});

let Email = mongoose.model('Email', emailSchema);

const saveEmail = (email, cb) => {
  let generateUnique = uuidv4();
  console.log('generateUnique', generateUnique)
  Email.create({ identifier: generateUnique, email: email, numSent: 0, verified: false }, (err) => {
    if (err) { throw err; }
    console.log('email saved !!!');
    cb();
  })
};

module.exports = { Email, saveEmail };

