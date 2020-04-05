import React from 'react';


function App ()  {


  return (
      <div>
      <form action="/send" method="POST">
          <input type="text" placeholder="Subject"/>
          <label >
            BODY
          </label>
          <input type="text" className="body"/>
          <button type="submit">SEND</button>
        </form>
      </div>
    )

}

export default App;