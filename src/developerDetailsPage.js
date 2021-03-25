import React, { Component } from "react";
import "./index.css";
import axios from "axios";
import GetDivider from "./divider";
import GetGithubRepoInfo from "./githubRepoInfo";

class GetDeveloperDetailsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      github: "",
      linkedin: "",
      codechef: "",
      hackerrank: "",
      twitter: "",
      medium: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    document.querySelector("#github-id-error").style.display = "none";
    console.log(this.state);
    const requestPayload = {
      codechef_id: this.state.codechef,
      github_id: this.state.github,
      hackerrank_id: this.state.hackerrank,
      linkedin_id: this.state.linkedin,
      medium_id: this.state.medium,
      twitter_id: this.state.twitter,
    };
    axios
      .post("http://localhost:7000/api/developers", requestPayload)
      .then((response) => {
        console.log("User Added");
        alert("User added Successfully!!");
        const root = document.querySelector("#root");
        const modal = document.querySelector(".modal");
        modal.style.display = "none";
        root.style.display = "block";
        root.style.position = "static";
        root.style.opacity = 1;
        return;
      })
      .catch((err) => {
        const githubErrorMessage = document.querySelector("#github-id-error");
        if (err.response.status === 409) {
          githubErrorMessage.style.display = "block";
          githubErrorMessage.innerHTML = "User already exists!!";
          githubErrorMessage.style.borderColor = "red";
        } else if (err.response.status === 400) {
          githubErrorMessage.style.display = "block";
          githubErrorMessage.innerHTML = "Invalid Github id!!";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="details-page">
        <div className="details-page-header">
          <div id="details-page-header-left-text">The Developer Profile</div>
          <div id="details-page-header-right-text">All Developers</div>
        </div>
        <div className="avatar-and-summary">
          <img
            id="details-page-avatar"
            src="https://avatars.githubusercontent.com/u/51911982?v=4"
            alt="inder"
          />
          <div id="developer-summary">
            <div id="developer-name">Indrapreet Singh</div>
            <div id="developer-bio">
              Software Development Engineer-Enquero-A Genpact Company.
            </div>
            <div id="developer-web-links">
              <img className="website-links" src="github.png" alt="" />
              <img className="website-links" src="hackerrank.png" alt="" />
              <img className="website-links" src="codechef.png" alt="" />
              <img className="website-links" src="linkedin.png" alt="" />
              <img className="website-links" src="twitter.png" alt="" />
            </div>
            <div className="developer-other-details">
              <img
                className="other-details-logo"
                alt="Location"
                src="location.svg"
              />
              <div className="other-details-text">Bengaluru</div>
              <img
                className="other-details-logo"
                alt="Company"
                src="company.svg"
              />
              <div className="other-details-text">
                Enquero - A Genpact Company
              </div>
              <img
                className="other-details-logo"
                alt="companyWebsite"
                src="company-website.svg"
              />
              <div className="other-details-text">www.enquero.com</div>
            </div>
          </div>
        </div>
        <div className="developer-repo-detail">
          <div id="github-repo-heading">Github Repositories</div>
          <GetDivider width="1340px"></GetDivider>
          <GetGithubRepoInfo></GetGithubRepoInfo>
          <GetGithubRepoInfo></GetGithubRepoInfo>
          <GetGithubRepoInfo></GetGithubRepoInfo>
          <GetGithubRepoInfo></GetGithubRepoInfo>
          <GetGithubRepoInfo></GetGithubRepoInfo>
        </div>
      </div>
    );
  }
}

export default GetDeveloperDetailsPage;
