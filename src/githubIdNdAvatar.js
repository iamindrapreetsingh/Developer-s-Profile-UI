import React from "react";
import "./index.css";

function GetGithubIdNdAvatar(props) {
  let { githubId, avatarUrl } = props;
  return (
    <div className="github-id-nd-avatar">
      <img id="avatar" alt={avatarUrl} src={avatarUrl} />
      <span id="github-id">{githubId}</span>
      <span id="north-east-icon">&#8599;</span>
    </div>
  );
}

export default GetGithubIdNdAvatar;
