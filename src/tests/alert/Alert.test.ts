import { mount } from '@vue/test-utils'
import Alert from '../../components/alert/Alert.vue'
import { describe, it, expect } from 'vitest'
import { OPTIONS_KEY } from '../../utils/keys'

const mockTheme = {
  theme: {
    colors: {
      slate: {
        filled: {
          background: 'bg-slate-500',
          foreground: 'text-white',
        }
      }
    },
    size: { medium: 'px-3 py-2' },
    radius: { medium: 'rounded' }
  },
  defaultColor: 'slate',
  defaultVariant: 'filled'
}

describe('Alert (styled)', () => {
  it('forwards dismiss event', async () => {
    const wrapper = mount(Alert, {
      global: {
        provide: {
          [OPTIONS_KEY]: mockTheme
        }
      }
    })

    // simulate dismiss from primitive
    wrapper.findComponent({ name: 'Alert' }).vm.$emit('dismiss')

    expect(wrapper.emitted('dismiss')).toBeTruthy()
  })

  it('applies classes from theme + specs', () => {
    const wrapper = mount(Alert, {
      global: { provide: { [OPTIONS_KEY]: mockTheme } }
    })

    const el = wrapper.find('.l-alert')
    expect(el.classes()).toContain('bg-slate-500')
    expect(el.classes()).toContain('text-white')
  })
})