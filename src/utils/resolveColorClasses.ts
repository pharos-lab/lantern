import { merge } from 'lodash-es';
import type { Theme, ComponentSpec } from '../types';

const staticProperties = ['background', 'foreground'];

export function resolveColorClasses(
    theme: Theme,
    spec: ComponentSpec | undefined,
    color: string,
    variant: string
): string {
    // 1. Get color/variant from global theme
    const globalColorVariant = theme.colors[color]?.[variant];
    
    // 2. Get override from spec
    const overrideColorVariant = spec?.override?.colors?.[color]?.[variant];

    // 3. If neither global nor override exists, return empty
    if (!globalColorVariant && !overrideColorVariant) {
        console.warn(`[Lantern] Color "${color}" with variant "${variant}" not found in theme`);
        return '';
    }

    // 4. Deep merge with lodash
    const mergedColorVariant = merge({}, globalColorVariant, overrideColorVariant);

    // 5. Get apply keys from spec
    const applyKeys = spec?.apply ?? [];

    // 6. Extract classes according to staticProperties + apply
    const colorClasses = [
        ...staticProperties.map(key => mergedColorVariant[key]),
        ...applyKeys.map(key => mergedColorVariant[key])
    ].filter(Boolean).join(' ');

    return colorClasses;
}