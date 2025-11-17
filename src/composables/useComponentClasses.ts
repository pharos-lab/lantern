import { inject } from 'vue';
import { merge } from 'lodash-es';
import { twMerge } from 'tailwind-merge';
import { OPTIONS_KEY, } from '../plugin';
import type { ComponentProps, PluginOptions } from '../types';

const staticProperties = ['background', 'foreground']

export function useComponentClasses(componentName: string, props: ComponentProps) {
    const options = inject<PluginOptions>(OPTIONS_KEY)

    if (!options?.theme) {
        throw new Error('[Lantern] Theme not found. Did you install the plugin?');
    }

    // get color prop from componant to config
    const color = props.color || options.theme.components[componentName]?.color || options.defaultColor || 'default'

    const variant = props.variant || options.theme.components[componentName]?.variant || options.defaultVariant || 'filled'
   
    // 3. Récupérer le color/variant du global
    const globalColorVariant = options.theme.colors[color]?.[variant];
    
    // 4. Récupérer l'override du composant
    const overrideColorVariant = options.theme.components?.[componentName]?.override?.colors?.[color]?.[variant];
    
    // 5. Si ni global ni override, warning
    if (!globalColorVariant && !overrideColorVariant) {
        console.warn(`[Lantern] Color "${color}" with variant "${variant}" not found in theme`);
        return { classes: props.class || '' };
    }

    // 6. Deep merge avec lodash
    const mergedColorVariant = merge({}, globalColorVariant, overrideColorVariant);
    

    return { classes: '' }
}