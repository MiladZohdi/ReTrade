import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";

class myAddsView extends View {
  _parentElement;

  constructor() {
    super();
  }

  render() {
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

      imgInput.style.backgroundImage = `url(${imageUrl})`;
    });
  }

  placeYourAddBtnHandler(handler) {
    this._parentElement.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = Object.fromEntries([...new FormData(e.target)]);
      if (formData.image.name === "") formData.image = null;

      handler(formData);
    });
  }

  _generateMarkup() {
    return `
       <div class="backoffice-tools-container">
          <div>
            <h1 class="primary-header color-swap">Create New Add</h1>
          </div>
          <form class="adds-form">
            <div class="form-holder">
              <label class="form-label">Add's title:</label>
              <input
                type="text"
                name="title"
                maxlength="30"
                placeholder="Used iPhone 15 pro"
                class="input-add"
                required
              />
            </div>

            <div class="form-holder">
              <label class="form-label">Price:</label>
              <input
                type="number"
                name="price"
                min="1"
                max="10000"
                placeholder="1000"
                class="input-add"
                required
              />
            </div>

            <div class="form-holder">
              <label class="form-label">Description:</label>
              <textarea 
                name="description"
                required
                class="add-form-textarea"
                placeholder="iPhone 15 which is used for 1 year ..."
              ></textarea>
            </div>

            <div class="form-holder upload-img-con">
              <input type="file" name="image" class="upload-img" />
            </div>

            <div class="form-holder">
              <label class="form-label">Contact information:</label>
              <input
                type="text"
                name="contact"
                maxlength="12"
                placeholder="07123456789"
                class="input-add"
                required
              />
            </div>

            <button type="submit" class="action-btn call-to-action-btn add-button create-add-btn">
              Place your Add
            </button>
          </form>
        </div>`;
  }
}

export default new myAddsView();
