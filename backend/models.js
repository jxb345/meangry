const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const { Email } = require('./emailsDbConnect.js');


const selectEmailAddress = (callback) => {
  // const emailAddresses = {
  //   "emailUsername": 0,
  // }

  // let least = 0;
  // for (let key in emailAddresses) {
  //   if (emailAddresses[key] <= least) {
  //     least = emailAddresses[key];
  //     emailAddresses[key] += 1;
  //     recipient = process.env.EMAIL;
  //   }
  // }

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

module.exports = { selectEmailAddress }