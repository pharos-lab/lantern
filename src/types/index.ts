export interface Theme {
    colors: {
        [colorName: string]: {
            [variantName: string]: {
                [key: string]: string; 
            };
        }
    };
  
    size: {
        [sizeName: string]: string;
    };
  
    radius: {
        [radiusName: string]: string;
    };
  
    components: {
        [componentName: string]: {
            color?: string
            variant?: string; // default variant name
            apply?: string[]; // key list to apply from variant
            class?: string;  // base classes
            defaultProps?: {
                size?: string;
                radius?: string;
            };
            override?: {
                colors?: {
                    [colorName: string]: {
                        [variantName: string]: {
                            [key: string]: string; 
                        };
                    }
                };
                props?: {
                    size?: {
                        [sizeName: string]: string;
                    };
                    radius?: {
                        [radiusName: string]: string;
                    };
                }
            };
        };
    };
}

export interface PluginOptions {
    theme: Theme;
    defaultVariant?: string
    defaultColor?: string
}

export interface ComponentProps {
  class?: string
  color?: string;
  variant?: string;
  size?: string;
  radius?: string;
  [key: string]: unknown
}