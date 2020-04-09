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

  Email.findOne({}).sort({ numSent: 'descending'}).exec( (err, result) => {
    if (err) { throw err; }
    let recipient = result;
    console.log('recipient in selectEmailAddress', recipient);
    callback(recipient);
  })
};

module.exports = { selectEmailAddress }