import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Card from '../../primitives/card/Card.vue'

describe('CardPrimitive', () => {
  it('renders content via slot', () => {
    const wrapper = mount(Card, { slots: { default: 'Hello Card' } })
    expect(wrapper.text()).toBe('Hello Card')
  })

  it('renders as a div', () => {
    const wrapper = mount(Card)
    expect(wrapper.element.tagName).toBe('DIV')
  })
})
