export function useRoundedSwitch(rounded) {
  switch (rounded) {
    case 'none':
      return 'rounded-none';
    case 'normal':
      return 'rounded';
    case 'md':
      return 'rounded-md';
    case 'lg':
      return 'rounded-lg';
    default:
      return 'rounded';
  }
}
