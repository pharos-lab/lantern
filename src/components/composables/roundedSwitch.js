export function useRoundedSwitch(rounded, mode) {
  switch (rounded) {
    case 'none':
      return 'rounded-none';
    case 'normal':
      if (mode == 'underlined') {
        return 'rounded-t';
      }
      return 'rounded';
    case 'md':
      return 'rounded-md';
    case 'lg':
      return 'rounded-lg';
    case 'xl':
      return 'rounded-xl';
    case 'pill':
      return 'rounded-full';
    case '':
      return 'rounded';
  }
}
