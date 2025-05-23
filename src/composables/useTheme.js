export function useTheme(theme) {
  function getThemeClasses(props, component) {
    const classes = []

    if (props.unstyle) {
        return 
    }

    if (props.color) {
        classes.push(theme.colors?.[props.color]?.[props.variant]?.base)
    }

    if (props.hover) {
        const variant = props.variant == 'none' ? 'plain' : props.variant
        classes.push(theme.colors?.[props.color]?.[variant]?.hover)
    }

    if (props.rounded) {
        classes.push(theme.radius?.[props.rounded])
    }

    if (props.shadow) {
        classes.push(theme.shadow)
    }

    if (props.disabled) {
        classes.push("disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed")
    }

    if (props.size) {
        classes.push(theme.sizes?.[component]?.[props.size])
    }

    if (props.aspect) {
        const radius = props.aspect === 'circle' ? 'full' : 'large'
        classes.push(theme.radius?.[radius])
    }

    if (props.focus) {
        classes.push(theme.colors?.[props.color]?.[props.variant]?.focus)
    }
    return classes
  }

  function getThemeClass(props, prop, component) {
    if (prop == "unstyle") {
        return 
    }

    if (prop == "color") {
        return theme.colors?.[props[prop]]?.[props.variant]?.base
    }

    if (prop == "hover") {
        return theme.colors?.[props[prop]]?.[props.variant]?.hover
    }

    if (prop == "rounded") {
        return theme.radius?.[props[prop]]
    }

    if (prop == "shadow") {
        return theme.shadow
    }

    if (prop == "disabled") {
        return "disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed"
    }

    if (prop == "size") {
        return theme.sizes?.[component]?.[props[prop]]
    }

    if (prop == "aspect") {
        const radius = prop === 'circle' ? 'full' : 'large'
        return theme.radius[radius]
    }

    if (prop == "focus") {
        return theme.colors?.[props[prop]]?.[props.variant]?.focus
    }

    if (prop == 'border') {
        return theme.colors?.[props.color]?.[props.variant]?.border
    }
  }

  return { theme, getThemeClasses, getThemeClass }
}