import "./style.css";
import { addButtonFunctionality } from "./utils/addMenuButton";
import waitForElm from "./utils/waitForElm";

function addChanges() {
  const wrapperEle = document.querySelector("header.site-header");
  const newAppEle = document.querySelector(".ca_aud_015");
  const body = document.body;

  if (newAppEle) {
    return;
  }
  if (wrapperEle) {
    const body = document.querySelector("body");
    if (!body) return;
    body.classList.add("ca_aud_015");
  }

  if (body) {
    body.insertAdjacentHTML(
      "beforeend",
      `
    <div class="ca_menu">
      <h1>Ahmed</h1>
    </div>
    `
    );
  }

  addButtonFunctionality();
}

waitForElm("header.site-header").then((_elm) => {
  const newEle = document.querySelector(".ca_aud_015");
  if (!newEle) {
    addChanges();
  }
});
