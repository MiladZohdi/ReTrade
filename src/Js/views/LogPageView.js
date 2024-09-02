import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";

class LogView extends View {
  _parentElement = document.body;

  constructor() {
    super();
  }

  render(data) {
    this._data = data;

    super.render(data);
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

  logMethodChangeHandler(handler) {
    this._parentElement
      .querySelector(".btn-holder")
      .addEventListener("click", handler.bind(event));
  }

  loginBtnHandler(handler) {
    document.querySelector(".form").addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = Object.fromEntries([...new FormData(e.target)]);

      if (e.target.classList.contains("form-sign-up")) {
        dataArr.method = "signUp";
        dataArr.password === dataArr.passwordCon
          ? handler(dataArr)
          : alert("Passwords are not the same");
      } else {
        dataArr.method = "logIn";
        handler(dataArr);
      }
    });
  }

  _generateMarkup() {
    const mk = this.markupInner();
    return `
      <div class="page-container log-sign-page">
        <div class="form-container">
          <div class="btn-holder btn-holder-form">
            <div class="switch switch-form ${
              this._data === "logIn" ? "switch-left" : "switch-right"
            }"></div>
            <button class="sign-in-btn btn-sign-form btn-sign ${
              this._data === "logIn" ? "btn-sign-active" : ""
            }"> 
              Log in
            </button>
            <button class="sign-up-btn btn-sign-form btn-sign ${
              this._data === "signUp" ? "btn-sign-active" : ""
            }">Sign up</button>
          </div>
          ${mk}
        </div>
      </div>
      <div class="message">
        <p class="message-text"></p>
      </div>`;
  }

  markupInner() {
    if (this._data === "logIn")
      return `<form class="form form-log-in">
          <input
            name="email" 
            class="input email-input"
            type="email"
            placeholder="info@email.com"
            pattern="^[a-zA-Z0-9._%+-]+@example\\.com$" 
            size="30"
            required
          />
          <input
            class="input password-input"
            type="password"
            id="pass"
            name="password"
            minlength="8"
            placeholder="password"
            required
          />
          <button type="submit" class="action-btn log-in-form log-sign-btn log-in-form-btn--margin">Log in</button>
        </form>`;
    else
      return `<form class="form form-sign-up">
             <input
              class="input password-input"
              type="text"
              id="name"
              name="name"
              minlength="3"
              maxlength="30"
              placeholder="Name"
              required
            />
            <input
              name="email" 
              class="input email-input"
              type="email"
              placeholder="email"
              pattern="^[a-zA-Z0-9._%+-]+@example\\.com$" 
              size="30"
              required
            />
            <input
              class="input password-input"
              type="password"
              id="pass"
              name="password"
              minlength="8"
              placeholder="password"
              required
            />
            <input
              class="input password-input"
              type="password"
              id="pass-con"
              name="passwordCon"
              minlength="8"
              placeholder="Confirm password"
              required
            />
            <button class="action-btn log-sign-btn log-in-form-btn--margin">
              Sign Up 
            </button>
          </form>`;
  }
}

export default new LogView();
