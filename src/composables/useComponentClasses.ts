import { inject } from 'vue';
import { twMerge } from 'tailwind-merge';
import { OPTIONS_KEY } from '../plugin';
import type { ComponentProps, PluginOptions, ComponentSpec } from '../types';
import { resolveColorClasses } from '../utils/resolveColorClasses';
import { resolvePropsClasses } from '../utils/resolvePropsClasses';

export function useComponentClasses(
    props: ComponentProps,
    spec: ComponentSpec
) {
    const options = inject<PluginOptions>(OPTIONS_KEY);

    if (!options?.theme) {
        throw new Error('[Lantern] Theme not found. Did you install the plugin?');
    }

    const theme = options.theme;

    // Resolve color (props > spec.defaultProps > 'default')
    const color = props.color ?? spec.defaultProps?.color ?? 'default';

    // Resolve variant (props > spec.defaultProps > 'filled')
    const variant = props.variant ?? spec.defaultProps?.variant ?? 'filled';

    // Get color classes
    const colorClasses = resolveColorClasses(theme, spec, color, variant);

    // Get props classes (size, radius, etc.)
    const propsClasses = resolvePropsClasses(theme, spec, props);

    // Final merge with tailwind-merge
    const classes = twMerge(
        spec.class,
        colorClasses,
        propsClasses,
        props.class
    );

    return classes;
}