import UserList from "./pages/UserList.vue";
import PetList from "./pages/PetList.vue";
import UserDetail from "./pages/UserDetail.vue";
import NotFound from "./pages/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  //{ path: "/", redirect: "/users" },
  { path: "/users", component: UserList, alias: "/" },
  { path: "/pets", component: PetList },
  { path: "/user-detail/:userId", component: UserDetail },
  { path: "/:pathMatch(.*)*", component: NotFound },
  //{ path: "/:pathMatch(.*)*", redirect:"/" }, redirect to home page
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active",
});

export default router;
