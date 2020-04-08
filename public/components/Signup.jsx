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
  }

  return (
    <div>
      <p>
        Enter your email address to receive anonymous heatmail.
      </p>
      <form>
        <label>Your Email:</label>
        <input type="text" className="subject" placeholder="email" onChange={handleChangeForEmail}/>
        <button type="button" onClick={handleSubmit}>SUBMIT</button>

    </form>
    </div>
  )

}

export default Signup;