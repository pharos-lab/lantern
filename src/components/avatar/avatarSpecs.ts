import type { ComponentSpec } from '../../types';

export const avatarSpecs: ComponentSpec = {
    name: 'Avatar',
    apply: [],
    class: 'relative inline-flex items-center justify-center overflow-hidden',
    defaultProps: {
        color: 'slate',
        variant: 'light',
        size: 'md',
        radius: 'full'
    },
    override: {
        size: {
            sm: 'size-5',
            md: 'size-7'
        }
    }
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
    class: 'flex items-center justify-center w-full h-full font-medium text-sm uppercase p-2',
    defaultProps: {
        color: 'slate',
        variant: 'light'
    },
    override: {}
};