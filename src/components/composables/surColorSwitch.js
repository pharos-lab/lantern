export function useSurColorSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'text') {
        return 'text-slate-300';
      }
      if (mode == 'outlined') {
        return 'text-slate-300 border-2 border-slate-300';
      }

      if (mode == 'fill') {
        return 'bg-slate-600 text-white';
      }

      if (mode == 'light') {
        return 'bg-slate-50 text-slate-600';
      }
      break;
    case 'red':
      if (mode == 'text') {
        return 'text-red-300';
      }
      if (mode == 'outlined') {
        return 'text-red-300 border-2 border-red-300';
      }

      if (mode == 'fill') {
        return 'bg-red-300 text-white';
      }

      if (mode == 'light') {
        return 'bg-red-50 text-red-600';
      }
      break;
    case 'orange':
      if (mode == 'text') {
        return 'text-orange-300';
      }
      if (mode == 'outlined') {
        return 'text-orange-300 border-2 border-orange-300';
      }

      if (mode == 'fill') {
        return 'bg-orange-300 text-white';
      }

      if (mode == 'light') {
        return 'bg-orange-50 text-orange-600';
      }
      break;
    case 'yellow':
      if (mode == 'text') {
        return 'text-yellow-300';
      }
      if (mode == 'outlined') {
        return 'text-yellow-300 border-2 border-yellow-300';
      }

      if (mode == 'fill') {
        return 'bg-yellow-300 text-white';
      }

      if (mode == 'light') {
        return 'bg-yellow-50 text-yellow-600';
      }
      break;
    case 'green':
      if (mode == 'text') {
        return 'text-emerald-300';
      }
      if (mode == 'outlined') {
        return 'text-emerald-300 border-2 border-emerald-300';
      }

      if (mode == 'fill') {
        return 'bg-emerald-600 text-white';
      }

      if (mode == 'light') {
        return 'bg-emerald-200 text-emerald-600';
      }
      break;
    case 'blue':
      if (mode == 'text') {
        return 'text-sky-300';
      }
      if (mode == 'outlined') {
        return 'text-sky-300 border-2 border-sky-300';
      }

      if (mode == 'fill') {
        return 'bg-sky-300 text-white';
      }

      if (mode == 'light') {
        return 'bg-sky-50 text-sky-600';
      }
      break;
  }
}
