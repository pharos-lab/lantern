export function useTextColorSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'none') {
        return 'text-slate-500';
      }
      if (mode == 'outlined') {
        return 'text-slate-500 border-2 border-slate-500';
      }

      if (mode == 'fill') {
        return 'bg-slate-500 text-white';
      }

      if (mode == 'light') {
        return 'bg-slate-200 text-slate-600';
      }
    case 'red':
      if (mode == 'none') {
        return 'text-red-500';
      }
      if (mode == 'outlined') {
        return 'text-red-500 border-2 border-red-500';
      }

      if (mode == 'fill') {
        return 'bg-red-500 text-white';
      }

      if (mode == 'light') {
        return 'bg-red-200 text-red-600';
      }
    case 'orange':
      if (mode == 'none') {
        return 'text-orange-500';
      }
      if (mode == 'outlined') {
        return 'text-orange-500 border-2 border-orange-500';
      }

      if (mode == 'fill') {
        return 'bg-orange-500 text-white';
      }

      if (mode == 'light') {
        return 'bg-orange-200 text-orange-600';
      }
    case 'yellow':
      if (mode == 'none') {
        return 'text-yellow-500';
      }
      if (mode == 'outlined') {
        return 'text-yellow-500 border-2 border-yellow-500';
      }

      if (mode == 'fill') {
        return 'bg-yellow-500 text-white';
      }

      if (mode == 'light') {
        return 'bg-yellow-200 text-yellow-600';
      }
    case 'green':
      if (mode == 'none') {
        return 'text-emerald-500';
      }
      if (mode == 'outlined') {
        return 'text-emerald-500 border-2 border-emerald-500';
      }

      if (mode == 'fill') {
        return 'bg-emerald-500 text-white';
      }

      if (mode == 'light') {
        return 'bg-emerald-200 text-emerald-600';
      }
    case 'blue':
      if (mode == 'none') {
        return 'text-sky-500';
      }
      if (mode == 'outlined') {
        return 'text-sky-500 border-2 border-sky-500';
      }

      if (mode == 'fill') {
        return 'bg-sky-500 text-white';
      }

      if (mode == 'light') {
        return 'bg-sky-200 text-sky-600';
      }
  }
}
