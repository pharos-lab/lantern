import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useComponentClasses } from '../composables/useComponentClasses';
import type { Theme, PluginOptions } from '../types';

// Mock vue's inject
vi.mock('vue', () => ({
    inject: vi.fn()
}));

import { inject } from 'vue';
const mockInject = inject as ReturnType<typeof vi.fn>;

// Mock theme for testing
const mockTheme: Theme = {
    colors: {
        default: {
            filled: {
                background: 'bg-gray-100',
                foreground: 'text-gray-900',
                hover: 'hover:bg-gray-200',
                border: 'border-gray-300',
                focus: 'focus:ring-gray-500'
            },
            outline: {
                background: 'bg-transparent',
                foreground: 'text-gray-900',
                hover: 'hover:bg-gray-100',
                border: 'border-2 border-gray-300',
                focus: 'focus:ring-gray-500'
            }
        },
        primary: {
            filled: {
                background: 'bg-blue-600',
                foreground: 'text-white',
                hover: 'hover:bg-blue-700',
                border: 'border-blue-600',
                focus: 'focus:ring-blue-500'
            },
            outline: {
                background: 'bg-transparent',
                foreground: 'text-blue-600',
                hover: 'hover:bg-blue-50',
                border: 'border-2 border-blue-600',
                focus: 'focus:ring-blue-500'
            }
        }
    },
    size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg'
    },
    radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg'
    },
    components: {
        button: {
            color: 'primary',
            variant: 'filled',
            apply: ['hover', 'focus'],
            class: 'inline-flex items-center justify-center font-medium transition-colors',
            defaultProps: {
                size: 'md',
                radius: 'md'
            },
            override: {
                colors: {
                    primary: {
                        filled: {
                        background: 'bg-blue-500' // override global
                        }
                    }
                },
                props: {
                    size: {
                        sm: 'h-7 px-2 text-xs' // override global
                    }
                }
            }
        },
        card: {
            color: 'default',
            variant: 'outline',
            apply: ['border'],
            class: 'p-4',
            defaultProps: {
                radius: 'lg'
            },
            override: {}
        }
    }
};

const mockOptions: PluginOptions = {
        theme: mockTheme,
        defaultColor: 'default',
        defaultVariant: 'filled'
};

describe('useComponentClasses', () => {
    beforeEach(() => {
        // Reset mocks before each test
        vi.clearAllMocks();
        mockInject.mockReturnValue(mockOptions);
    }
);

describe('Theme injection', () => {
    it('should throw error if theme is not injected', () => {
        mockInject.mockReturnValue(undefined);

        expect(() => {
            useComponentClasses('button', {});
        }).toThrow('[Lantern] Theme not found. Did you install the plugin?');
    });
});

describe('Color and variant resolution', () => {
    it('should use props color/variant when provided', () => {
        const { classes } = useComponentClasses('button', {
        color: 'default',
        variant: 'outline'
    });

    expect(classes).toContain('bg-transparent');
    expect(classes).toContain('text-gray-900');
    });

    it('should use component config color/variant as fallback', () => {
        const { classes } = useComponentClasses('button', {});

        // button config: color='primary', variant='filled'
        expect(classes).toContain('bg-blue-500'); // override version
        expect(classes).toContain('text-white');
    });

    it('should use global default color/variant as final fallback', () => {
        const { classes } = useComponentClasses('unknownComponent', {});

        // No component config, should use defaultColor='default', defaultVariant='filled'
        expect(classes).toContain('bg-gray-100');
        expect(classes).toContain('text-gray-900');
    });

    it('should apply component color override over global', () => {
        const { classes } = useComponentClasses('button', {
        color: 'primary',
        variant: 'filled'
    });

        // Should use override bg-blue-500 instead of global bg-blue-600
        expect(classes).toContain('bg-blue-500');
        expect(classes).not.toContain('bg-blue-600');
    });

    it('should only apply keys listed in "apply" config', () => {
        const { classes } = useComponentClasses('button', {
        color: 'primary',
        variant: 'filled'
        });

        // button apply: ['hover', 'focus']
        expect(classes).toContain('hover:bg-blue-700');
        expect(classes).toContain('focus:ring-blue-500');
        // border should NOT be included
        expect(classes).not.toContain('border-blue-600');
    });

    it('should always include background and foreground (static properties)', () => {
        const { classes } = useComponentClasses('card', {});

        // card config: color='default', variant='outline'
        // card apply: ['border'], but bg/fg are always included
        expect(classes).toContain('bg-transparent'); // outline variant has transparent bg
        expect(classes).toContain('text-gray-900');
    });

    it('should warn if color/variant not found', () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

        const { classes } = useComponentClasses('button', {
        color: 'nonexistent',
        variant: 'invalid'
        });

        expect(warnSpy).toHaveBeenCalledWith(
        '[Lantern] Color "nonexistent" with variant "invalid" not found in theme'
        );
        // Should still return base classes and props when color/variant not found
        expect(classes.length).toBeGreaterThan(0);

        warnSpy.mockRestore();
    });
});

describe('Props resolution (size, radius)', () => {
    it('should use props size/radius when provided', () => {
        const { classes } = useComponentClasses('button', {
            size: 'lg',
            radius: 'lg'
        });

        expect(classes).toContain('h-12 px-6 text-lg');
        expect(classes).toContain('rounded-lg');
    });

    it('should use component defaultProps as fallback', () => {
        const { classes } = useComponentClasses('button', {});

        // button defaultProps: size='md', radius='md'
        expect(classes).toContain('h-10 px-4 text-base');
        expect(classes).toContain('rounded-md');
    });

    it('should apply component prop override over global', () => {
        const { classes } = useComponentClasses('button', {
            size: 'sm'
        });

        // Should use override h-7 px-2 text-xs instead of global h-8 px-3 text-sm
        expect(classes).toContain('h-7 px-2 text-xs');
        expect(classes).not.toContain('h-8 px-3 text-sm');
    });

    it('should use global props if no component override', () => {
        const { classes } = useComponentClasses('button', {
            size: 'lg' // no override for lg
        });

        expect(classes).toContain('h-12 px-6 text-lg');
    });

    it('should warn if prop value not found', () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

        useComponentClasses('button', {
            size: 'nonexistent'
        });

        expect(warnSpy).toHaveBeenCalledWith(
            '[Lantern] Size "nonexistent" not found in theme'
        );

        warnSpy.mockRestore();
        });
});

describe('Class merging', () => {
    it('should include component base class', () => {
        const { classes } = useComponentClasses('button', {});

        expect(classes).toContain('inline-flex');
        expect(classes).toContain('items-center');
        expect(classes).toContain('justify-center');
    });

    it('should merge all classes in correct order', () => {
        const { classes } = useComponentClasses('button', {
            color: 'primary',
            variant: 'filled',
            size: 'lg',
            radius: 'lg'
        });

        // Should contain: base + color + props
        expect(classes).toContain('inline-flex');
        expect(classes).toContain('bg-blue-500');
        expect(classes).toContain('h-12');
        expect(classes).toContain('rounded-lg');
    });

    it('should give user class the final word (tailwind-merge)', () => {
        const { classes } = useComponentClasses('button', {
            color: 'primary',
            variant: 'filled',
            class: 'bg-red-500 h-20'
        });

        // User classes should override
        expect(classes).toContain('bg-red-500');
        expect(classes).not.toContain('bg-blue-500');
        expect(classes).toContain('h-20');
        expect(classes).not.toContain('h-10');
    });

    it('should work with component without specific config', () => {
        const { classes } = useComponentClasses('unknownComponent', {
            color: 'primary',
            variant: 'outline',
            size: 'sm'
        });

        // Should still work with global values only
        expect(classes).toContain('bg-transparent');
        expect(classes).toContain('text-blue-600');
        expect(classes).toContain('h-8 px-3 text-sm');
    });
});

describe('Edge cases', () => {
    it('should handle empty props', () => {
        const { classes } = useComponentClasses('button', {});

        expect(classes).toBeTruthy();
        expect(classes.length).toBeGreaterThan(0);
    });

    it('should handle component with no override', () => {
        const { classes } = useComponentClasses('card', {});

        expect(classes).toBeTruthy();
        expect(classes).toContain('p-4');
    });

    it('should handle only user class', () => {
        const { classes } = useComponentClasses('button', {
            class: 'custom-class'
        });

        expect(classes).toContain('custom-class');
    });

    it('should handle multiple user classes', () => {
        const { classes } = useComponentClasses('button', {
            class: 'custom-1 custom-2 custom-3'
        });

        expect(classes).toContain('custom-1');
        expect(classes).toContain('custom-2');
        expect(classes).toContain('custom-3');
        });
    });
});