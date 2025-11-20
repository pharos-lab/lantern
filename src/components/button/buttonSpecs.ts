import type { ComponentSpec } from '../../types/index.ts'

export const buttonSpecs: ComponentSpec = {
    apply: ['hover', 'focus'], //only thoses will be added to button classes
    class: 'l-button',
    defaultProps: { //possibilité to choose default prop for component
        color: 'primary',
        variant: 'filled',
        size: 'medium',
        radius: 'small'
    },
    override: {
        colors: { 
            default: {
                filled: {
                    background: 'bg-blue-500',
                    foreground: 'text-white',
                },
                
            },
            primary: {
                filled: {
                    background: 'bg-sky-500',
                },
                
            },
            //etc
        },
        size: {
            small: 'px-2 py-1',
            medium: 'px-3 py-2',
        },
        loading: {
            true: 'opacity-70 cursor-wait'
        }
    }
}