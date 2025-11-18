import { merge } from 'lodash-es';
import type { Theme } from '../types';

const staticProperties = ['background', 'foreground'];

export function resolveColorClasses(
    theme: Theme,
    componentName: string,
    color: string,
    variant: string
): string {
    const globalColorVariant = theme.colors[color]?.[variant];
    
    const overrideColorVariant = theme.components?.[componentName]?.override?.colors?.[color]?.[variant];

    if (!globalColorVariant && !overrideColorVariant) {
        console.warn(`[Lantern] Color "${color}" with variant "${variant}" not found in theme`);
        return '';
    }

    const mergedColorVariant = merge({}, globalColorVariant, overrideColorVariant);

    const config = theme.components[componentName];
    const applyKeys = config?.apply ?? [];

    const colorClasses = [
        ...staticProperties.map(key => mergedColorVariant[key]),
        ...applyKeys.map(key => mergedColorVariant[key])
    ].filter(Boolean).join(' ');

    return colorClasses;
}