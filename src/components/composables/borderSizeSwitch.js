export function useBorderSizeSwitch(border) {
  if (border == undefined) {
    return;
  }
  return border == '' ? 'border' : border;
}
