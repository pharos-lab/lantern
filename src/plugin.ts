import type { App, Plugin } from 'vue';
import type { PluginOptions } from './types';
import { defaultTheme } from './themes/default';
import { merge } from 'lodash-es'

export const THEME_KEY = Symbol('theme');
export const OPTIONS_KEY = Symbol('options');


const defaultOptions = {
    theme: defaultTheme
}

export const lantern: Plugin = {
    install(app: App, options: PluginOptions) {
        if (!options?.theme) {
            throw new Error('[Lantern] Theme is required in plugin options');
        }

        const finaleOptions = merge({}, defaultOptions, options) as PluginOptions

        // Provide theme globally
        app.provide(THEME_KEY, finaleOptions.theme);
        app.provide(OPTIONS_KEY, finaleOptions);
    }
};