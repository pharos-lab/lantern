export function useBorderSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'outlined') {
        return 'border border-slate-500';
      }

      if (mode == 'fill') {
        return 'border border-slate-600';
      }

      if (mode == 'light') {
        return 'border border-slate-300';
      }
      break;
    case 'red':
      if (mode == 'outlined') {
        return 'border border-red-500';
      }

      if (mode == 'fill') {
        return 'border border-red-600';
      }

      if (mode == 'light') {
        return 'border border-red-300';
      }
      break;
    case 'orange':
      if (mode == 'outlined') {
        return 'border border-orange-500';
      }

      if (mode == 'fill') {
        return 'border border-orange-600';
      }

      if (mode == 'light') {
        return 'border border-orange-300';
      }
      break;
    case 'yellow':
      if (mode == 'outlined') {
        return 'border border-yellow-500';
      }

      if (mode == 'fill') {
        return 'border border-yellow-600';
      }

      if (mode == 'light') {
        return 'border border-yellow-300';
      }
      break;
    case 'green':
      if (mode == 'outlined') {
        return 'border border-emerald-500';
      }

      if (mode == 'fill') {
        return 'border border-emerald-600';
      }

      if (mode == 'light') {
        return 'border border-emerald-300';
      }
      break;
    case 'blue':
      if (mode == 'outlined') {
        return 'border border-sky-500';
      }

      if (mode == 'fill') {
        return 'border border-sky-600';
      }

      if (mode == 'light') {
        return 'border border-sky-300';
      }
      break;
  }
}
