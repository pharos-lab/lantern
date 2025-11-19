export interface Theme {
    colors: {
        [colorName: string]: {
            [variantName: string]: {
                [key: string]: string;
            };
        };
    };
    size: {
        [sizeName: string]: string;
    };
    radius: {
        [radiusName: string]: string;
    };
    [propName: string]: Record<string, any> // for other theme props
}

// Component Spec
export interface ComponentSpec {
    apply?: string[];
    class?: string;
    defaultProps?: {
        color?: string;
        variant?: string;
        size?: string;
        radius?: string;
        [key: string]: string | undefined;
    };
    override?: {
        colors?: {
            [colorName: string]: {
                [variantName: string]: {
                    [key: string]: string;
                };
            };
        };
        [propName: string]: Record<string, any> |undefined; // size, radius, etc.
    };
}

// Plugin options (no more defaultColor/defaultVariant)
export interface PluginOptions {
    theme: Theme;
    defaultColor: string
    defaultVariant: string
}

// Component props
export interface ComponentProps {
    color?: string;
    variant?: string;
    size?: string;
    radius?: string;
    class?: string;
    [key: string]: unknown;
}