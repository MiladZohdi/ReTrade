import "core-js/stable";
import "regenerator-runtime/runtime.js";

import { MESSAGE_SHOW_TIME } from "../helpers.js";

export default class View {
  _data;

  constructor() {}

  render(data = this._data) {
    this._data = data;
    this.clear();
    this._parentElement.insertAdjacentHTML(
      "afterbegin",
      this._generateMarkup()
    );
  }

  clear() {
    this._parentElement.innerHTML = "";
  }

  renderError(errMessage) {
    const messEl = document.querySelector(".message");
    const messTextEl = document.querySelector(".message-text");
    messEl.classList.remove("success");
    messEl.classList.add("active-message", "error");
    messTextEl.textContent = errMessage;

    setTimeout(() => {
      messEl.classList.remove("active-message");
    }, MESSAGE_SHOW_TIME * 1000);
  }

  renderSuccess(message) {
    const messEl = document.querySelector(".message");
    const messTextEl = document.querySelector(".message-text");

    messEl.classList.remove("error");
    messEl.classList.add("active-message", "success");
    messTextEl.textContent = message;

    setTimeout(() => {
      messEl.classList.remove("active-message");
    }, MESSAGE_SHOW_TIME * 1000);
  }

  renderQ(message) {
    this._parentElement = document.querySelector(".overlay");
    this._parentElement.classList.add("active-overlay");
    this._parentElement.querySelector(".logout-message").textContent = message;
  }

  overlayBtnHandler(e) {
    const btn = e.target;

    const overlay = document.querySelector(".overlay");

    if (!btn) return;

    if (btn.classList.contains("overlay")) {
      overlay.classList.remove("active-overlay");
    }
    if (btn.classList.contains("no-btn")) {
      overlay.classList.remove("active-overlay");
    }
    if (btn.classList.contains("yes-btn")) {
      return true;
    }
  }
}
