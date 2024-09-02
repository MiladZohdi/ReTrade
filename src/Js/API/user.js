import "core-js/stable";
import "regenerator-runtime/runtime.js";

const users = [
  {
    name: "Milad",
    email: "milad@gmail.com",
    password: "12345678",
    isAdmin: false,
    isLogedIn: false,
    inbox: [
      { message: "ghvjbkjnlkdamdwkalkwdkandlakwndlandlawd", isRead: false },
      { message: "ghvjbkjnlkdamdwkalkwdkandlakwndlandlawd", isRead: true },
    ],
    saved: [
      {
        id: 5678,
      },
      {
        id: 1121,
      },
      {
        id: 1617,
      },
    ],

    myAdds: [
      {
        id: 9101,
      },
      {
        id: 6124,
      },
    ],
  },
  {
    name: "Admin",
    email: "admin@gmail.com",
    password: "12345678",
    isAdmin: true,
    isLogedIn: false,
  },
];

let adds = [
  {
    id: 5678,
    title: "Samsung Galaxy S23",
    date: "2024-07-21",
    price: "999",
    contactInfo: "072222222222",
    desc: "Brand new Samsung Galaxy S23, 256GB storage, 8GB RAM, Snapdragon processor, 108MP camera, dual SIM, available in black.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 9101,
    title: "Google Pixel 8",
    date: "2024-08-05",
    price: "849",
    contactInfo: "073333333333",
    desc: "Google Pixel 8 with 128GB storage, 6.3-inch display, and an exceptional camera, perfect for photography enthusiasts.",
    img: "https://placehold.co/600x400",
    state: "pending",
  },
  {
    id: 1121,
    title: "OnePlus 12",
    date: "2024-06-15",
    price: "729",
    contactInfo: "074444444444",
    desc: "OnePlus 12, 12GB RAM, 256GB storage, 5000mAh battery, 120Hz AMOLED display, lightning-fast charging, pristine condition.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 3141,
    title: "Sony Xperia 1 V",
    date: "2024-07-30",
    price: "1,099",
    contactInfo: "075555555555",
    desc: "Sony Xperia 1 V, 512GB storage, 12GB RAM, 4K HDR OLED display, triple-lens camera system, ideal for video recording.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 1617,
    title: "Xiaomi Mi 13",
    date: "2024-08-01",
    price: "659",
    contactInfo: "076666666666",
    desc: "Xiaomi Mi 13, 128GB storage, 8GB RAM, 108MP quad camera, 120Hz display, long-lasting battery life, available in blue.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  // New objects start here
  {
    id: 2122,
    title: "iPhone 15 Pro",
    date: "2024-08-10",
    price: "1,199",
    contactInfo: "077777777777",
    desc: "Apple iPhone 15 Pro, 256GB storage, 6.1-inch Super Retina XDR display, A16 Bionic chip, triple-camera system, silver finish.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 3142,
    title: "Samsung Galaxy Z Fold 5",
    date: "2024-07-25",
    price: "1,799",
    contactInfo: "078888888888",
    desc: "Samsung Galaxy Z Fold 5, 512GB storage, 12GB RAM, foldable display, 7.6-inch Dynamic AMOLED, 50MP triple camera, phantom black.",
    img: "https://placehold.co/600x400",
    state: "pending",
  },
  {
    id: 4132,
    title: "Google Pixel 8 Pro",
    date: "2024-08-08",
    price: "1,099",
    contactInfo: "079999999999",
    desc: "Google Pixel 8 Pro, 128GB storage, 6.7-inch display, 12GB RAM, advanced AI camera system, water-resistant, available in white.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 5173,
    title: "Oppo Find X6 Pro",
    date: "2024-07-28",
    price: "999",
    contactInfo: "070000000000",
    desc: "Oppo Find X6 Pro, 256GB storage, 12GB RAM, 50MP triple camera, 120Hz AMOLED display, sleek design, fast charging support.",
    img: "https://placehold.co/600x400",
    state: "pending",
  },
  {
    id: 6124,
    title: "Asus ROG Phone 7",
    date: "2024-07-15",
    price: "1099",
    contactInfo: "071111111111",
    desc: "Asus ROG Phone 7, 512GB storage, 16GB RAM, 144Hz AMOLED display, Snapdragon 8 Gen 2, gaming triggers, RGB lighting.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 7135,
    title: "Vivo X90 Pro",
    date: "2024-07-22",
    price: "1,049",
    contactInfo: "072222222222",
    desc: "Vivo X90 Pro, 256GB storage, 12GB RAM, 1-inch main camera sensor, 6.78-inch AMOLED display, Zeiss optics, dual SIM.",
    img: "https://placehold.co/600x400",
    state: "pending",
  },
  {
    id: 8146,
    title: "Realme GT Neo 5",
    date: "2024-06-25",
    price: "599",
    contactInfo: "073333333333",
    desc: "Realme GT Neo 5, 256GB storage, 8GB RAM, 144Hz AMOLED display, 50MP triple camera, 5000mAh battery, ultra-fast charging.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 9157,
    title: "Huawei P60 Pro",
    date: "2024-07-05",
    price: "1,199",
    contactInfo: "074444444444",
    desc: "Huawei P60 Pro, 512GB storage, 8GB RAM, 6.6-inch OLED display, 50MP ultra-vision camera, HarmonyOS, gold finish.",
    img: "https://placehold.co/600x400",
    state: "pending",
  },
  {
    id: 10168,
    title: "Motorola Edge 40 Pro",
    date: "2024-08-12",
    price: "949",
    contactInfo: "075555555555",
    desc: "Motorola Edge 40 Pro, 256GB storage, 12GB RAM, 6.67-inch OLED display, 50MP dual camera, 125W fast charging, water-resistant.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 11179,
    title: "Xiaomi Redmi Note 13 Pro",
    date: "2024-07-18",
    price: "499",
    contactInfo: "076666666666",
    desc: "Xiaomi Redmi Note 13 Pro, 128GB storage, 6GB RAM, 120Hz AMOLED display, 108MP quad camera, 5000mAh battery, gradient blue.",
    img: "https://placehold.co/600x400",
    state: "pending",
  },
  {
    id: 12180,
    title: "Nokia XR30",
    date: "2024-06-29",
    price: "699",
    contactInfo: "077777777777",
    desc: "Nokia XR30, 128GB storage, 6GB RAM, rugged design, IP68 water/dust resistance, 48MP dual camera, 4630mAh battery, Android 14.",
    img: "https://placehold.co/600x400",
    state: "confirmed",
  },
  {
    id: 13181,
    title: "Honor Magic 5 Pro",
    date: "2024-07-12",
    price: "1,099",
    contactInfo: "078888888888",
    desc: "Honor Magic 5 Pro, 512GB storage, 12GB RAM, 6.81-inch LTPO OLED display, 50MP triple camera, 5000mAh battery, wireless charging.",
    img: "https://placehold.co/600x400",
    state: "pending",
  },
  {
    id: 14182,
    title: "Lenovo Legion Y90",
    date: "2024-07-07",
    price: "999",
    contactInfo: "079999999999",
    desc: "Lenovo Legion Y90, 256GB storage, 12GB RAM, 144Hz AMOLED display, Snapdragon 8 Gen 1, RGB lighting, dual cooling fans.",
    img: "https://placehold.co/600x400",
    state: "pending",
  },
];

export const findUser = async (userEmail, password) => {
  try {
    let user = users.find((usr) => usr.email === userEmail);

    if (!user) throw new Error("Account can't be found!");
    if (user.password !== password)
      throw new Error("Username or Password is wrong!");
    if (user.isAdmin) {
      return (user = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isLogedIn: true,
      });
    }

    if (!user.isAdmin) {
      const savedAdds = user.saved.map((add) =>
        adds.find((addDb) => addDb.id === add.id)
      );

      const myAdds = user.myAdds.map((add) =>
        adds.find((addDb) => addDb.id === add.id)
      );

      return (user = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isLogedIn: true,
        inbox: user.inbox,
        saved: savedAdds,
        myAdds: myAdds,
      });
    }
  } catch (err) {
    throw err;
  }
};

export const addUser = async (newUser) => {
  try {
    const user = users.find((usr) => usr.email === newUser.email);
    if (user) throw new Error("This email is already in use!");
    users.push(newUser);
  } catch (err) {
    throw err;
  }
};

export const findAdd = async (id) => {
  try {
    const add = adds.find((add) => add.id === id);
    if (!add) throw new Error("Add can't be found!");
    return add;
  } catch (err) {
    throw err;
  }
};

export const editAdd = async (editedAdd) => {
  try {
    let addIndex = adds.findIndex((add) => add.id === editedAdd.id);
    if (addIndex === -1) throw new Error("we can not find your add!");
    adds[addIndex] = {
      id: editedAdd.id,
      title: editedAdd.title,
      date: editAdd.date,
      price: editedAdd.price,
      contactInfo: editedAdd.contactInfo,
      desc: editedAdd.desc,
      img: editedAdd.img,
      state: "pending",
    };
  } catch (err) {
    throw err;
  }
};

export const deleteAdd = async (addID, email) => {
  try {
    const addIndex = adds.findIndex((ad) => ad.id === addID);
    if (addIndex === -1) throw new Error("Add can't be found!");

    const user = users.find((usr) => usr.email === email);
    if (!user) throw new Error("User not found!");

    const userMyAddIndex = user.myAdds.findIndex((add) => add.id === addID);
    if (userMyAddIndex === -1) throw new Error("Add not found in user's adds!");

    user.myAdds.splice(userMyAddIndex, 1);
    adds.splice(addIndex, 1);
  } catch (err) {
    throw err;
  }
};

export const newAdd = async (newAdd, email) => {
  try {
    const usr = users.find((usr) => usr.email === email);
    if (!usr) throw new Error("User not found!");

    usr.myAdds.push({ id: newAdd.id });

    const add = {
      id: newAdd.id,
      title: newAdd.title,
      date: newAdd.date,
      price: newAdd.price,
      contactInfo: newAdd.contactInfo,
      desc: newAdd.desc,
      img: newAdd.img,
      state: "pending",
    };

    adds.push(add);
  } catch (err) {
    throw err;
  }
};

export const getAllAdds = async () => {
  try {
    const approvedAdds = adds;
    if (!approvedAdds) throw new Error("no adds yet!");
    return approvedAdds;
  } catch (err) {
    throw err;
  }
};

export const updateSavedAdds = async (state) => {
  try {
    let user = users.find((usr) => usr.email === state.email);
    if (!user) throw new Error("User can't be found");
    user = {
      isLogedIn: state.isLogedIn,
      saved: state.saved,
    };
    return user;
  } catch (err) {
    throw err;
  }
};

export const confirmRejectAdd = async (obj) => {
  try {
    const id = obj.id;
    const state = obj.state;

    const userIndex = users.findIndex((usr) =>
      usr.myAdds?.some((ad) => ad.id === id)
    );

    if (userIndex === -1) throw new Error(`user can't be found!`);

    const addIndex = adds.findIndex((ad) => ad.id === id);

    if (state === "confirmed") {
      adds[addIndex].state = state;
      users[userIndex].inbox.push({
        message: `Congratulations! Your advertisement for ${adds[addIndex].title} has been successfully confirmed.`,
        isRead: false,
      });
    }

    if (state === "reject") {
      users[userIndex].inbox.push({
        message: `We regret to inform you that your advertisement for ${adds[addIndex].title} has been rejected.`,
        isRead: false,
      });
      adds.splice(addIndex, 1);
      const myAddIndex = users[userIndex].myAdds.findIndex(
        (ad) => ad.id === id
      );
      users[userIndex].myAdds.splice(myAddIndex, 1);
    }
  } catch (err) {
    throw err;
  }
};
