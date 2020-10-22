import React, { useState, useEffect } from 'react';

function Signup () {
  const [email, setEmail] = useState({});
  const [signup, setSignup] = useState(true);
  const [emailAdded, setEmailAdded] = useState(false);
  const [users, setUsers] = useState(0);


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
    .then(response => response.json())
    .then(r => {
      console.log('r', r);
      setEmailAdded(true);
      })
  }

  useEffect(() => {
    fetch('/users')
    .then(response => response.json())
    .then(data => setUsers(data.users))
  })

  return (
    <div>
      <p className="receive-text">
        ...<i>receive</i> anonymous email:
      </p>
      <form>
        <input type="text" className="email-signup" placeholder="your email address" onChange={handleChangeForEmail}/>
        <br/>
        {
        (!emailAdded)
        ?
          <button className="signup-button" id="signup" type="button" onClick={handleSubmit}>SIGN UP</button>
          :
          <button className="signup-button" id="signup" type="button" style={{backgroundColor: "Grey"}} onClick={handleSubmit}>ADDED</button>
        }
    </form>
    <div>
      <br/>
      <br/>
    </div>
      <div>
        {users} signed up to receive heatMail.
      </div>
    </div>
  )

}

export default Signup;