import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";
import icons from "../../img/icons.svg";
import logo from "../../img/Logo.png";

class SavedAddsView extends View {
  _parentElement;

  constructor() {
    super();
  }

  render(data) {
    this._parentElement = document.querySelector(".back-office-container");
    this._data = data;
    super.render();
  }

  update(data) {
    if (data.saved.length === 0) {
      this.render(data);
      return;
    }
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));

    const newElementIds = newElements
      .map((el) => el.dataset.id)
      .filter((id) => id);
    const curElementIds = curElements
      .map((el) => el.dataset.id)
      .filter((id) => id);

    curElementIds.forEach((id) => {
      if (!newElementIds.includes(id)) {
        const elToRemove = this._parentElement.querySelector(
          `[data-id="${id}"]`
        );
        if (elToRemove) elToRemove.remove();
      }
    });

    newElements.forEach((newEl) => {
      const curEl = this._parentElement.querySelector(
        `[data-id="${newEl.dataset.id}"]`
      );
      if (curEl) {
        if (newEl.textContent !== curEl.textContent) {
          curEl.textContent = newEl.textContent;
        }

        Array.from(newEl.attributes).forEach((attr) => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });

    const newCards = newElements.filter((el) => el.classList.contains("card"));
    newCards.forEach((newCard) => {
      const existingCard = this._parentElement.querySelector(
        `[data-id="${newCard.dataset.id}"]`
      );
      if (!existingCard) {
        this._parentElement
          .querySelector(".cards-container")
          .insertAdjacentElement("beforeend", newCard);
      }
    });
  }

  selectAddHandler(handler) {
    this._parentElement.addEventListener("click", function (e) {
      if (e.target.closest(".backoffice-saved-icon")) return;
      const elId = e.target.closest(".card");
      if (!elId) return;
      const addID = +elId.dataset.id;
      history.pushState({ section: addID }, "", `#${addID}`);
      handler(addID);
    });
  }

  unsaveHandler(handler) {
    const svgIcon = this._parentElement.querySelectorAll(
      ".backoffice-saved-icon"
    );

    svgIcon.forEach((svg) => svg.addEventListener("click", handler));
  }

  _generateMarkup() {
    if (this._data.saved.length === 0) {
      return `
        <div class="back-office-header header">
          <img class="header-logo back-office-logo" src="${logo}" />
        </div>
        <div class="backoffice-tools-container">
          <div class="hero-content color-swap">
            <h1 class="welcome-header">No saved ads yet!</h1>
            <p class="welcome-text">
              Check out the ads by selecting "See all the ads" on the panel and save some for future use!
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
    return this._data.saved.map(
      (itm) => `
        <a class="card saved-card" data-id="${itm.id}">
          <img class="card-img" src="${
            itm.img || "https://placehold.co/600x400"
          }" alt="${itm.title}" />
          <h1 class="card-title">${itm.title}</h1>
          <p class="card-price">$${itm.price}</p>
          <p class="card-disc">${
            itm.description || "No description available"
          }</p>
          <svg class="backoffice-saved-icon options-icon-fill">
            <use xlink:href="${icons}#save-icon"></use>
          </svg>
        </a>`
    );
  }
}

export default new SavedAddsView();
