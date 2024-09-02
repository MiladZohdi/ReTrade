import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";

class checkAddsPreviewView extends View {
  _parentElement = document.body;

  constructor() {
    super();
  }

  render(data) {
    this._data = data;
    super.render();
  }

  checkAddBackButtonHandler(handler) {
    const backButton = this._parentElement.querySelector(".back-btn");
    if (!backButton) return;
    backButton.addEventListener("click", handler);
  }

  checkApproveRejectBtnHandler(handler) {
    const el = document.querySelector(".con-rej-btn");

    el.addEventListener("click", function (e) {
      e.preventDefault();
      const btn = e.target.closest(".log-btn");
      if (!btn) return;

      const addID = +window.location.hash.slice(1);

      if (btn.classList.contains("approve-btn"))
        handler({ id: addID, state: "confirmed" });
      if (btn.classList.contains("reject-btn"))
        handler({ id: addID, state: "reject" });
    });
  }

  _generateMarkup() {
    return `
    <div class="page-container add-info-page">
      <div class="back-button-container">
        <button class="back-btn">Back</button>
      </div>

      <div class="add-info-container">
        <div class="add-info-text color-swap">
          <h2 class="product-title">${this._data.title}</h2>
          <h2 class="price">Price: $${this._data.price}</h2>
          <p class="product-data">Add placed date: ${
            this._data.date || "Unknown"
          }</p>
          <p class="contact-info">Contact information: ${
            this._data.contactInfo
          }</p>
          <p class="product-disc">
            ${this._data.desc || "No description available"}
          </p>

          <div class="con-rej-btn"> 
             <button class="log-btn approve-btn">Approve</button>
              <button class="log-btn reject-btn">Reject</button>
          </div> 
        </div>
        <div class="add-img-container">
          <img src="${
            this._data.img || "image-upload-placeholder.png"
          }" class="adds-img" alt="${this._data.title}" />
        </div>
      </div>
    </div>
    
      <div class="message">
        <p class="message-text"></p>
      </div>`;
  }
}

export default new checkAddsPreviewView();
