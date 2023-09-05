const state = function () {
  return {
    userList: [
      {
        name: "Nguyễn Phong Hào",
        age: 22,
        email: "hao@gmail.com",
        avatar: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
        typePets: ["Chó", "Mèo"],
      },
      {
        name: "Vương Mộng Hùng",
        age: 22,
        email: "hao@gmail.com",
        avatar: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
        typePets: ["Chuột", "Cá"],
      },
    ],
  };
};

export default {
  namespaced: true,
  state,
};
