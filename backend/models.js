const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { Email } = require("./emailsDbConnect.js");

const selectEmailAddress = (callback) => {
  Email.findOne({ verified: true })
    .sort({ numSent: 1 })
    .exec((err, result) => {
      if (err) {
        throw new Error('A problem finding an email recipient for a heatMail');
      }
      let recipient = result;
      let numSentValue = result.numSent;
      result.numSent = numSentValue + 1;
      result.save(callback(recipient));
    });
};

const numOfUsers = (callback) => {
  Email.countDocuments().exec((err, result) => {
    if (err) {
      throw new Error('A problem with finding the total number of users');
    }
    callback(result);
  });
};

const verifyEmailAddress = (identifier, callback) => {
  Email.findOneAndUpdate(
    { identifier: identifier },
    { verified: true },
    (err) => {
      if (err) {
        throw new Error('A problem finding or updating user for verification');
      }
      callback();
    }
  );
};

const removeEmailAddress = (identifier, callback) => {
  Email.deleteOne({ identifier: identifier }, (err) => {
    if (err) {
      throw new Error('A problem unsubscribing user from receiving heatMail');
    }
    callback();
  });
};

module.exports = {
  selectEmailAddress,
  numOfUsers,
  removeEmailAddress,
  verifyEmailAddress,
};
