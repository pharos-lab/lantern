export function useRoundedSwitch(rounded) {
  switch (rounded) {
    case 'none':
      return 'rounded-none';
      break;
    case 'normal':
      return 'rounded';
      break;
    case 'medium':
      return 'rounded-md';
      break;
    case 'large':
      return 'rounded-lg';
      break;
    default:
      return 'rounded';
      break;
  }
}
