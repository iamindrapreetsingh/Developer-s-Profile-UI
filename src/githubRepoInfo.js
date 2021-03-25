import React from "react";
import GetDivider from "./divider";
import "./index.css";

function GetGithubRepoInfo(props) {
  return (
    <div>
      <div className="repo-name-and-desc">
        <span id="repo-name">Repository Name</span>
        <span id="repo-north-arrow">&#8599;</span>
        <span id="repo-created-at">Repo Created At</span>
      </div>
      <div id="repo-desc">This is the repo description</div>
      <GetDivider width="30px" marginTop="10px"></GetDivider>
    </div>
  );
}

export default GetGithubRepoInfo;
