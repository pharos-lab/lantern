import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Alert from '../../primitives/alert/Alert.vue'
import { ALERT_KEY } from '../../utils/keys'
import { h, inject } from 'vue'

describe('AlertPrimitive', () => {
  it('is visible by default', () => {
    const wrapper = mount(Alert, { slots: { default: 'Hello' } })
    expect(wrapper.isVisible()).toBe(true)
  })

  it('dismiss() hides the alert and emits dismiss', async () => {
    const wrapper = mount(Alert, { slots: { default: 'Hello' } })
    const exposed = wrapper.vm as any

    exposed.dismiss()
    await wrapper.vm.$nextTick()

    expect(wrapper.isVisible()).toBe(false)
    expect(wrapper.emitted('dismiss')).toBeTruthy()
  })

  it('auto-dismiss triggers after duration', async () => {
    vi.useFakeTimers()

    const wrapper = mount(Alert, { props: { duration: 1000 } })

    vi.advanceTimersByTime(1000)

    await wrapper.vm.$nextTick()

    expect(wrapper.isVisible()).toBe(false)

    vi.useRealTimers()
  })

  it('provides context with isVisible + dismiss', () => {
    let injected: any

    const Consumer = {
      template: `<div />`,
      setup() {
        injected = inject(ALERT_KEY)
      }
    }

    mount(Alert, {
      slots: { default: () => h(Consumer) }
    })

    expect(injected).toBeDefined()
    expect(injected.isVisible.value).toBe(true)
    expect(typeof injected.dismiss).toBe('function')
  })
})