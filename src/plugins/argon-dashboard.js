import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/scss/argon.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import SidebarPlugin from "../components/SidebarPlugin"
import NotificationPlugin from "../components/NotificationPlugin"

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(SidebarPlugin);
    Vue.use(NotificationPlugin);
  }
};
