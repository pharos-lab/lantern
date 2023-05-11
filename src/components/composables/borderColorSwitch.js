export function useBorderColorSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'outlined' || mode == 'text') {
        return 'border-slate-500';
      }

      if (mode == 'fill') {
        return 'border-slate-600';
      }

      if (mode == 'light') {
        return 'border-slate-300';
      }
      break;
    case 'red':
      if (mode == 'outlined' || mode == 'text') {
        return 'border-red-500';
      }

      if (mode == 'fill') {
        return 'border-red-600';
      }

      if (mode == 'light') {
        return 'border-red-300';
      }
      break;
    case 'orange':
      if (mode == 'outlined' || mode == 'text') {
        return 'border-orange-500';
      }

      if (mode == 'fill') {
        return 'border-orange-600';
      }

      if (mode == 'light') {
        return 'border-orange-300';
      }
      break;
    case 'yellow':
      if (mode == 'outlined' || mode == 'text') {
        return 'border-yellow-500';
      }

      if (mode == 'fill') {
        return 'border-yellow-600';
      }

      if (mode == 'light') {
        return 'border-yellow-300';
      }
      break;
    case 'green':
      if (mode == 'outlined' || mode == 'text') {
        return 'border-emerald-500';
      }

      if (mode == 'fill') {
        return 'border-emerald-600';
      }

      if (mode == 'light') {
        return 'border-emerald-300';
      }
      break;
    case 'blue':
      if (mode == 'outlined' || mode == 'text') {
        return 'border-sky-500';
      }

      if (mode == 'fill') {
        return 'border-sky-600';
      }

      if (mode == 'light') {
        return 'border-sky-300';
      }
      break;
  }
}
