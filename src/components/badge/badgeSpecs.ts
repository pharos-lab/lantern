// src/components/badge/badgeSpecs.ts
import type { ComponentSpec } from '../../types';

export const badgeSpecs: ComponentSpec = {
  name: 'Badge',
  apply: ['hover', 'border'], // ajoute hover si besoin
  class: 'l-badge inline-flex items-center justify-center font-medium',
  defaultProps: {
    color: 'slate',
    variant: 'light',
    size: 'small',
    radius: 'medium'
  }
};
