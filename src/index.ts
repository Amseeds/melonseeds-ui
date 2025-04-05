
import { App } from 'vue';
import MeButton from './components/Button/Button.vue';
import MeHeader from './components/Header/Header.vue';
import MePage from './components/Page/Page.vue';

const components = {
  MeButton,
  MeHeader,
  MePage
};

const install = (app: App) => {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component);
  });
};

export default {
  install,
  ...components
};

export {
  MeButton,
  MeHeader,
  MePage
};

