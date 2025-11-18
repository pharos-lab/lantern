import type { Theme, ComponentProps } from '../types';

export function resolvePropsClasses(
    theme: Theme,
    componentName: string,
    props: ComponentProps
): string {
    const config = theme.components[componentName];
    const classes: string[] = [];

    const sizeName = props.size ?? config?.defaultProps?.size;

    if (sizeName) {
        const sizeClass = config?.override?.props?.size?.[sizeName] ?? theme.size[sizeName];

        if (sizeClass) {
            classes.push(sizeClass);
        } else {
            console.warn(`[Lantern] Size "${sizeName}" not found in theme`);
        }
    }

    const radiusName = props.radius ?? config?.defaultProps?.radius;

    if (radiusName) {
        // Priorité: override component > global
        const radiusClass = config?.override?.props?.radius?.[radiusName] ?? theme.radius[radiusName];

        if (radiusClass) {
            classes.push(radiusClass);
        } else {
            console.warn(`[Lantern] Radius "${radiusName}" not found in theme`);
        }
    }

    return classes.filter(Boolean).join(' ');
}