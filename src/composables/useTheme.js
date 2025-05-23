export function useTheme(theme) {

    function getColorPart(props, part) {
        return theme.colors?.[props.color]?.[props.variant]?.[part]
    }

    function getThemeClasses(props, component) {
        if (props.unstyle) return []

        return Object.keys(props)
            .map(prop => getThemeClass(props, prop, component))
            .filter(Boolean)
    }

    function getThemeClass(props, prop, component) {
        if (prop === 'unstyle') return

        switch (prop) {
            case 'color':
                return getColorPart(props, 'base')
            case 'hover':
                return getColorPart(props, 'hover')
            case 'focus':
                return getColorPart(props, 'focus')
            case 'active':
                return getColorPart(props, 'active')
            case 'border':
                return getColorPart(props, 'border')
            case 'rounded':
                return theme.radius?.[props.rounded]
            case 'aspect':
                const radius = props.aspect === 'circle' ? 'full' : 'large'
                return theme.radius?.[radius]
            case 'shadow':
                return theme.shadow
            case 'disabled':
                return 'disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed'
            case 'size':
                return theme.sizes?.[component]?.[props[prop]]
        }
    }

    return { theme, getThemeClasses, getThemeClass }
}
  