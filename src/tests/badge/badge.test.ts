// src/tests/badge/Badge.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Badge from '../../components/badge/Badge.vue'
import { OPTIONS_KEY } from '../../utils/keys'

const mockTheme = {
    theme: {
        colors: {
        slate: {
            filled: { background: 'bg-slate-500', foreground: 'text-white', hover: 'hover:bg-slate-400' },
            outline: { background: '', foreground: 'text-slate-500', hover: 'hover:bg-slate-100' }
        }
        },
        radius: { medium: 'rounded' },
        size: { medium: 'px-3 py-1' }
    },
    defaultColor: 'slate',
    defaultVariant: 'filled'
}

describe('Badge (styled)', () => {
    it('renders content', () => {
        const wrapper = mount(Badge, {
            props: { color: 'slate', variant: 'filled' },
            slots: { default: 'New' },
            global: { provide: { [OPTIONS_KEY]: mockTheme } }
        })
        
        expect(wrapper.text()).toBe('New')
    })

    it('applies classes from theme + specs', () => {
        const wrapper = mount(Badge, {
            props: { color: 'slate', variant: 'filled' },
            global: { provide: { [OPTIONS_KEY]: mockTheme } }
        })

        const el = wrapper.find('.l-badge')
        expect(el.classes()).toContain('bg-slate-500')
        expect(el.classes()).toContain('text-white')
    })
})