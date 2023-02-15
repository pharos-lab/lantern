export function usePositionSwitch(position) {
  switch (position) {
    case 'top':
      return 'flex flex-col';
    case 'bottom':
      return 'flex flex-col-reverse';
    case 'left':
      return 'flex flex-row';
    case 'right':
      return 'flex flex-row-reverse';
  }
}
