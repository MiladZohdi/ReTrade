import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";

class myAddsView extends View {
  _parentElement;

  constructor() {
    super();
  }

  render(data) {
    this._data = data;
    this._parentElement = document.querySelector(".back-office-container");
    super.render();
    this.imageHandler();
  }

  imageHandler() {
    const imgInput = document.querySelector(".upload-img");

    imgInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const imageUrl = URL.createObjectURL(file);

      // Set the background image of the input element to the selected image
      imgInput.style.backgroundImage = `url(${imageUrl})`;
    });
  }

  editViewEditBtnHandler(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!e.submitter.classList.contains("edit-button")) return; // Check for the correct button

      const dataArr = Object.fromEntries([...new FormData(e.target)]);
      handler(dataArr); // Call the handler with form data
    });
  }

  editViewDeleteBtnHandler(handler) {
    const delbtn = this._parentElement.querySelector(".delete-button");
    delbtn.addEventListener("click", (e) => {
      e.preventDefault();

      if (!e.target.classList.contains("delete-button")) return;
      handler();
    });
  }

  renderDeleteQ(data) {
    this.renderQ(data);
  }

  deleteQhandler(handler) {
    this._parentElement.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.overlayBtnHandler(e)) handler();
    });
  }

  editViewcancelBtnHandler(handler) {
    const cancelBtn = this._parentElement.querySelector(".cancel-button");

    cancelBtn.addEventListener("click", (e) => {
      if (!e.target.classList.contains("cancel-button")) return;
      history.back();
    });
  }

  _generateMarkup() {
    return `
       <div class="backoffice-tools-container">
          <div>
            <h1 class="primary-header color-swap">Edit your add</h1>
          </div>
          <form class="adds-form">
            <div class="form-holder">
              <label class="form-label">Add's title:</label>
              <input
                type="text"
                name="title"
                value="${this._data.title || ""}"
                maxlength="30"
                class="input-add"
              />
            </div>

            <div class="form-holder">
              <label class="form-label">Price:</label>
              <input
                type="number"
                name="price"
                min="1"
                max="10000"
                value="${this._data.price || ""}"
                class="input-add"
              />
            </div>

            <div class="form-holder">
              <label class="form-label">Description:</label>
              <textarea
                name="desc"
                class="add-form-textarea"
              >${this._data.desc || ""}</textarea>
            </div>

            <div class="form-holder">
              <input type="file" name="image" class="upload-img" style="background-image: url(${
                this._data.img
              })"/>
            </div>

            <div class="form-holder">
              <label class="form-label">Contact information:</label>
              <input
                type="number"
                name="contactInfo"
                value="${this._data.contactInfo || ""}"
                maxlength="12"
                placeholder="07123456789"
                class="input-add"
              />
            </div>
            <div class="edit-buttons">
            <button type= "submit" class="edit-button-set edit-button"> Edit </button>
            <button type= "button" class="edit-button-set delete-button"> Delete </button>
            <button type= "button" class="edit-button-set cancel-button"> Cancel </button>
            </div>
          </form>
        </div>`;
  }
}

export default new myAddsView();
