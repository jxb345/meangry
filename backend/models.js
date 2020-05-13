const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { Email } = require('./emailsDbConnect.js');

const selectEmailAddress = (callback) => {
  // need to check if verfied is true in order to
  Email.findOne({}).sort({ numSent: 1 }).exec( (err, result) => {
    if (err) { throw err; }
    console.log('result', result)
    let recipient = result;
    let numSentValue = result.numSent;
    result.numSent = numSentValue + 1;
    console.log('recipient in selectEmailAddress', recipient._id);
    // Email.findOneAndUpdate(  { email: recipient.email }, { email: 'updated' } )
    result.save(callback(recipient));
  })
};

const numOfUsers = (callback) => {
  Email.countDocuments().exec( (err, result) => {
    if (err) { throw err; }
    console.log('num of users', result);
    callback(result);
  })
}

const verifyEmailAddress = (email, callback) => {
  Email.updateOne( {email: email, verified: true}, (err) => {
    if (err) { throw err };
    console.log('email verified');
    callback();
  })
}

const removeEmailAddress = (email, callback) => {
  Email.deleteOne({email: email}, (err) => {
    if (err) { throw err };
    console.log('email deleted!')
    callback()
  })
}


module.exports = { selectEmailAddress, numOfUsers, removeEmailAddress, verifyEmailAddress }