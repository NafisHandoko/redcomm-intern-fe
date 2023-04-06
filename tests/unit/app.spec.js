import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../pages/index.vue'

describe('Testing main page', () => {
  it('is rendered', () => {
    const wrapper = mount(App)
    expect(wrapper.vm).toBeTruthy()
  })
})