import React, { useState } from 'react';
import Signup from './Signup.jsx';
import EmailForm from './EmailForm.jsx';


function App ()  {
  const [signup, setSignup] = useState(false);
  const [emailForm, setEmailForm] = useState(false);

// const  [subject, setSubject] = useState('');
// const  [body, setBody] = useState('');
// const [signup, setSignup] = useState(true);

//   const handleSubjectChange = (e) => {
//     e.preventDefault();
//     setSubject(e.target.value)
//   }

//   const handleBodyChange = (e) => {
//     e.preventDefault();
//     setBody(e.target.value)
//     console.log('body', body)
//   }

//   async function postEmail (data) {
//     const response = await fetch('/send', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     });
//     return await response;
//   }

//   const handleSubmit = () => {
//     let email = {
//       subject: subject,
//       body: body
//     }

//     console.log('ex', JSON.stringify(email))

//     postEmail(email)
//       .then((d) => {
//         setSignup(true);
//         console.log('signup', signup)
//         console.log('d', d)
//       });
//   }

  return (
      <div className="grid">
        <div className="one">
          heatmail
        </div>
        <div className="two">
        Receive or Write
        </div>
        <div className="three">
          { (!signup)?
            <button onClick={() => { setSignup(!signup)}}>RECEIVE</button> :
            <Signup />
          }
        </div>
        <div className="four">
          { (!emailForm) ?
            <button onClick={() => { setEmailForm(!emailForm)}}>WRITE</button> :
            <EmailForm />
          }
        </div>
      {/* // <form>
      //     <input type="text" className="subject" placeholder="Subject" onChange={handleSubjectChange}/>
      //     <br/>
      //     <textarea type="text" className="body" rows="20" cols="100" onChange={handleBodyChange}/>
      //     <br/>
      //     <button type="button" onClick={handleSubmit}>SEND</button>
      //   </form>
        )} */}
      </div>
    )

}

export default App;