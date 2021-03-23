import React from "react";
import "./index.css";

function GetGithubIdNdAvatar(props) {
  let { name, url } = props;
  return (
    <div className="github-id-nd-avatar">
      <img id="avatar" alt={name} src={url} />
      <span id="github-id">Repository</span>
      <span id="north-east-icon">&#8599;</span>
    </div>
  );
}

export default GetGithubIdNdAvatar;
