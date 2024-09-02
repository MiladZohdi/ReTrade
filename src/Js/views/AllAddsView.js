import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";
import icons from "../../img/icons.svg";
import logo from "../../img/Logo.png";

class AllAddsView extends View {
  _parentElement = document.body;

  constructor() {
    super();
  }

  render(data) {
    this._data = data;
    super.render();
  }

  backToBackofficeHandler(handler) {
    const el = document.querySelector(".person-icon");

    el.addEventListener("click", (e) => {
      const btn = e.target.closest(".person-icon");
      if (!btn) return;
      handler();
    });
  }

  addSelectHandler(handler) {
    const cards = document.querySelector(".adds-container");
    cards.addEventListener("click", (e) => {
      const btn = e.target.closest(".card");
      if (!btn) return;
      const addID = +btn.dataset.id;
      handler(addID);
    });
  }

  _generateMarkup() {
    return `<div class="adds-page-container all-adds">
      <div class="header">
        <svg class="person-icon">
          <use href="${icons}#person"></use>
        </svg>
        <input
          class="search-bar"
          placeholder="search for your next treasure..."
        />
        <img src="${logo}" class="header-logo" />
      </div>

      <div class="adds-container">
                ${this._generateCardsMarkup()}
    </div>`;
  }

  _generateCardsMarkup() {
    return this._data
      .map(
        (itm) => `
            <div class="card my-add-card" data-id="${itm.id}">
              <img class="card-img" src="${
                itm.img || "https://placehold.co/600x400"
              }"/>
              <h1 class="card-title">${itm.title}</h1>
              <p class="card-price">$${itm.price}</p>
              <p class="card-disc">${
                itm.desc.length > 35 ? itm.desc.slice(0, 35) + "..." : itm.desc
              }</p>

            </div>`
      )
      .join("");
  }
}

export default new AllAddsView();
