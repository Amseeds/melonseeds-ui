
import { App } from 'vue';
import MeButton from './components/Button/Button.vue';

const components = {
  MeButton
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
  MeButton
};

