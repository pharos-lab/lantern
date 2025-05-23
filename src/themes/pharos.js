import { colors } from './colors.js'

export const pharos = {
    colors: colors,
    radius: {
        medium: 'rounded',
        none: 'rounded-none',
        large: 'rounded-lg',
        full: 'rounded-full'
    },
    shadow: 'shadow-md',
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
    padding: 'p-4',
    components: {
        SearchList: 'space-y-2 bg-white',
        SearchListItems: 'p-1 rounded border shadow-lg',
        SearchListItem: 'px-3 py-1 rounded',
        EmptyList: 'px-3 py-1 rounded',
        TabsList: 'flex gap-2',
        TabsTrigger: 'rounded px-3 py-1',
    }
}