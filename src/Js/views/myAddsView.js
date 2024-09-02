import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";
import logo from "../../img/Logo.png";

class myAddsView extends View {
  _parentElement;

  constructor() {
    super();
  }

  render(data) {
    this._parentElement = document.querySelector(".back-office-container");
    this._data = data;
    super.render();
  }

  editAddBtnHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".edit-option");
      if (!btn) return;
      const id = +e.target.closest(".card").dataset.id;
      history.pushState({ section: id }, "", `#${id}`);
      handler(id);
    });
  }

  _generateMarkup() {
    if (this._data.myAdds.length <= 0) {
      return `
        <div class="back-office-header header">
          <img class="header-logo back-office-logo" src="${logo}" />
        </div>
        <div class="backoffice-tools-container">
          <div class="hero-content color-swap">
            <h1 class="welcome-header">You have no adds Yet!</h1>
            <p class="welcome-text">
              Use create new add to place a new add with a fair price!
            </p>
          </div>
        </div>`;
    }

    return `
      <div class="back-office-header header">
        <img class="header-logo back-office-logo" src="${logo}" />
      </div>
      <div class="backoffice-tools-container">
        <div class="cards-container">
          ${this._generateCardsMarkup()}
        </div>
      </div>`;
  }

  _generateCardsMarkup() {
    return this._data.myAdds
      .map(
        (itm) => `
            <div class="card my-add-card" data-id="${itm.id}">
              <img class="card-img" src="${
                itm.img || "https://placehold.co/600x400"
              }"/>
              <h1 class="card-title">${itm.title}</h1>
              <p class="card-price">$${itm.price}</p>
              <div class="status ${itm.state}">${itm.state}</div>
              <button class="edit-option">Edit</button>
            </div>`
      )
      .join("");
  }
}

export default new myAddsView();
