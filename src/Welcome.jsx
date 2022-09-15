import React from "react";
import {Link} from "react-router-dom";

function Welcome(props) {
  return (
    <div className="welcome_text">
      <h1>Welcome to Food's</h1>
      <h1>Kitchen</h1>
      <button><Link to="/fooditems" className="linkstyle">GO TO MENU</Link></button>
    </div>
  );
}

export default Welcome;