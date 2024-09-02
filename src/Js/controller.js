import "core-js/stable";
import "regenerator-runtime/runtime.js";
import * as model from "./model.js";
import firstPageView from "./views/firstPageView.js";
import logView from "./views/LogPageView.js";
import backofficeView from "./views/backofficeView.js";
import savedAddsView from "./views/savedAddsView.js";
import savedAddPreviewView from "./views/savedAddPreviewView.js";
import { MESSAGE_SHOW_TIME } from "./helpers.js";
import LogOutView from "./views/LogOutView.js";
import myAddsView from "./views/myAddsView.js";
import createNewAddView from "./views/createNewAddView.js";
import editAddView from "./views/editAddView.js";
import AllAddsView from "./views/AllAddsView.js";
import allAddsPreviewView from "./views/allAddsPreviewView.js";
import adminBackofficeView from "./views/adminBackofficeView.js";
import checkAddsView from "./views/checkAddsView.js";
import checkAddsPreviewView from "./views/checkAddPreviewView.js";
import notificationView from "./views/notificationView.js";

const handleFirstPageView = () => {
  firstPageView.render();
  firstPageView.logBtnHandler(handleLogBtnClick);

  if (history.state !== "firstPage") saveStateToHistory("firstPage", "");
};

const handleLogBtnClick = (e) => {
  const logBtn = e.target.closest(".btn-sign-first-page, .action-btn");
  if (!logBtn) return;

  const data = logBtn.classList.contains("sign-up-btn") ? "signUp" : "logIn";

  saveStateToHistory("login", "/login", data);
};

const handleLoginView = (data) => {
  const stateData = data || "logIn";

  logView.render(stateData);
  logView.logMethodChangeHandler(handleLogMethodChange);
  logView.loginBtnHandler(handleLoginFormSubmit);

  window.history.replaceState(stateData, "login", "/login");
};

const handleLogMethodChange = (e) => {
  const btn = e.target.closest(".btn-sign");
  if (!btn) return;
  const data = btn.classList.contains("sign-up-btn") ? "signUp" : "logIn";
  handleLoginView(data);
};

const handleLoginFormSubmit = async (formData) => {
  try {
    if (formData.method === "logIn") {
      const data = await model.logIn(formData);
      if (!data.isAdmin) {
        logView.renderSuccess("You logged in successfully!");
        redirectAfterDelay("/backoffice");
      } else if (data.isAdmin) {
        logView.renderSuccess("You logged in successfully!");
        redirectAfterDelay("/admin-backoffice");
      }
    } else if (formData.method === "signUp") {
      await model.signUp(formData);
      logView.renderSuccess("Account created successfully!");
    }
  } catch (err) {
    logView.renderError(err.message);
  }
};

const handleBackofficeView = () => {
  if (!loginCheck()) return;

  renderBackofficeView();
};

const handleAdminBackoffice = () => {
  if (!loginCheck()) return;

  renderAdminBackofficeView();
};

const renderAdminBackofficeView = () => {
  adminBackofficeView.render(model.state);
  adminBackofficeView.backofficeBtnHandler(handleBackofficeBtnClick);
};

const renderBackofficeView = () => {
  backofficeView.render(model.state);
  backofficeView.backofficeBtnHandler(handleBackofficeBtnClick);
  backofficeView.backofficeBtnCreateAddHandler(handleNewAddView);
};

const handleBackofficeBtnClick = (e) => {
  const btn = e.target.closest(".options");
  if (!btn) return;

  if (btn.dataset.section === "saved-adds") handleSavedAddsView();
  if (btn.dataset.section === "my-adds") handleMyAddsView();
  if (btn.dataset.section === "create-add") handleNewAddView();
  if (btn.dataset.section === "see-adds") handleAllAddsView();
  if (btn.dataset.section === "logout") handleLogOut();
  if (btn.dataset.section === "check-adds") handleCheckAddsView();
  if (btn.dataset.section === "notifications") handleNotificationView();
};

const handleNotificationView = () => {
  if (!loginCheck()) return;

  notificationView.render(model.state);
  notificationView.notificationReadHandler(notifReadController);
};

const notifReadController = (data) => {
  model.updateNotif(data);
};

const handleCheckAddsView = async () => {
  if (!loginCheck()) return;
  try {
    const adds = await model.getAllAdds();
    const pendingAdds = adds.filter((add) => add.state === "pending");

    checkAddsView.render(pendingAdds);
    checkAddsView.checkAddBtnHandler(checkAddsBtnController);
  } catch (err) {}
};

const checkAddsBtnController = async (id) => {
  try {
    const data = await model.getAdd(id);
    if (!data) throw new Error("somthing went wrong");

    checkAddsPreviewView.render(data);
    checkAddsPreviewView.checkAddBackButtonHandler(
      handleSavedAddPreviewBackClick
    );
    checkAddsPreviewView.checkApproveRejectBtnHandler(
      approveOrRejectController
    );
  } catch (err) {
    console.error(err);
  }
};

const approveOrRejectController = (obj) => {
  model.confirmReject(obj);
  if (obj.state === "confirmed") {
    checkAddsPreviewView.renderSuccess(
      "This ad has been successfully confirmed."
    );
    redirectAfterDelay("/check-adds");
  }

  if (obj.state === "reject") {
    checkAddsPreviewView.renderSuccess(
      "This ad has been successfully rejected."
    );
    redirectAfterDelay("/check-adds");
  }
};

const handleSavedAddsView = () => {
  if (!loginCheck()) return;
  renderBackofficeView();
  savedAddsView.render(model.state);

  savedAddsView.selectAddHandler(handleSavedAddClick);
  savedAddsView.unsaveHandler(handleUnsaveClick);
};

const handleUnsaveClick = (e) => {
  e.preventDefault();
  const cardEl = e.target.closest(".card");
  const elID = +cardEl.dataset.id;
  model.removeSavedAdd(elID);
  savedAddsView.update(model.state);
};

const handleSavedAddClick = async (id) => {
  try {
    const add = await model.getAdd(id);

    savedAddPreviewView.render(add);
    savedAddPreviewView.addBackButtonHandler(handleSavedAddPreviewBackClick);
  } catch (err) {
    console.error(err);
  }
};

const handleSavedAddPreviewBackClick = () => {
  window.history.back();
};

const handleMyAddsView = () => {
  if (!loginCheck()) return;
  renderBackofficeView();
  myAddsView.render(model.state);

  myAddsView.editAddBtnHandler(editAddBtnController);
};

const editAddBtnController = async (id) => {
  try {
    const add = await model.getAdd(id);
    renderBackofficeView();
    editAddView.render(add);

    editAddView.editViewEditBtnHandler(editSubmitController);
    editAddView.editViewDeleteBtnHandler(deleteSubmitController);
    editAddView.editViewcancelBtnHandler();
  } catch (err) {
    editAddView.renderError(err.message);
  }
};

const editSubmitController = async (data) => {
  try {
    const id = +window.location.hash.slice(1);
    await model.editMyAdd(id, data);
    editAddView.renderSuccess("Your add has been edited successfully");
    redirectAfterDelay("/my-adds");
  } catch (err) {
    editAddView.renderError(err.message);
  }
};

const deleteSubmitController = () => {
  editAddView.renderDeleteQ("Are you sure you want to delete this add?");
  editAddView.deleteQhandler(deleteSubmitHandler);
};

const deleteSubmitHandler = async () => {
  try {
    model.deleteMyAdd(+window.location.hash.slice(1));
    editAddView.renderSuccess("Add deleted successfully!");
    redirectAfterDelay("/my-adds");
  } catch (err) {
    editAddView.renderError(err.message);
  }
};

const handleNewAddView = () => {
  if (!loginCheck()) return;
  renderBackofficeView();
  createNewAddView.render();
  createNewAddView.placeYourAddBtnHandler(newAddController);
};

const newAddController = async (newAddData) => {
  try {
    await model.newAdd(newAddData);
    createNewAddView.renderSuccess(
      "Your add is created, please wait for your add to be Approved!"
    );
    redirectAfterDelay("/my-adds");
  } catch (err) {
    createNewAddView.renderError(err.message);
  }
};

const handleAllAddsView = async () => {
  if (!loginCheck()) return;
  const data = await model.getAllAdds();
  const confirmedAdds = data.filter((add) => add.state === "confirmed");
  AllAddsView.render(confirmedAdds);

  AllAddsView.addSelectHandler(allAddsAddInfoHandler);
  AllAddsView.backToBackofficeHandler(handleBackofficeView);
};

const allAddsAddInfoHandler = async (addId) => {
  if (!loginCheck()) return;
  try {
    const add = await model.getAdd(addId);
    history.pushState({ section: addId }, "", `#${addId}`);
    const isSave = model.state.saved.find((ad) => ad.id === addId);
    isSave ? (add.isSaved = true) : (add.isSaved = false);
    allAddsPreviewView.render(add);
    allAddsPreviewView.addBackButtonHandler(handleSavedAddPreviewBackClick);
    allAddsPreviewView.saveAddHandler(allAddsPreviewViewSaveAddController);
  } catch (err) {
    console.error(err);
  }
};

const allAddsPreviewViewSaveAddController = (data) => {
  data.isSaved ? model.addSavedAdd(data) : model.removeSavedAdd(data.id);
};

const handleLogOut = () => {
  loginCheck();

  LogOutView.renderLogOut("Are you sure you want to logout?");
  LogOutView.logOutBtnHandler(logoutBtnController);
};

const logoutBtnController = () => {
  try {
    model.logOut();
    backofficeView.renderSuccess("You have been logged out successfully!");
    redirectAfterDelay("/login");
  } catch (err) {
    logView.renderError(err.message);
  }
};
/* --------------------------------- helper --------------------------------- */

const navigateToLogin = () => {
  window.history.replaceState({}, "", "/login");
  init();
};

const redirectAfterDelay = (path) => {
  setTimeout(() => {
    window.history.replaceState({}, "", path);
    init();
  }, MESSAGE_SHOW_TIME * 1000);
};

const saveStateToHistory = (view, url, data = "") => {
  const stateObj = { view, data };
  window.history.pushState(stateObj, view, url);
};

const loginCheck = () => {
  if (!model.state.isLogedIn) {
    navigateToLogin();
    return false;
  }
  return true;
};

const handlerPopState = (e) => {
  init();
};

const init = () => {
  window.addEventListener("popstate", handlerPopState);

  const path = window.location.pathname.slice(1);

  switch (path) {
    case "login":
      handleLoginView(history.state?.data);
      break;
    case "backoffice":
      handleBackofficeView();
      break;
    case "saved-adds":
      handleSavedAddsView();
      break;
    case "my-adds":
      handleMyAddsView();
      break;
    case "create-add":
      handleNewAddView();
      break;
    case "see-adds":
      handleAllAddsView();
      break;
    case "admin-backoffice":
      handleAdminBackoffice();
      break;
    case "check-adds":
      handleAdminBackoffice();
      handleCheckAddsView();
      break;
    case "notifications":
      handleNotificationView();
      break;
    default:
      handleFirstPageView();
  }
};

init();
