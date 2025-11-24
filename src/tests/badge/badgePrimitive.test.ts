// src/tests/badge/badgePrimitive.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Badge from '../../primitives/badge/Badge.vue'

describe('BadgePrimitive', () => {
    it('renders content', () => {
        const wrapper = mount(Badge, { slots: { default: 'New' } })
        expect(wrapper.text()).toBe('New')
    })

    it('accepts role and aria-label', () => {
        const wrapper = mount(Badge, { props: { role: 'status', ariaLabel: 'New badge' } })
        const el = wrapper.find('span')
        expect(el.attributes('role')).toBe('status')
        expect(el.attributes('aria-label')).toBe('New badge')
    })
})
