import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from '../../primitives/button/Button.vue';

function render(props = {}, slots = {}) {
    return mount(Button, { props, slots });
}

describe('ButtonPrimitive', () => {
    it('renders content', () => {
        const wrapper = render({}, { default: 'Click me' });

        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.text()).toBe('Click me');
    });

    it('is disabled when disabled=true', () => {
        const wrapper = render({ disabled: true });

        const button = wrapper.find('button');
        expect(button.attributes('disabled')).toBeDefined();
        expect(button.attributes('aria-disabled')).toBe('true');
    });

    it('is disabled and aria-busy when loading=true', () => {
        const wrapper = render({ loading: true });

        const button = wrapper.find('button');
        expect(button.attributes('disabled')).toBeDefined();
        expect(button.attributes('aria-busy')).toBe('true');
    });

    it('loading overrides disabled (still disabled)', () => {
        const wrapper = render({ disabled: true, loading: true });

        const button = wrapper.find('button');
        expect(button.attributes('disabled')).toBeDefined();
        expect(button.attributes('aria-busy')).toBe('true');
    });

    it('sets type attribute', () => {
        const wrapper = render({ type: 'submit' });

        expect(wrapper.find('button').attributes('type')).toBe('submit');
    });

    it('defaults to type="button"', () => {
        const wrapper = render();

        expect(wrapper.find('button').attributes('type')).toBe('button');
    });

    // // Facultatif si ton primitive rend une icône de chargement
    // it('shows loader when loading=true (if your component supports it)', () => {
    //     const wrapper = render({ loading: true }, { default: 'Hello' });

    //     // Exemple selon ton implémentation interne
    //     expect(wrapper.text()).not.toContain('Hello'); // slot caché

    //     // Vérifie la présence du loader si tu as un composant dédié
    //     expect(wrapper.find('[data-test="loader"]').exists()).toBe(true);
    // });
});