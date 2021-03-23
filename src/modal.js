import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./index.css";
import GetWebsiteInfo from "./websiteInfo";

const logoAndLinkLabel = [
  {
    logo: "github.png",
    linkLabel: "Github*",
    name: "github",
  },

  {
    logo: "linkedin.png",
    linkLabel: "Linkedin",
    name: "linekdin",
  },

  {
    logo: "Codechef.png",
    linkLabel: "Codechef",
    name: "codechef",
  },

  {
    logo: "hackerrank.png",
    linkLabel: "Hackerrank",
    name: "hackerrank",
  },

  {
    logo: "twitter.png",
    linkLabel: "Twitter",
    name: "twitter",
  },

  {
    logo: "medium.png",
    linkLabel: "Medium",
    name: "medium",
  },
];

class GetModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      githubURL: "",
      linkedinURL: "",
      codechefURL: "",
      hackerrankURL: "",
      twitterURL: "",
      mediumURL: "",
    };
  }

  changeHandler = (e) => {
    alert(JSON.stringify(this.state));
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    alert("Hello");
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const {
      githubURL,
      linkedinURL,
      codechefURL,
      hackerrankURL,
      twitterURL,
      mediumURL,
    } = this.state;
    return (
      <div className="modal">
        <form onSubmit={this.submitHandler}>
          <div className="modal-content">
            <div id="modal-heading">Add a Developer's Profile</div>

            {logoAndLinkLabel.map((linkDetail) => {
              switch (linkDetail.name) {
                case "linkedin":
                  return (
                    <GetWebsiteInfo
                      onChange={this.changeHandler}
                      value={linkedinURL}
                      linkDetail={linkDetail}
                    />
                  );

                case "codechef":
                  return (
                    <GetWebsiteInfo
                      onChange={this.changeHandler}
                      value={codechefURL}
                      linkDetail={linkDetail}
                    />
                  );

                case "hackerrank":
                  return (
                    <GetWebsiteInfo
                      onChange={this.changeHandler}
                      value={hackerrankURL}
                      linkDetail={linkDetail}
                    />
                  );

                case "twitter":
                  return (
                    <GetWebsiteInfo
                      onChange={this.changeHandler}
                      value={twitterURL}
                      linkDetail={linkDetail}
                    />
                  );

                case "medium":
                  return (
                    <GetWebsiteInfo
                      onChange={this.changeHandler}
                      value={mediumURL}
                      linkDetail={linkDetail}
                    />
                  );

                default:
                  return (
                    <GetWebsiteInfo
                      onChange={this.changeHandler}
                      value={githubURL}
                      linkDetail={linkDetail}
                    />
                  );
              }
            })}

            <div className="cancel-nd-submit">
              <label id="cancel-label">Cancel</label>
              <input type="submit" id="submit-btn" value="submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default GetModal;
