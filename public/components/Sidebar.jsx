import React from "react";

const Sidebar = () => {
  return (
    <div className="rules">
      <div className="rules-title">
        <img className="error-img" src="./warning-64.png" height="35" width="35" alt=""/>
      </div>
      <div className="rules-listed">
        {/* Do <strong>NOT</strong> use or include: <br /> */}
        {/* &#8226; personal information <br /> */}
        {/* &#8226; NO names, locations <br />
        &#8226; NO bigoted language <br />
        &#8226; NO violent language <br /> */}
        No names, locations, bigoted or violent language.
        {/* &#8226; threatening language <br /> */}

      </div>
    </div>
  );
};

export default Sidebar;
