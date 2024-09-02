import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";
import logo from "../../img/Logo.png";

class FirstPageView extends View {
  _parentElement = document.body;

  constructor() {
    super();
  }

  logBtnHandler(handler) {
    this._parentElement.addEventListener("click", handler);
  }

  render() {
    super.render();
    this._switchHandler();
  }

  _switchHandler() {
    this._logContainer = document.querySelector(".btn-holder");
    this.btnIn = document.querySelector(".sign-in-btn");
    this.btnOut = document.querySelector(".sign-up-btn");
    this.swi = document.querySelector(".switch");

    this._logContainer.addEventListener("mouseover", (e) => {
      e.preventDefault();
      const isSignIn = e.target.classList.contains("sign-in-btn");
      this.swi.classList.toggle("switch-left", isSignIn);
      this.swi.classList.toggle("switch-right", !isSignIn);
      this.btnIn.classList.toggle("btn-sign-active", isSignIn);
      this.btnOut.classList.toggle("btn-sign-active", !isSignIn);
    });
  }

  _generateMarkup() {
    return `
      <div class="page-container first-page">
        <div class="header">
          <div class="btn-holder btn-holder-first-page">
            <div class="switch switch-first-page"></div>
            <a class="sign-in-btn btn-sign-first-page btn-sign btn-sign-active" href="login">Log in</a>
            <a class="sign-up-btn btn-sign-first-page btn btn-sign" href="login">Sign up</a>
          </div>
          <img src="${logo}" class="header-logo" />
        </div>
        <div class="hero-content">
          <h1 class="primary-header">ReTreade: Fair Trade, Second-Hand Treasure</h1>
          <p class="hero-desc">Welcome to ReTreade, your destination for buying and selling pre-loved items at fair prices. Declutter and earn,<br />or shop sustainably for unique treasures.<br />Start your second-hand adventure today!</p>
          <button class="action-btn call-to-action-btn" onclick="window.location.href='/login'">Place your ad</button>
        </div>
      </div>`;
  }
}

export default new FirstPageView();
