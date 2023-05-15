export function useDivideSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'none') {
        return 'divide-slate-500';
      }
      if (mode == 'outlined') {
        return 'divide-slate-500';
      }

      if (mode == 'fill') {
        return 'divide-slate-600';
      }

      if (mode == 'light') {
        return 'divide-slate-200';
      }
      break;
    case 'red':
      if (mode == 'none') {
        return 'divide-red-500';
      }
      if (mode == 'outlined') {
        return 'divide-red-500';
      }

      if (mode == 'fill') {
        return 'divide-red-600';
      }

      if (mode == 'light') {
        return 'divide-red-200';
      }
      break;
    case 'orange':
      if (mode == 'none') {
        return 'divide-orange-500';
      }
      if (mode == 'outlined') {
        return 'divide-orange-500';
      }

      if (mode == 'fill') {
        return 'divide-orange-600';
      }

      if (mode == 'light') {
        return 'divide-orange-200';
      }
      break;
    case 'yellow':
      if (mode == 'none') {
        return 'divide-yellow-500';
      }
      if (mode == 'outlined') {
        return 'divide-yellow-500';
      }

      if (mode == 'fill') {
        return 'divide-yellow-600';
      }

      if (mode == 'light') {
        return 'divide-yellow-200';
      }
      break;
    case 'green':
      if (mode == 'none') {
        return 'divide-emerald-500';
      }
      if (mode == 'outlined') {
        return 'divide-emerald-500';
      }

      if (mode == 'fill') {
        return 'divide-emerald-600';
      }

      if (mode == 'light') {
        return 'divide-emerald-200';
      }
      break;
    case 'blue':
      if (mode == 'none') {
        return 'divide-sky-500';
      }
      if (mode == 'outlined') {
        return 'divide-sky-500';
      }

      if (mode == 'fill') {
        return 'divide-sky-600';
      }

      if (mode == 'light') {
        return 'divide-sky-200';
      }
      break;
    case 'white':
      return 'divide-white';
  }
}
