import Vue from "vue";
import App from "./app.vue";
import VueRouter from "vue-router";
import Cube from "cube";
Vue.use(VueRouter);
Vue.use(Cube);
const Router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "button",
      component: () => import("./routers/button.vue"),
    },
    {
      path: "/button",
      name: "button",
      component: () => import("./routers/button.vue"),
    },
    {
      path: "/icon",
      name: "icon",
      component: () => import("./routers/icon.vue"),
    },
  ],
});

new Vue({
  el: "#app",
  router: Router,
  components: {
    App,
  },
  template: "<app></app>",
});

console.log("hi");
