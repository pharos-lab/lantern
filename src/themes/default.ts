export const defaultTheme = {
    variants: { // global variant 
        default: {
            background: 'bg-slate-50',
            foreground: 'text-slate-700',
            hover: 'hover:bg-slate-100',
            border: 'border border-slate-500 custom-class-in-style.css',
            focus: 'focus:ring-2 focus:ring-slate-500/50 focus:ring-offset-1',
            outline: 'border border-slate-500 border-2'
        },
        primary: {
            // same but different value
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
            variant: 'primary', // variant par default
            apply: ['hover', 'focus'], // background and foreground are automatically inject, only thoses will be added to button classes
            class: 'some classes to apply to each button created',
            defaultProps: { //possibilité to choose default prop for component
                size: 'large',
                radius: 'small'
            },
            variants: { //overide global variant
                default: {
                    background: 'bg-slate-30',
                    foreground: 'text-slate-700',
                    hover: 'hover:bg-slate-200',
                    border: 'border border-slate-500 custom-class-in-style.css',
                },
                primary: {
                    background: 'bg-blue-500'
                }
            }, 
            props: { // overide global props
                size: {
                    small: 'other class'
                }
            }
        }
    }
}