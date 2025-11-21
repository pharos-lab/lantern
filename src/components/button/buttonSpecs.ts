import type { ComponentSpec } from '../../types/index.ts'

export const buttonSpecs: ComponentSpec = {
    name: 'Button',
    apply: ['hover', 'focus'], //only thoses will be added to button classes
    class: 'l-button transition',
    defaultProps: { //possibility to choose default prop for component
        color: 'slate',
        variant: 'filled',
        size: 'medium',
        radius: 'medium'
    },
}