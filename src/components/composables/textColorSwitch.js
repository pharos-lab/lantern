export function useTextColorSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'light') {
        return 'text-slate-300';
      }
      if (mode == 'normal') {
        return 'text-slate-500';
      }
      if (mode == 'dark') {
        return 'text-slate-700';
      }
    case 'red':
      if (mode == 'light') {
        return 'text-red-300';
      }
      if (mode == 'normal') {
        return 'text-red-500';
      }
      if (mode == 'dark') {
        return 'text-red-700';
      }
    case 'orange':
      if (mode == 'light') {
        return 'text-orange-300';
      }
      if (mode == 'normal') {
        return 'text-orange-500';
      }
      if (mode == 'dark') {
        return 'text-orange-700';
      }
    case 'yellow':
      if (mode == 'light') {
        return 'text-yellow-300';
      }
      if (mode == 'normal') {
        return 'text-yellow-500';
      }
      if (mode == 'dark') {
        return 'text-yellow-700';
      }
    case 'green':
      if (mode == 'light') {
        return 'text-emerald-300';
      }
      if (mode == 'normal') {
        return 'text-emerald-500';
      }
      if (mode == 'dark') {
        return 'text-emerald-700';
      }
    case 'blue':
      if (mode == 'light') {
        return 'text-sky-300';
      }
      if (mode == 'normal') {
        return 'text-sky-500';
      }
      if (mode == 'dark') {
        return 'text-sky-700';
      }
  }
}
