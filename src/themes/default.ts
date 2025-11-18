export const defaultTheme = {
    colors: { // global variant 
        default: {
            filled: {
                background: 'bg-slate-200',
                foreground: 'text-slate-800',
                hover: 'hover:bg-slate-100',
                border: 'border border-slate-500 custom-class-in-style',
                focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            },
            outline: {
                background: 'bg-white',
                foreground: 'text-slate-500',
                hover: 'hover:bg-slate-500 text-white',
                border: 'border border-slate-500 custom-class-in-style.css',
                focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            }
            
        },
        primary: {
            filled: {
                background: 'bg-slate-200',
                foreground: 'text-slate-800',
                hover: 'hover:bg-slate-100',
                border: 'border border-slate-500 custom-class-in-style',
                focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            },
            outline: {
                background: 'bg-white',
                foreground: 'text-slate-500',
                hover: 'hover:bg-slate-500 text-white',
                border: 'border border-slate-500 custom-class-in-style.css',
                focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            }
            
        },
        //etc
    },
    size: {
        small: 'some tailwind class',
        medium: ''
        //etc
    },
    radius: {
        small: 'rounded-xs'
        //etc
    },
    components: {
        button: {
            color: 'primary', // default color
            variant: 'filled',
            apply: ['hover', 'focus'], //only thoses will be added to button classes
            class: 'some classes to apply to each button created',
            defaultProps: { //possibilité to choose default prop for component
                size: 'small',
                radius: 'small'
            },
            override: {
                colors: { // global variant 
                    default: {
                        filled: {
                            background: 'bg-slate-200',
                            foreground: 'text-slate-800',
                            hover: 'hover:bg-slate-100',
                            border: 'border border-slate-500 custom-class-in-style',
                            focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
                        },
                        outline: {
                            background: 'bg-white',
                            foreground: 'text-slate-500',
                            hover: 'hover:bg-slate-500 text-white',
                            border: 'border border-slate-500 custom-class-in-style.css',
                            focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
                        }
                        
                    },
                    primary: {
                        filled: {
                            background: 'bg-blue-500',
                        },
                        outline: {
                            background: 'bg-white',
                            foreground: 'text-blue-500',
                            hover: 'hover:bg-blue-500 text-white',
                            border: 'border border-slate-500 custom-class-in-style',
                            focus: 'focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-1',
                        }
                        
                    },
                    //etc
                },
                props: { // overide global props
                    size: {
                        small: 'other class'
                    }
                }
            }
        }
    }
}