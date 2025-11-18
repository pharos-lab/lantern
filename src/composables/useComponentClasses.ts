// src/composables/useComponentClasses.ts
import { inject } from 'vue';
import { twMerge } from 'tailwind-merge';
import { OPTIONS_KEY } from '../plugin';
import type { ComponentProps, PluginOptions } from '../types';
import { resolveColorClasses } from '../utils/resolveColorClasses';
import { resolvePropsClasses } from '../utils/resolvePropsClasses';

export function useComponentClasses(componentName: string, props: ComponentProps) {
    const options = inject<PluginOptions>(OPTIONS_KEY);

    if (!options?.theme) {
        throw new Error('[Lantern] Theme not found. Did you install the plugin?');
    }

    const theme = options.theme;
    const config = theme.components[componentName];

    const color = props.color ?? config?.color ?? options.defaultColor ?? 'default';

    const variant = props.variant ?? config?.variant ?? options.defaultVariant ?? 'filled';

    const colorClasses = resolveColorClasses(theme, componentName, color, variant);

    const propsClasses = resolvePropsClasses(theme, componentName, props);

    const classes = twMerge(
        config?.class,      // base classes du composant
        colorClasses,       // classes du color/variant
        propsClasses,       // classes de size, radius, etc.
        props.class         // classes custom de l'user (dernier mot)
    );

    return { classes };
}