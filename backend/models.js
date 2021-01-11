const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { Email } = require("./emailsDbConnect.js");

const collectFeedback = (identifier, feedback, callback) => {
  Email.findOneAndUpdate(
    { identifier: identifier },
    {feedback: feedback, email: null },
    (err) => {
      if (err) {
      throw new Error('A problem finding updating an unsubscribed user\'s feedback')
      }
      callback();
    }
  );
}


const numOfUsers = (callback) => {
  Email.countDocuments().exec((err, result) => {
    if (err) {
      throw new Error('A problem with finding the total number of users');
    }
    callback(result);
  });
};

const removeEmailAddress = (identifier, callback) => {
  Email.findOneAndUpdate(
    { identifier: identifier },
    { unsubscribed: true },
    (err) => {
      if (err) {
        throw new Error('A problem finding or updating user for verification');
      }
      console.log('id------- in rEAdd', identifier)
      callback(identifier);
    }
  );
  // Email.deleteOne({ identifier: identifier }, (err) => {
  //   if (err) {
  //     throw new Error('A problem unsubscribing user from receiving heatMail');
  //   }
  //   callback();
  // });
};


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




module.exports = {
  collectFeedback,
  numOfUsers,
  removeEmailAddress,
  selectEmailAddress,
  verifyEmailAddress,
};
