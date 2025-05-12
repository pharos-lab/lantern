import * as components from '@/components';
import { useTheme } from './composables/useTheme';

const lantern = {
    install(app, options = {}) {
      // components
      for (const componentName in components) {
        const component = components[componentName];
        app.component(componentName, component);
      }

      app.provide('pharos', useTheme(options.theme))
    }
};

export { lantern };