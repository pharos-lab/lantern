import { inject } from 'vue';
import { twMerge } from 'tailwind-merge';
import { OPTIONS_KEY, } from '../plugin';
import type { ComponentProps, PluginOptions } from '../types';

const staticProperties = ['background', 'foreground']


export function useComponentClasses(componentName: string, props: ComponentProps) {
    const options = inject<PluginOptions>(OPTIONS_KEY)

    if (!options?.theme) {
        throw new Error('[Lantern] Theme not found. Did you install the plugin?');
    }

    const config = options.theme.components[componentName];

    if (!config) {
        console.warn(`[TaLib] Component "${componentName}" not found in theme`);
        return { classes: props.class || '' };
    }

    const variant = props.variant || options.theme.components[componentName]?.variant || options.defaultVariant || 'default'

    console.log(variant);
    
    
    const variantConfig = options.theme.components[componentName]?.variants?.[variant]
    
    console.log(variantConfig);

    
    if (!variantConfig) {
        console.warn(`[theme warning] Variant "${variant}" is not defined in theme.
        component: ${componentName}`)
        return []
    }

    return { classes: '' }
}