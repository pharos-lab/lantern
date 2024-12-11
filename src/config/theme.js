export const theme = {
    colors: {
        background: {
            primary: {
                light:'bg-sky-100 text-sky-700',
                dark:'bg-sky-700 text-white',
                base:'bg-sky-500 text-white',
            },
            secondary: {
                light:'bg-slate-100 text-slate-700',
                dark:'bg-slate-700 text-white',
                base:'bg-slate-500 text-white',
            },
            warning: {
                light:'bg-yellow-100 text-yellow-700',
                dark:'bg-yellow-700 text-white',
                base:'bg-yellow-500 text-white',
            },
            success: {
                light:'bg-emerald-100 text-emerald-700',
                dark:'bg-emerald-700 text-white',
                base:'bg-emerald-500 text-white',
            },
            info: {
                light:'bg-cyan-100 text-cyan-800',
                dark:'bg-cyan-700 text-white',
                base:'bg-cyan-300 text-cyan-800',
            },
            danger: {
                light:'bg-red-100 text-red-800',
                dark:'bg-red-700 text-white',
                base:'bg-red-500 text-white',
            },
            white: {
                base:'bg-white text-slate-700',
            },
        },
        text: {
            primary: 'text-sky-500',
            secondary: 'text-slate-500',
            danger: 'text-red-500',
            warning: 'text-yellow-500',
            success: 'text-emerald-500'
        },
        subBackground: {
            primary: {
                light:'bg-sky-50 text-sky-700',
                dark:'bg-sky-500 text-white',
                base:'bg-sky-300 text-white',
            },
            secondary: {
                light:'bg-slate-50 text-slate-700',
                dark:'bg-slate-500 text-white',
                base:'bg-slate-300 text-white',
            },
            warning: {
                light:'bg-yellow-50 text-yellow-700',
                dark:'bg-yellow-500 text-white',
                base:'bg-yellow-300 text-white',
            },
            success: {
                light:'bg-emerald-50 text-emerald-700',
                dark:'bg-emerald-500 text-white',
                base:'bg-emerald-300 text-white',
            },
            info: {
                light:'bg-cyan-50 text-cyan-800',
                dark:'bg-cyan-500 text-white',
                base:'bg-cyan-200 text-cyan-800',
            },
            danger: {
                light:'bg-red-50 text-red-800',
                dark:'bg-red-500 text-white',
                base:'bg-red-300 text-white',
            },
            white: {
                base:'bg-white text-slate-700',
            },
        },
        SurBackground: {
            primary: {
                light:'bg-sky-200 text-sky-700',
                dark:'bg-sky-800 text-white',
                base:'bg-sky-600 text-white',
            },
            secondary: {
                light:'bg-slate-200 text-slate-700',
                dark:'bg-slate-800 text-white',
                base:'bg-slate-600 text-white',
            },
            warning: {
                light:'bg-yellow-200 text-yellow-700',
                dark:'bg-yellow-800 text-white',
                base:'bg-yellow-600 text-white',
            },
            success: {
                light:'bg-emerald-200 text-emerald-700',
                dark:'bg-emerald-800 text-white',
                base:'bg-emerald-600 text-white',
            },
            info: {
                light:'bg-cyan-200 text-cyan-800',
                dark:'bg-cyan-800 text-white',
                base:'bg-cyan-400 text-cyan-800',
            },
            danger: {
                light:'bg-red-200 text-red-800',
                dark:'bg-red-800 text-white',
                base:'bg-red-600 text-white',
            },
            white: {
                base:'bg-white text-slate-700',
            },
        },
        divide: {
            primary: {
                light:'divide-sky-200',
                dark:'divide-sky-800',
                base:'divide-sky-600',
            },
            secondary: {
                light:'divide-slate-200',
                dark:'divide-slate-800',
                base:'divide-slate-600',
            },
            warning: {
                light:'divide-yellow-200',
                dark:'divide-yellow-800',
                base:'divide-yellow-600',
            },
            success: {
                light:'divide-emerald-200',
                dark:'divide-emerald-800',
                base:'divide-emerald-600',
            },
            info: {
                light:'divide-cyan-200',
                dark:'divide-cyan-800',
                base:'divide-cyan-600',
            },
            danger: {
                light:'divide-red-200',
                dark:'divide-red-800',
                base:'divide-red-600',
            },
        }
    },
    hover: {
        primary: {
            light: 'hover:bg-sky-200 text-sky-700',
            dark: 'hover:bg-sky-800 text-white',
            base: 'hover:bg-sky-600 text-white',
            outline: 'hover:bg-sky-500 hover:text-white',
        },
        secondary: {
            light: 'hover:bg-slate-200 text-slate-700',
            dark: 'hover:bg-slate-800 text-white',
            base: 'hover:bg-slate-600 text-white',
            outline: 'hover:bg-slate-500 hover:text-white',
        },
        warning: {
            light: 'hover:bg-yellow-200 text-yellow-700',
            dark: 'hover:bg-yellow-800 text-white',
            base: 'hover:bg-yellow-600 text-white',
            outline: 'hover:bg-yellow-500 hover:text-white',
        },
        success: {
            light: 'hover:bg-emerald-200 text-emerald-700',
            dark: 'hover:bg-emerald-800 text-white',
            base: 'hover:bg-emerald-600 text-white',
            outline: 'hover:bg-emerald-500 hover:text-white',
        },
        info: {
            light: 'hover:bg-cyan-200 text-cyan-800',
            dark: 'hover:bg-cyan-800 text-white',
            base: 'hover:bg-cyan-400 text-cyan-800',
            outline: 'hover:bg-cyan-500 hover:text-white',
        },
        danger: {
            light: 'hover:bg-red-200 text-red-800',
            dark: 'hover:bg-red-800 text-white',
            base: 'hover:bg-red-600 text-white',
            outline: 'hover:bg-red-500 hover:text-white',
        },
    },
    borderRadius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        base: 'rounded',
        md: 'rounded-md',
        pill: 'rounded-full'
    },
    components: {
        button: {
            shadow: 'shadow',
            size: {
                small: 'px-2 py-1',
                medium: 'px-3 py-2',
                large: 'px-4 py-3'
            },
            border: 'border-2'
        },
        alert: {
            shadow: 'shadow',
            border: 'border-2',
            padding: 'p-8'
        },
        card: {
            shadow: 'shadow',
            padding: 'p-8'
        },
        modal: {
            padding: 'p-8',
            size: {
                small: 'max-w-md',
                medium: 'max-w-xl',
                large: 'max-w-3xl',
                'extra-large': 'max-w-6xl'
            }
        },
        accordion: {
        },
        panel: {
            shadow: 'shadow'
        },
        tabs: {
            padding: 'p-4'
        },
        stepper: {
            padding: 'p-4'
        }
    },
}