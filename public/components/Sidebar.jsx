import React from "react";

const Sidebar = () => {
  return (
    <div className="rules">
      <div className="rules-title">
        <img className="error-img" src="./warning-64.png" height="35" width="35" alt=""/>
      </div>
      <div className="rules-listed">
        NO names, locations,
        <br/>
        bigoted or violent language.
      </div>
    </div>
  );
};

export default Sidebar;
