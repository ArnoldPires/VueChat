import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";
import register from "../pages/register.vue";
import signIn from "../pages/signIn.vue";
import chat from "../pages/chat.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/sign-in",
    name: "rignIn",
    component: signIn,
  },
  {
    path: "/chat",
    name: "chat",
    component: chat,
  },
  // Optionally, redirect unknown paths to home. Remove or adjust as needed.
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
