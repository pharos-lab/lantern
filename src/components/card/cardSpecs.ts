import type { ComponentSpec } from '../../types'

export const cardSpecs: ComponentSpec = {
    name: 'Card',
    apply: ['hover'],
    class: 'l-card relative p-4',
    defaultProps: {
        color: 'slate',
        variant: 'filled',
        radius: 'medium',
        shadow: 'medium'
    },

}
