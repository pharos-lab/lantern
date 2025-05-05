export function useTheme(theme) {
  function getThemeClasses(props, component) {
      console.log(props);
      const classes = []

      if (props.unstyle) {
          return 
      }

      if (props.color) {
          classes.push(theme.colors[props.color]?.[props.variant])
      }

      if (props.hover) {
          classes.push(theme.colors[props.color]?.hover[props.variant])
      }

      if (props.rounded) {
          classes.push(theme.radius[props.rounded])
      }

      if (props.shadow) {
          classes.push(theme.shadow)
      }

      if (props.disabled) {
          classes.push("disabled:bg-slate-200 disabled:text-slate-500 disabled:cursor-not-allowed")
      }

      if (props.size) {
          classes.push(theme.sizes[component][props.size])
      }

      if (props.aspect) {
          const radius = props.aspect === 'circle' ? 'full' : 'large'
          classes.push(theme.radius[radius])
      }

      return classes
  }


  return { theme, getThemeClasses }
}