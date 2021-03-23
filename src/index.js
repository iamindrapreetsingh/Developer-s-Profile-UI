import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GetHeader from "./header";
import GetNonHeaderSection from "./nonHeaderSection";
import GetFooter from "./footer";
import GetModal from "./modal";

ReactDOM.render(
  <div>
    <GetHeader></GetHeader>
    <GetNonHeaderSection></GetNonHeaderSection>
    <GetFooter></GetFooter>
  </div>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <GetModal></GetModal>
  </div>,
  document.getElementById("modal-div")
);

/**
 *
 * DOM EVENTS
 *
 *
 */

const root = document.querySelector("#root");
const modal = document.querySelector(".modal");
const addDeveloperBtn = document.querySelector("#add-developer-btn");

document.querySelector("#cancel-label").addEventListener("click", () => {
  modal.style.display = "none";
  root.style.opacity = 1;
  root.style.position = "static";
});

addDeveloperBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  root.style.opacity = 0.3;
  root.style.position = "fixed";
});
