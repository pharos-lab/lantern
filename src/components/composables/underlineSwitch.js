export function useUnderlineSwitch(color) {
  switch (color) {
    case 'gray':
      return 'decoration-slate-600';
    case 'red':
      return 'decoration-red-500';
    case 'orange':
      return 'decoration-orange-600';
    case 'yellow':
      return 'decoration-yellow-600';
    case 'green':
      return 'decoration-emerald-600';
    case 'blue':
      return 'decoration-sky-600';
  }
}
