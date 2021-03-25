import React, { Component } from "react";
import "./index.css";
import GetDivider from "./divider";
import GetGithubIdNdAvatar from "./githubIdNdAvatar";

class GetNonHeaderSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      developersList: [],
      searchBoxValue: null
    };
  }

  async searchUsers() {
    
  }

  async fetchUsers() {
    const response = await fetch("http://localhost:7000/api/developers");
    const data = await response.json();
    this.setState({ developersList: data });
  }

  async componentDidMount() {
    this.fetchUsers();
  }

  render() {
    return (
      <div className="non-header-section">
        <div id="below-header-text">Explore Developer Profiles</div>
        <GetDivider></GetDivider>
        <div id="search-box-div">
          <input defaultValue={this.state.searchBoxValue} placeholder="Search for Username" id="search-input-box" />
          <img onClick={this.searchUsers()} id="search-icon" alt="search-icon" src="search-icon.svg" />
        </div>
        <div className="github-id-nd-avatar-section">
          {this.state.developersList.map((user) => (
            <GetGithubIdNdAvatar
              githubId={user.github_id}
              avatarUrl={user.avatar_url}
            />
          ))}
        </div>
        <GetDivider></GetDivider>
        <div id="could-not-find-text">Explore Developer Profiles</div>
        <input
          id="add-developer-btn"
          type="button"
          value="Add Developer Info"
        />
      </div>
    );
  }
}

export default GetNonHeaderSection;
