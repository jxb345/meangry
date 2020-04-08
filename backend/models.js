const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


const selectEmailAddress = () => {
  const emailAddresses = {
    "emailUsername": 0,

  }

  let least = 0;
  let recipient;
  for (let key in emailAddresses) {
    if (emailAddresses[key] <= least) {
      least = emailAddresses[key];
      emailAddresses[key] += 1;
      recipient = process.env.EMAIL;
    }
  }
  console.log('recipient', recipient)
  return new Promise((resolve, reject) => {
    if (recipient) {
      resolve(recipient);
    } else {
      reject();
    }
  })
};

module.exports = { selectEmailAddress }