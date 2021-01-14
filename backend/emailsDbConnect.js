const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/emailAddresses");
const { v4: uuidv4 } = require("uuid");

let emailSchema = mongoose.Schema({
  id: Number,
  identifier: String,
  email: String,
  numSent: Number,
  verified: Boolean,
  feedback: String,
  unsubscribed: Boolean
});

let Email = mongoose.model("Email", emailSchema);

const saveEmail = (email, cb) => {
  const generateUnique = () => {
    return uuidv4();
  };

  Email.findOne({ email: email }, (err, docs) => {
    if (err) {
      throw err;
    }
  }).then((results) => {
    if (results === null) {
      Email.create(
        {
          identifier: generateUnique(),
          email: email,
          numSent: 0,
          verified: false,
          unsubscribed: null,
          feedback: null

        },
        (err, result) => {
          if (err) {
            throw err;
          }
          cb(result);
        }
      );
    } else {
      cb("email already present");
    }
  });
};

module.exports = { Email, saveEmail };
