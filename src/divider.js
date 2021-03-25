import React from "react";
import "./index.css";

function GetDivider(props) {
  const {width,marginTop} = props;
  return <hr style={{ width: {width}, marginTop: {marginTop} }} className="divider" />;
}

export default GetDivider;
