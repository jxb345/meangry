import react from 'react';


const Sidebar = () => {

  return (
    <div>
      <div className="rules-title">
      IMPORTANT
      </div>
      <div className="rules">
      {/* &#8226; Do NOT use: <br/> personal information <br/>
      &#8226; Do NOT use: <br/>names, locations, etc. <br/>
      &#8226; Do NOT use: <br/> bigoted language <br/>
      &#8226; Do NOT <br/>threaten violence <br/> */}
      Do <strong>NOT</strong> use: <br/>
      &#8226; personal information <br/>
      &#8226; names, locations, etc. <br/>
      &#8226; bigoted language of ANY kind <br/>
      &#8226; threatening language, incluing violence <br/>

      </div>
    </div>

  )
}

export default Sidebar