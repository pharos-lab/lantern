// src/composables/useTheme.js
import { merge } from 'lodash-es';
import { theme as defaultTheme } from '@/config/theme.js';
import { theme as userTheme } from '/lantern.config.js'
import { reactive } from 'vue'


export function useTheme() {
  // Method to merge user theme with the default theme
  const theme = reactive(merge(defaultTheme, userTheme))

  const generateClass = (props, component, property) => {
    switch (property) {
      case 'background':
        if (props.variant === 'outline' || props.variant === 'text') {
          let bgClass = theme.colors.text[props.color];
          if (props.variant === 'outline') {
            bgClass += (props.hover ? ' hover:border-transparent ' : '') + ' border border-current ' + (theme.components[component].border);
          }
          return bgClass;
        }
        return theme.colors.background[props.color][props.variant];
      case 'subBackground':
        if (props.variant === 'outline' || props.variant === 'text') {
          return theme.colors.text[props.color];
        }
        return theme.colors.subBackground[props.color][props.variant];
      case 'hover':
        return props.hover ? theme.colors.background.hover[props.color][props.variant] : null;
      case 'borderRadius':
        return theme.borderRadius[props.rounded];
      case 'shadow':
        return props.shadow ? theme.components[component].shadow : null;
      case 'padding':
        return theme.components[component].padding;
      case 'divide':
        return props.divide ? theme.colors.divide[props.color][props.variant] : null;
      case 'size':
        return props.size ? theme.components[component].size?.[props.size] : null;
      default:
        return null;
    }
  };

  const getClasses = (props, component, options = {}) => {
    const { exclude = [], debug = false } = options;
    const allClassTypes = ['background', 'subBackground', 'hover', 'borderRadius', 'shadow', 'padding', 'size', 'divide'];
    const include = allClassTypes.filter(type => !exclude.includes(type));
  
    const classes = include.map(type => generateClass(props, component, type)).filter(Boolean);
  
    if (debug) console.log(`Classes for ${component}:`, classes);
  
    return classes.join(' ');
  };

  const getClass = (props, component, property) => {
    return generateClass(props, component, property);
  };

  const getClassesObject = (props, component, options = {}) => {
    const { exclude = [], debug = false } = options;
    const allClassTypes = ['background', 'hover', 'borderRadius', 'shadow', 'padding', 'size'];
    const include = allClassTypes.filter(type => !exclude.includes(type));
  
    const classes = {};
    include.forEach(type => {
      const classValue = generateClass(props, component, type);
      if (classValue) classes[type] = classValue;
    });
  
    if (debug) console.log(`Classes for ${component}:`, classes);
  
    return classes;
  };

  return { theme, getClasses, getClassesObject, getClass }
}
