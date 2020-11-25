import Button from "./components/button";
import './styles/index.scss'
const Components = {
  Button,
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
