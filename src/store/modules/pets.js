const state = function () {
  return {
    petList: [
      {
        name: "LuKi",
        type: "Chó",
        image: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
        description: "Can bark.",
      },
      {
        name: "Mickey",
        type: "Chuột",
        image: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
        description: "chít chít.",
      },
      {
        name: "mimi",
        type: "Mèo",
        image: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
        description: "meo meo.",
      },
      {
        name: "nhom nhom",
        type: "Cá",
        image: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
        description: "...",
      },
    ],
  };
};

export default {
  namespaced: true,
  state,
};
