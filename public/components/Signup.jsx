import React, { useState } from 'react';

function Signup () {
  const [email, setEmail] = useState({});
  const [signup, setSignup] = useState(true);


  const handleChangeForEmail = (e) => {
    setEmail({ email: e.target.value });

  }

  const handleSubmit = () => {
    console.log('emai', email)
    fetch('/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
    .then(res => {
      console.log('res', res);
    })
  }

  return (
    <div>
      <p className="receive-text">
        ...or <i>receive</i> anonymous heatMail.
      </p>
      <form>
        <input type="text" className="email-signup" placeholder="your email address" onChange={handleChangeForEmail}/>
        <br/>
        <button className="signup-button" type="button" onClick={handleSubmit}>SUBMIT</button>

    </form>
    </div>
  )

}

export default Signup;