import React from 'react';


function App ()  {


  return (
      <div>
      <form action="/send" method="POST">
          <label >
            SUBJECT
          </label>
          <input type="text"/>
          <label >
            BODY
          </label>
          <input type="text"/>
          <button type="submit">SEND</button>
        </form>
      </div>
    )

}

export default App;