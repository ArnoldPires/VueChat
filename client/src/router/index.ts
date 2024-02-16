import { createRouter, createWebHistory } from "vue-router";
import signIn from "../pages/signIn.vue";
import register from "../pages/register.vue";
import dashboard from "../pages/dashboard.vue";
import chat from "../pages/chat.vue";

const routes = [
  {
    path: "/",
    name: "signIn",
    component: signIn,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
  },
  {
    path: "/chat",
    name: "chat",
    component: chat,
  },
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
