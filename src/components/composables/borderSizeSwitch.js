export function useBorderSizeSwitch(border) {
  console.log(border);
  if (border == undefined) {
    return;
  }
  return border == '' ? 'border' : border;
}
