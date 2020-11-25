import Button from "./components/button";
import Icon from "./components/icon";
import './styles/index.scss'
const Components = {
  Button,
  Icon
};

function install(Vue) {
  for (const key in Components) {
    Vue.component(Components[key].name, Components[key]);
  }
}

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...Components,
};
