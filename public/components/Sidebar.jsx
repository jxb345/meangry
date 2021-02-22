import React from "react";

const Sidebar = () => {
  return (
    <div className="rules">
      <div className="rules-title">
        <img src="./error.png" height="30" width="30" alt=""/>
        IMPORTANT</div>
      <div className="rules-listed">
        {/* Do <strong>NOT</strong> use or include: <br /> */}
        {/* &#8226; personal information <br /> */}
        &#8226; NO names, locations <br />
        &#8226; NO bigoted language <br />
        &#8226; NO violent language <br />
        {/* &#8226; threatening language <br /> */}

      </div>
    </div>
  );
};

export default Sidebar;
