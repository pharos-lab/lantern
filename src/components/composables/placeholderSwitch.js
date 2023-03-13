export function usePlaceholderSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'light') {
        return 'placeholder:text-slate-500';
      }
      if (mode == 'fill') {
        return 'placeholder:text-slate-200';
      }
      if (mode == 'outlined') {
        return 'placeholder:text-slate-500';
      }
      break;
    case 'red':
      if (mode == 'light') {
        return 'placeholder:text-red-500';
      }
      if (mode == 'fill') {
        return 'placeholder:text-red-200';
      }
      if (mode == 'outlined') {
        return 'placeholder:text-red-500';
      }
      break;
    case 'orange':
      if (mode == 'light') {
        return 'placeholder:text-orange-500';
      }
      if (mode == 'fill') {
        return 'placeholder:text-orange-200';
      }
      if (mode == 'outlined') {
        return 'placeholder:text-orange-500';
      }
      break;
    case 'yellow':
      if (mode == 'light') {
        return 'placeholder:text-yellow-500';
      }
      if (mode == 'fill') {
        return 'placeholder:text-yellow-200';
      }
      if (mode == 'outlined') {
        return 'placeholder:text-yellow-500';
      }
      break;
    case 'green':
      if (mode == 'light') {
        return 'placeholder:text-green-500';
      }
      if (mode == 'fill') {
        return 'placeholder:text-green-200';
      }
      if (mode == 'outlined') {
        return 'placeholder:text-green-500';
      }
      break;
    case 'blue':
      if (mode == 'light') {
        return 'placeholder:text-sky-500';
      }
      if (mode == 'fill') {
        return 'placeholder:text-sky-200';
      }
      if (mode == 'outlined') {
        return 'placeholder:text-sky-500';
      }
      break;
  }
}
