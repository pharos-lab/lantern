export function useTheme(options) {
    function getPropValue(propName, props, component) {
        return (
            props?.[propName] ??
            options.theme.components?.[component]?.[propName] ??
            options[`default${capitalize(propName)}`]
        )
    }
      
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    function getColorPart(props, part, component) {
        const color = getPropValue('color', props, component) || 'default'
        const variant = getPropValue('variant', props, component) || 'plain'
        
        if (import.meta.env.DEV && !options.theme.colors?.[color]?.[variant]) {
            console.warn(`[lantern] Couleur "${color}" ou variante "${variant}" introuvable dans le thème. \n Component: ${component}`)
        }
        return options.theme.colors?.[color]?.[variant]?.[part]
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
                return getColorPart(props, 'base', component)
            case 'hover':
                return getColorPart(props, 'hover', component)
            case 'focus':
                return getColorPart(props, 'focus', component)
            case 'active':
                return getColorPart(props, 'active', component)
            case 'border':
                return getColorPart(props, 'border', component)
            case 'rounded':
                const rounded = getPropValue('rounded', props, component)
                return options.theme.radius?.[rounded]
            case 'aspect':
                const radius = props.aspect === 'circle' ? 'full' : 'large'
                return options.theme.radius?.[radius]
            case 'shadow':
                return options.theme.shadow
            case 'disabled':
                return 'disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed'
            case 'size':
                return options.theme.components?.[component]?.sizes?.[props[prop]]
        }
    }

    function getStaticClass(component) {
        return options.theme.components?.[component]?.class || ''
    }

    return { theme: options.theme, getThemeClasses, getThemeClass, getStaticClass }
}
  