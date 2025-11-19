import type { ComponentSpec } from '../../types/index.ts'

export const buttonSpecs: ComponentSpec = {
    apply: ['hover', 'focus'], //only thoses will be added to button classes
    class: 'button-component-class',
    defaultProps: { //possibilité to choose default prop for component
        color: 'primary',
        variant: 'filled',
        size: 'small',
        radius: 'small'
    },
    override: {
        colors: { // global variant 
            default: {
                filled: {
                    background: 'override-default-filled-button-bg',
                    foreground: 'ovveride-default-filled-button-fg',
                },
                
            },
            primary: {
                filled: {
                    background: 'override-primary-button-bg',
                },
                
            },
            //etc
        },
        size: {
            large: 'override-button-size-large'
        }
    }
}