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
            <li class="options" data-section="saved-adds">
              <svg class="options-icon options-icon-side">
                <use xlink:href="${icons}#save-icon"></use>
              </svg>
              <p class="options-text">Saved adds</p>
            </li>
            <li class="options" data-section="my-adds">
              <svg class="options-icon">
                <use xlink:href="${icons}#my-icon"></use>
              </svg>
              <p class="options-text">My adds</p>
            </li>
            <li class="options" data-section="create-add">
              <svg class="options-icon">
                <use xlink:href="${icons}#add-icon"></use>
              </svg>
              <p class="options-text">Create new add</p>
            </li>
            <li class="options" data-section="notifications">
              <svg class="options-icon">
                <use xlink:href="${icons}#notif-icon"></use>
              </svg>
              <p class="options-text">Notifications</p>
            </li>
            <li class="options see-adds" data-section="see-adds">
              <svg class="options-icon">
                <use xlink:href="${icons}#eye-icon"></use>
              </svg>
              <p class="options-text">See all the adds</p>
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
              We're excited to offer you the opportunity to sell your pre-loved
              items at a fair price Or find great second-hand deals, saving you
              money on new purchases.<br /><br />
              Take your time and make your selections carefully.
            </p>
            <button class="action-btn call-to-action-btn">Place your add</button>
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
