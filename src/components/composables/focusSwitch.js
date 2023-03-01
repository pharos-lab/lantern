export function useFocusSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring-1 focus:ring-slate-600 focus:border-slate-600';
      }

      if (mode == 'fill') {
        return 'focus:outline-none focus:ring focus:ring-slate-300 focus:border-slate-300';
      }

      if (mode == 'light') {
        return 'focus:outline-none focus:ring focus:ring-slate-300 focus:border-slate-300';
      }
      break;
    case 'red':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600';
      }

      if (mode == 'fill') {
        return 'focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300';
      }

      if (mode == 'light') {
        return 'focus:outline-none focus:ring focus:ring-red-300 focus:border-red-300';
      }
      break;
    case 'orange':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring-1 focus:ring-orange-600 focus:border-orange-600';
      }

      if (mode == 'fill') {
        return 'focus:outline-none focus:ring focus:ring-orange-300 focus:border-orange-300';
      }

      if (mode == 'light') {
        return 'focus:outline-none focus:ring focus:ring-orange-300 focus:border-orange-300';
      }
      break;
    case 'yellow':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring-1 focus:ring-yellow-600 focus:border-yellow-600';
      }

      if (mode == 'fill') {
        return 'focus:outline-none focus:ring focus:ring-yellow-300 focus:border-yellow-300';
      }

      if (mode == 'light') {
        return 'focus:outline-none focus:ring focus:ring-yellow-300 focus:border-yellow-300';
      }
      break;
    case 'green':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring-1 focus:ring-emerald-600 focus:border-emerald-600';
      }

      if (mode == 'fill') {
        return 'focus:outline-none focus:ring focus:ring-emerald-300 focus:border-emerald-300';
      }

      if (mode == 'light') {
        return 'focus:outline-none focus:ring focus:ring-emerald-300 focus:border-emerald-300';
      }
      break;
    case 'blue':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring-1 focus:ring-sky-600 focus:border-sky-600';
      }

      if (mode == 'fill') {
        return 'focus:outline-none focus:ring focus:ring-sky-300 focus:border-sky-300';
      }

      if (mode == 'light') {
        return 'focus:outline-none focus:ring focus:ring-sky-300 focus:border-sky-300';
      }
      break;
  }
}
