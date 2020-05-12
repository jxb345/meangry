const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/emailAddresses');

let emailSchema = mongoose.Schema({
  id: Number,
  email: String,
  numSent: Number,
  verified: Boolean
});

let Email = mongoose.model('Email', emailSchema);

const saveEmail = (email, cb) => {
  Email.create({ email: email, numSent: 0, verified: false }, (err) => {
    if (err) { throw err; }
    console.log('email saved !!!');
    cb();
  })
};

module.exports = { Email, saveEmail };

