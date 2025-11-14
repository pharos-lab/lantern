import type { App, Plugin } from 'vue';
import type { Theme } from './types';

export const THEME_KEY = Symbol('theme');

export interface ThemeOptions {
  theme: Theme;
}

export const lantern: Plugin = {
  install(app: App, options: ThemeOptions) {
    if (!options?.theme) {
      throw new Error('[Lantern] Theme is required in plugin options');
    }

    // Provide theme globally
    app.provide(THEME_KEY, options.theme);
  }
};