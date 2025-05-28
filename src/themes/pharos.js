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
    padding: 'p-4',
    components: {
        Badge: {
            sizes: {
                base: 'px-3 py-2',
                small: 'px-2 py-1',
                large: 'px-5 py-3 text-xl'
            }
        },
        Button: {
            variant: 'light',
            sizes: {
                base: 'px-3 py-2',
                small: 'px-2 py-1',
                large: 'px-5 py-3 text-xl'
            },
        },
        SearchList: {
            class:'bg-white',
        },
        SearchListItems: {
            class: 'p-1 rounded border shadow-lg mt-2',
        },
        SearchListItem: {
            class: 'px-3 py-1 rounded',
            variant: 'text'
        },
        EmptyList: {
            class: 'px-3 py-1 rounded',
            variant: 'text'
        },
        Tabs: {
            class: 'gap-2',
        },
        TabsList: {
            class: 'flex gap-1',
        },
        TabsTrigger: {
            class: 'rounded px-3 py-1 flex items-center',
        },
        TabsContent: {
            class: 'p-4'
        },
    }
}