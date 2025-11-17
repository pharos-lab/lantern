export interface Theme {
  variants: {
    [variantName: string]: {
      [key: string]: string; // n'importe quelle clé avec des classes Tailwind
    };
  };
  
  size: {
    [sizeName: string]: string;
  };
  
  radius: {
    [radiusName: string]: string;
  };
  
  components: {
    [componentName: string]: {
      variant?: string; // default variant name
      apply?: string[]; // key list to apply from variant
      class?: string;  // base classes
      defaultProps?: {
        size?: string;
        radius?: string;
      };
      variants?: {
        [variantName: string]: {
          [key: string]: string; // override partiel
        };
      };
      props?: {
        size?: {
          [sizeName: string]: string;
        };
        radius?: {
          [radiusName: string]: string;
        };
      };
    };
  };
}

export interface PluginOptions {
    theme: Theme;
    defaultVariant?: string
}

export interface ComponentProps {
  class?: string
  [key: string]: unknown
}