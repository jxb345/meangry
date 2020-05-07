const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { Email } = require('./emailsDbConnect.js');

const selectEmailAddress = (callback) => {
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
    // return new Promise ((resolve, reject) => {
    //   resolve(result);
    // });
  })
}

module.exports = { selectEmailAddress, numOfUsers }