import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CardStyled from '../../components/card/Card.vue'
import { OPTIONS_KEY } from '../../utils/keys'

const mockTheme = {
  theme: {
    colors: {
      slate: {
        filled: {
          background: 'bg-slate-500',
          foreground: 'text-white',
        },
        outline: {
          background: 'bg-transparent',
          foreground: 'text-slate-700',
          hover: 'hover:bg-slate-100'
        }
      },
      blue: {
        filled: {
          background: 'bg-blue-500',
          foreground: 'text-white',
          hover: 'hover:bg-blue-400'
        }
      }
    },
    radius: { medium: 'rounded' },
    shadow: { medium: 'shadow-md' }
  },
  defaultColor: 'slate',
  defaultVariant: 'filled'
}

describe('Card (styled) with color/variant', () => {
  it('applies custom color and variant from props', () => {
    const wrapper = mount(CardStyled, {
      global: { provide: { [OPTIONS_KEY]: mockTheme } },
      props: {
        color: 'slate',
        variant: 'outline'
      }
    })

    const el = wrapper.find('.l-card')
    expect(el.classes()).toContain('bg-transparent')
    expect(el.classes()).toContain('text-slate-700')
    expect(el.classes()).toContain('hover:bg-slate-100')
    expect(el.classes()).toContain('rounded')   // radius reste appliqué
    expect(el.classes()).toContain('shadow-md') // shadow reste appliqué
  })
})