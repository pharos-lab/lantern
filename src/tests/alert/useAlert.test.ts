import { useAlert } from '../../composables/useAlert'
import { describe, it, expect } from 'vitest'

describe('useAlert', () => {
  it('is visible by default', () => {
    const { isVisible } = useAlert()
    expect(isVisible.value).toBe(true)
  })

  it('dismiss() hides the alert', () => {
    const { isVisible, dismiss } = useAlert()

    dismiss()

    expect(isVisible.value).toBe(false)
  })
})