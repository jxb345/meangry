const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/emailAddresses');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'emailAddresses';

// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   const db = client.db(dbName);
//   client.close();
// });



let emailSchema = mongoose.Schema({
  id: Number,
  email: String,
  numSent: Number
});

let Email = mongoose.model('Email', emailSchema);

const saveEmail = (email) => {

  Email.create({ email: email, numSent: 0 }, cb)
}

module.exports = { saveEmail };

