import React from "react";
import "./index.css";

function GetHeader() {
  return (
    <header className="header">
      <div id="header-text">
        <div>The Developer</div>
        <div>Repository</div>
      </div>

      <img src="header-image.png" alt="header-img" />
    </header>
  );
}

export default GetHeader;
