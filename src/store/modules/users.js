const state = function () {
  return {
    userList: [
      {
        id: 1,
        name: "Nguyễn Phong Hào",
        age: 22,
        email: "hao@gmail.com",
        avatar: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
        typePets: ["Chó", "Mèo"],
      },
      {
        id: 2,
        name: "Vương Mộng Hùng",
        age: 22,
        email: "hao@gmail.com",
        avatar: "https://nguoinoitieng.tv/images/nnt/104/0/bhq4.jpg",
        typePets: ["Chuột", "Cá"],
      },
    ],
    userDetail: null,
  };
};

const mutations = {
  setUserDetailMutation(state, payload) {
    const userDetail = state.userList.find((user) => user.id == payload);
    state.userDetail = userDetail;
  },
};

const actions = {
  getUserByIdAction(context, payload) {
    context.commit("setUserDetailMutation", payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
