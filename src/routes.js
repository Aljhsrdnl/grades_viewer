import { createRouter, createWebHistory } from "vue-router";

import HomeScreen from "./components/HomeScreen";
import GradesScreen from "./components/GradesScreen";

const routes = [
  { path: "/", component: HomeScreen, name: "home" },
  {
    path: "/grades/:lrn",
    component: GradesScreen,
    name: "grades",
    props: true,
    state: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
