export function useSubColorSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'none') {
        return 'text-slate-300';
      }
      if (mode == 'outlined') {
        return 'text-slate-300 border-2 border-slate-300';
      }

      if (mode == 'fill') {
        return 'bg-slate-300 text-white';
      }

      if (mode == 'light') {
        return 'bg-slate-50 text-slate-600';
      }
    case 'red':
      if (mode == 'none') {
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
    case 'orange':
      if (mode == 'none') {
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
    case 'yellow':
      if (mode == 'none') {
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
    case 'green':
      if (mode == 'none') {
        return 'text-emerald-300';
      }
      if (mode == 'outlined') {
        return 'text-emerald-300 border-2 border-emerald-300';
      }

      if (mode == 'fill') {
        return 'bg-emerald-300 text-white';
      }

      if (mode == 'light') {
        return 'bg-emerald-50 text-emerald-600';
      }
    case 'blue':
      if (mode == 'none') {
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
  }
}
