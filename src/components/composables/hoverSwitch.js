export function useHoverSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'outlined') {
        return 'hover:bg-slate-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-slate-600 hover:text-white';
      }

      if (mode == 'light' || mode == 'text' || mode == 'underlined') {
        return 'hover:bg-slate-200 hover:text-slate-700';
      }
      break;
    case 'red':
      if (mode == 'outlined') {
        return 'hover:bg-red-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-red-600';
      }

      if (mode == 'light' || mode == 'text' || mode == 'underlined') {
        return 'hover:bg-red-200 hover:text-red-600';
      }
      break;
    case 'orange':
      if (mode == 'outlined') {
        return 'hover:bg-orange-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-orange-600 hover:text-white';
      }

      if (mode == 'light' || mode == 'text' || mode == 'underlined') {
        return 'hover:bg-orange-200 hover:text-orange-700';
      }
      break;
    case 'yellow':
      if (mode == 'outlined') {
        return 'hover:bg-yellow-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-yellow-600 hover:text-white';
      }

      if (mode == 'light' || mode == 'text' || mode == 'underlined') {
        return 'hover:bg-yellow-200 hover:text-yellow-700';
      }
      break;
    case 'green':
      if (mode == 'outlined') {
        return 'hover:bg-emerald-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-emerald-600 hover:text-white';
      }

      if (mode == 'light' || mode == 'text' || mode == 'underlined') {
        return 'hover:bg-emerald-200 hover:text-emerald-700';
      }
      break;
    case 'blue':
      if (mode == 'outlined') {
        return 'hover:bg-sky-500 hover:text-white';
      }

      if (mode == 'fill') {
        return 'hover:bg-sky-600 hover:text-white';
      }

      if (mode == 'light' || mode == 'text' || mode == 'underlined') {
        return 'hover:bg-sky-200 hover:text-sky-700';
      }
      break;
  }
}
