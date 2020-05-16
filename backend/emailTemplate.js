const Email = require('email-templates');

const email = new Email({
  message: {
    from: 'too.angrily@gmail.com'
  },
  // uncomment below to send emails in development/test env:
  // send: true
  transport: {
    jsonTransport: true
  }
});

email
  .send({
    template: 'verify',
    message: {
      to: 'jkurtasbell@gmail.com.com'
    }
    ,
    locals: {
      identifier: 'testId'
    }
  })
  .then(console.log)
  .catch(console.error);