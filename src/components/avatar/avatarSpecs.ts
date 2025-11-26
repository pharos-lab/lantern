import type { ComponentSpec } from '../../types';

export const avatarSpecs: ComponentSpec = {
    name: 'Avatar',
    apply: [],
    class: 'relative inline-flex items-center justify-center overflow-hidden',
    defaultProps: {
        color: 'slate',
        variant: 'soft',
        size: 'md',
        radius: 'full'
    },
    override: {}
};

export const avatarImageSpecs: ComponentSpec = {
    name: 'AvatarImage',
    class: 'w-full h-full object-cover',
    defaultProps: {},
    override: {}
};

export const avatarFallbackSpecs: ComponentSpec = {
    name: 'AvatarFallback',
    apply: [],
    class: 'flex items-center justify-center w-full h-full font-medium text-sm uppercase',
    defaultProps: {
        color: 'slate',
        variant: 'soft'
    },
    override: {}
};