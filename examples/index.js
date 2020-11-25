import Vue from "vue";
import App from "./app.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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
