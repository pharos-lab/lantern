import { colors } from './colors.js'

export const pharos = {
    colors: colors,
    radius: {
        medium: 'rounded',
        none: 'rounded-none',
        large: 'rounded-lg',
        full: 'rounded-full'
    },
    shadow: 'shadow',
    sizes: {
        button: {
            base: 'px-3 py-2',
            small: 'px-2 py-1',
            large: 'px-5 py-3 text-xl'
        },
        badge: {
            base: 'px-3 py-[2px] font-medium',
            small: 'px-2 py-px font-medium text-sm',
            large: 'px-4 py-2 text-lg font-semibold'
        }
    },
    padding: 'p-4'
}