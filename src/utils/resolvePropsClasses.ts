import type { Theme, ComponentSpec } from '../types';

export function resolvePropsClasses(
    theme: Theme,
    spec: ComponentSpec | undefined,
    props: Record<string, unknown>
): string {
    const classes: string[] = [];
    const excludedProps = ['color', 'variant', 'class'];

    // Loop through props passed to component
    for (const propName in props) {
        // Skip excluded props
        if (excludedProps.includes(propName)) continue;

        // Resolve value: props > spec.defaultProps
        const propValue = props[propName] ?? spec?.defaultProps?.[propName];
        
        if (!propValue) continue;

        // Must be a string to index theme/override
        if (typeof propValue !== 'string') {
            continue; // ignore numbers, booleans, objects, etc.
        }

        // Find class: spec override > global theme
        const propClass = spec?.override?.[propName]?.[propValue] ?? theme[propName]?.[propValue];

        if (propClass) {
            classes.push(propClass);
        } else {
            console.warn(`[Lantern] ${propName} "${propValue}" not found in theme`);
        }
    }

    return classes.filter(Boolean).join(' ');
}