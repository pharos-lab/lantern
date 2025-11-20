import { mount } from '@vue/test-utils'
import { vi, beforeEach, describe, it, expect } from 'vitest'
import Button from '../../components/button/Button.vue'
import { inject } from 'vue'

// Mock du theme
const mockTheme = {
  colors: {
    default: {
      filled: {
        background: 'default-filled-bg',
        foreground: 'default-filled-fg',
        hover: 'default-filled-hover',
        border: 'default-filled-border',
        focus: 'default-filled-focus',
      },
    },
    primary: {
      filled: {
        background: 'primary-filled-bg',
        foreground: 'primary-filled-fg',
        hover: 'primary-filled-hover',
        border: 'primary-filled-border',
        focus: 'primary-filled-focus',
      },
    },
  },
  size: {
    small: 'size-small',
    medium: 'size-medium',
    large: 'size-large',
  },
  radius: {
    small: 'radius-sm',
    medium: 'radius-md',
    large: 'radius-lg',
  },
  loading: {
    true: 'loading-class',
  },
}

// Mock du module buttonSpecs
vi.mock('../../components/button/buttonSpecs', () => ({
  buttonSpecs: {
    apply: ['hover', 'focus', 'loading'],
    class: 'spec-class',
    defaultProps: {
      color: 'primary',
      variant: 'filled',
      size: 'small',
      radius: 'small',
    },
    override: {
      colors: {
        default: { filled: { background: 'override-default-bg' } },
        primary: { filled: { background: 'override-primary-bg' } },
      },
      size: { large: 'override-size-large' },
      loading: { true: 'override-loading-class' },
    },
  },
}))

// Mock inject pour retourner options
vi.mock('vue', async () => {
  const actual = await vi.importActual('vue')
  return {
    ...actual,
    inject: vi.fn(),
  }
})

describe('Button (styled + spec)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // inject retourne options contenant le theme
    ;(inject as any).mockReturnValue({ theme: mockTheme })
  })

  it('renders base spec class', () => {
    const wrapper = mount(Button)
    expect(wrapper.find('button').classes()).toContain('spec-class')
  })

  it('applies theme + override classes', () => {
    const wrapper = mount(Button, { props: { color: 'primary', variant: 'filled' } })
    const btn = wrapper.find('button')
    expect(btn.classes()).toContain('override-primary-bg') // override
    expect(btn.classes()).toContain('primary-filled-fg') // fallback theme
  })

  it('disables when disabled=true', () => {
    const wrapper = mount(Button, { props: { disabled: true } })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })

  it('adds loading classes when loading=true', () => {
    const wrapper = mount(Button, { props: { loading: true } })
    const btn = wrapper.find('button')
    expect(btn.attributes('disabled')).toBeDefined()
    expect(btn.attributes('aria-busy')).toBe('true')
    expect(btn.classes()).toContain('override-loading-class')
  })

  it('merges custom classes', () => {
    const wrapper = mount(Button, { props: { class: 'my-custom-class' } })
    expect(wrapper.find('button').classes()).toContain('my-custom-class')
  })

  it('sets type correctly', () => {
    const wrapper = mount(Button, { props: { type: 'submit' } })
    expect(wrapper.find('button').attributes('type')).toBe('submit')
  })
})