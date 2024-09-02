import "core-js/stable";
import "regenerator-runtime/runtime.js";

import View from "./view.js";

class LogOutView extends View {
  _parentElement;

  constructor() {
    super();
  }

  renderLogOut(data) {
    this.renderQ(data);
  }

  logOutBtnHandler(handler) {
    this._parentElement.addEventListener("click", (e) => {
      if (this.overlayBtnHandler(e)) handler();
    });
  }
}

export default new LogOutView();
