import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";
import logo from "../../img/Logo.png";

class notificationView extends View {
  _parentElement;

  constructor() {
    super();
  }

  render(data) {
    this._parentElement = document.querySelector(".back-office-container");
    this._data = data;
    super.render();
  }

  notificationReadHandler(handler) {
    const messages = document.querySelector(".notif-ul");

    messages.addEventListener("click", (e) => {
      const btn = e.target.closest(".notif");
      if (!btn) return;
      btn.classList.remove("unread");

      const messageContent = btn.children[1].textContent;

      handler(messageContent);
    });
  }

  _generateMarkup() {
    if (this._data.inbox.length <= 0) {
      return `
        <div class="back-office-header header">
          <img class="header-logo back-office-logo" src="${logo}" />
        </div>
        <div class="backoffice-tools-container">
          <div class="hero-content color-swap">
            <h1 class="welcome-header">No notification Yet!</h1>
            <p class="welcome-text">
              You don't have any notification right now!
            </p>
          </div>
        </div>`;
    }

    return `
      <div class="back-office-header header">
        <img class="header-logo back-office-logo" src="${logo}" />
      </div>
      <div class="backoffice-tools-container notifs-container">
          <div class="notifs-container">
            <ul class="notif-ul color-swap">
              ${this._generateCardsMarkup()}
            </ul>
        </div>
      </div>`;
  }

  _generateCardsMarkup() {
    return this._data.inbox
      .map(
        (itm) => `
            <li class="notif ${itm.isRead ? "" : "unread"}">
                <div class="dot"></div>
                <p>${itm.message}</p>
              </li>`
      )
      .join("");
  }
}

export default new notificationView();
