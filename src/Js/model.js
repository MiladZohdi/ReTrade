import "core-js/stable";
import "regenerator-runtime/runtime.js";

import * as userDB from "./API/user.js";

export let state = {
  name: "",
  email: "",
  isAdmin: false,
  isLogedIn: false,
  inbox: [],
  saved: [],
  myAdds: [],
};

export const logIn = async (data) => {
  try {
    const pro = await userDB.findUser(data.email, data.password);
    state = {
      name: pro.name,
      email: pro.email,
      isAdmin: pro.isAdmin,
      isLogedIn: true,
      inbox: pro.inbox,
      saved: pro.saved,
      myAdds: pro.myAdds,
    };
    return state;
  } catch (err) {
    throw err;
  }
};

export const signUp = async (data) => {
  try {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
      isAdmin: false,
      isLogedIn: false,
      inbox: [],
      saved: [],
      myAdds: [],
    };
    await userDB.addUser(newUser);
  } catch (err) {
    throw err;
  }
};

export const getAdd = async (id) => {
  try {
    const add = await userDB.findAdd(id);
    return add;
  } catch (err) {
    throw err;
  }
};

export const removeSavedAdd = (id) => {
  const savedIndex = state.saved.findIndex((sav) => sav.id === id);
  if (savedIndex !== -1) state.saved.splice(savedIndex, 1);
  updateSaved();
};

export const addSavedAdd = (add) => {
  delete add.isSaved;
  state.saved.push(add);
  updateSaved();
};

export const editMyAdd = async (addID, addData) => {
  try {
    let addIndex = state.myAdds.findIndex((add) => add.id === addID);

    let imgUrl = "https://placehold.co/600x400";

    if (addData.image.name) {
      const file = addData.image;
      imgUrl = URL.createObjectURL(file);
    }

    if (addIndex === -1) throw new Error("Can't find this add.");
    if (
      state.myAdds[addIndex].title === addData.title &&
      state.myAdds[addIndex].desc === addData.desc &&
      state.myAdds[addIndex].contactInfo === addData.contactInfo &&
      state.myAdds[addIndex].price === addData.price &&
      state.myAdds[addIndex].img === imgUrl
    )
      throw new Error("You haven't edit your add!");

    state.myAdds[addIndex] = {
      id: addID,
      title: addData.title,
      date: "2024-07-12",
      price: addData.price,
      contactInfo: addData.contactInfo,
      desc: addData.desc,
      img: imgUrl,
      state: "pending",
    };

    await userDB.editAdd(state.myAdds[addIndex]);
  } catch (err) {
    throw err;
  }
};

export const deleteMyAdd = async (addID) => {
  try {
    const addIndex = state.myAdds.findIndex((ad) => ad.id === addID);
    state.myAdds.splice(addIndex, 1);
    await userDB.deleteAdd(addID, state.email);
  } catch (err) {
    throw err;
  }
};

export const newAdd = async (newAddData) => {
  try {
    let imgUrl = "https://placehold.co/600x400";
    if (newAddData.image?.name) {
      const file = newAddData.image;
      imgUrl = URL.createObjectURL(file);
    }

    const addID = generateUniqueId();
    const add = {
      id: addID,
      title: newAddData.title,
      date: new Date(),
      price: newAddData.price,
      contactInfo: newAddData.contact,
      desc: newAddData.description,
      img: imgUrl,
      state: "pending",
    };

    state.myAdds.push(add);

    await userDB.newAdd(add, state.email);
  } catch (err) {
    throw err;
  }
};

export const confirmReject = async (obj) => {
  try {
    await userDB.confirmRejectAdd(obj);
  } catch (err) {
    console.error(err);
  }
};

export const updateNotif = (data) => {
  const msg = state.inbox.findIndex((msg) => msg.message === data);
  state.inbox[msg].isRead = true;
};

export const getAllAdds = async () => {
  try {
    const adds = await userDB.getAllAdds();
    return adds;
  } catch (err) {
    throw err;
  }
};

const resetState = () => {
  state = {
    name: "",
    email: "",
    isAdmin: false,
    isLogedIn: false,
    saved: [],
  };
};

export const logOut = async () => {
  try {
    state.isLogedIn = false;
    await userDB.updateSavedAdds(state);
    resetState();
  } catch (err) {
    throw err;
  }
};

export const updateSaved = async () => {
  try {
    const resp = await userDB.updateSavedAdds(state);
  } catch (error) {}
};

const generateUniqueId = () => Math.floor(Math.random() * 1000000000);
