export function useHoverSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'outlined') {
        return 'hover:bg-slate-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-slate-600';
      }

      if (mode == 'light') {
        return 'hover:bg-slate-200 text-slate-700';
      }
    case 'red':
      if (mode == 'outlined') {
        return 'hover:bg-red-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-red-600';
      }

      if (mode == 'light') {
        return 'hover:bg-red-200 text-red-700';
      }
    case 'orange':
      if (mode == 'outlined') {
        return 'hover:bg-orange-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-orange-600';
      }

      if (mode == 'light') {
        return 'hover:bg-orange-200 text-orange-700';
      }
    case 'yellow':
      if (mode == 'outlined') {
        return 'hover:bg-yellow-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-yellow-600';
      }

      if (mode == 'light') {
        return 'hover:bg-yellow-200 text-yellow-700';
      }
    case 'green':
      if (mode == 'outlined') {
        return 'hover:bg-emerald-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-emerald-600';
      }

      if (mode == 'light') {
        return 'hover:bg-emerald-200 text-emerald-700';
      }
    case 'blue':
      if (mode == 'outlined') {
        return 'hover:bg-sky-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-sky-600';
      }

      if (mode == 'light') {
        return 'hover:bg-sky-200 text-sky-700';
      }
  }
}
