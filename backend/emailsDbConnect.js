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
  const generateUnique = () => {
    return uuidv4();
  }
  Email.create({ identifier: generateUnique(), email: email, numSent: 0, verified: false }, (err, result) => {
    if (err) { throw err; }
    console.log('email saved !!!');
    cb(result);
  })
};

module.exports = { Email, saveEmail };

