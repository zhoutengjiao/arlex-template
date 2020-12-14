import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PictureShow from "../components/PictureShow";
import Jsx from "../components/JSX";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/picture",
      name: "PictureShow",
      component: PictureShow,
    },
    {
      path: "/jsx",
      name: "JSX",
      component: Jsx,
    },
  ],
});
