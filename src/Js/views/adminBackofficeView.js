import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";
import icons from "../../img/icons.svg";
import logo from "../../img/Logo.png";

class BackofficeView extends View {
  _parentElement = document.body;

  constructor() {
    super();
  }

  render(data) {
    this._data = data;
    super.render();
  }

  backofficeBtnHandler(handler) {
    const sideEl = document.querySelector(".side-options");

    sideEl.addEventListener("click", (e) => {
      e.preventDefault();
      const el = document.querySelectorAll(".options");
      if (!el) return;

      el.forEach((elm) => elm.classList.remove("active-side-bar"));
      const event = e.target.closest(".options");
      if (!event) return;

      const targetSection = event.dataset.section;

      const activeEl = sideEl.querySelector(
        `[data-section="${targetSection}"]`
      );

      activeEl.classList.add("active-side-bar");

      if (targetSection) {
        targetSection === window.location.pathname.slice(1) ||
          history.pushState(
            { section: targetSection },
            "",
            `/${targetSection}`
          );

        handler(e);
      }
    });
  }

  backofficeBtnCreateAddHandler(handler) {
    const el = this._parentElement.querySelector(".action-btn");
    el.addEventListener("click", handler);
  }

  _generateMarkup() {
    return `
      <div class="back-office-page">
        <div class="side-bar">
          <div class="side-bar-header">
            <h2 class="user-name-side">${this._data.name}</h2>
            <p class="email-side">${this._data.email}</p>
          </div>

          <ul class="side-options">
            <li class="options" data-section="check-adds">
              <svg class="options-icon options-icon-side">
                <use xlink:href="${icons}#my-icon"></use>
              </svg>
              <p class="options-text">Check adds</p>
            </li>
            <li class="options" data-section="logout">
              <svg class="options-icon">
                <use href="${icons}#logout-icon"></use>
              </svg>
              <p class="options-text">Log out</p>
            </li>
          </ul>
        </div>
        <div class="back-office-container">
          <div class="back-office-header header">
            <img class="header-logo back-office-logo" src="${logo}" />
          </div>
          <div class="first-login-container">
            <h1 class="welcome-header">Welcome ${this._data.name}!</h1>
            <p class="welcome-text">
              Start approving or rejecting the adds by clicking on the check adds. 
            </p>
          </div>
        </div>
      </div>
      <div class="message">
        <p class="message-text"></p>
      </div>
      <div class="overlay">
      <div class="logout-modal">
        <p class="logout-message"></p>
        <div class="logout-btn-container">
          <button class="log-btn no-btn">No</button>
          <button class="log-btn yes-btn">Yes</button>
        </div>
      </div>
    </div>
    `;
  }
}

export default new BackofficeView();
