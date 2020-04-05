import React, { useState } from 'react';


function App ()  {
const  [subject, setSubject] = useState('');
const  [body, setBody] = useState('');

  const handleSubjectChange = (e) => {
    e.preventDefault();
    setSubject(e.target.value)
  }

  const handleBodyChange = (e) => {
    e.preventDefault();
    setBody(e.target.value)
    console.log('body', body)
  }

  async function handleSubmit (){
    // let email = {
    //   subject: subject,
    //   body: body
    // }
    const response = await fetch('/test')
    .then((data) => {
      console.log('hi')
    })
    return await response.json();

  }

  return (
      <div>
      <form>
          <input type="text" className="subject" placeholder="Subject" onChange={handleSubjectChange}/>
          <br/>
          <textarea type="text" className="body" rows="20" cols="100" onChange={handleBodyChange}/>
          <br/>
          <button type="submit" onSubmit={handleSubmit}>SEND</button>
        </form>
      </div>
    )

}

export default App;