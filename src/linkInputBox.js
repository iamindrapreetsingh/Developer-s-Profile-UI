import React from "react";
import "./index.css";

function GetLinkInputBox(props) {
  let { onChange, name, value } = props;
  return (
    <input
      onChange={onChange}
      name={name}
      value={value}
      className="link-input-box"
      type="text"
    />
  );
}

export default GetLinkInputBox;
