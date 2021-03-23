import React from "react";
import "./index.css";
import GetDivider from "./divider";
import GetGithubIdNdAvatar from "./githubIdNdAvatar";

function GetNonHeaderSection() {
  const arr = [
    {
      name: "Indrapreet",
      url:
        "https://avatars.githubusercontent.com/u/51911982?s=460&u=0004deee8d2591f4fc0cf119b3e50cb72681c410&v=4",
    },
    {
      name: "Indrapreet2",
      url:
        "https://avatars.githubusercontent.com/u/51911982?s=460&u=0004deee8d2591f4fc0cf119b3e50cb72681c410&v=4",
    },
  ];

  return (
    <div className="non-header-section">
      <div id="below-header-text">Explore Developer Profiles</div>
      <GetDivider></GetDivider>
      <div id="search-box-div">
        <input placeholder="Search for Username" id="search-input-box" />
        <img id="search-icon" alt="search-icon" src="search-icon.svg" />
      </div>
      <div className="github-id-nd-avatar-section">
        {arr.map((user) => (
          <GetGithubIdNdAvatar name={user.name} url={user.url} />
        ))}
      </div>
      <GetDivider></GetDivider>
      <div id="could-not-find-text">Explore Developer Profiles</div>
      <input id="add-developer-btn" type="button" value="Add Developer Info" />
    </div>
  );
}

export default GetNonHeaderSection;
