export function useSurColorSwitch(color, mode, hover) {
  switch (color) {
    case 'gray':
      if (mode == 'text') {
        return 'text-slate-600';
      }
      if (mode == 'outlined') {
        return 'text-slate-600 border-2 border-slate-600';
      }

      if (mode == 'fill') {
        return 'bg-slate-600 text-white' + (hover ? ' hover:bg-slate-700' : '');
      }

      if (mode == 'light') {
        return (
          'bg-slate-200 text-slate-600' + (hover ? ' hover:bg-slate-300' : '')
        );
      }
      break;
    case 'red':
      if (mode == 'text') {
        return 'text-red-600';
      }
      if (mode == 'outlined') {
        return 'text-red-600 border-2 border-red-600';
      }

      if (mode == 'fill') {
        return 'bg-red-600 text-white' + (hover ? ' hover:bg-red-700' : '');
      }

      if (mode == 'light') {
        return 'bg-red-200 text-red-600' + (hover ? ' hover:bg-red-300' : '');
      }
      break;
    case 'orange':
      if (mode == 'text') {
        return 'text-orange-600';
      }
      if (mode == 'outlined') {
        return 'text-orange-600 border-2 border-orange-600';
      }

      if (mode == 'fill') {
        return (
          'bg-orange-600 text-white' + (hover ? ' hover:bg-orange-700' : '')
        );
      }

      if (mode == 'light') {
        return (
          'bg-orange-200 text-orange-600' +
          (hover ? ' hover:bg-orange-300' : '')
        );
      }
      break;
    case 'yellow':
      if (mode == 'text') {
        return 'text-yellow-600';
      }
      if (mode == 'outlined') {
        return 'text-yellow-600 border-2 border-yellow-600';
      }

      if (mode == 'fill') {
        return (
          'bg-yellow-600 text-white' + (hover ? ' hover:bg-yellow-300' : '')
        );
      }

      if (mode == 'light') {
        return (
          'bg-yellow-200 text-yellow-600' +
          (hover ? ' hover:bg-yellow-700' : '')
        );
      }
      break;
    case 'green':
      if (mode == 'text') {
        return 'text-emerald-600';
      }
      if (mode == 'outlined') {
        return 'text-emerald-600 border-2 border-emerald-600';
      }

      if (mode == 'fill') {
        return (
          'bg-emerald-600 text-white' + (hover ? ' hover:bg-emerald-300' : '')
        );
      }

      if (mode == 'light') {
        return (
          'bg-emerald-200 text-emerald-600' +
          (hover ? ' hover:bg-emerald-300' : '')
        );
      }
      break;
    case 'blue':
      if (mode == 'text') {
        return 'text-sky-600';
      }
      if (mode == 'outlined') {
        return 'text-sky-600 border-2 border-sky-600';
      }

      if (mode == 'fill') {
        return 'bg-sky-600 text-white' + (hover ? ' hover:bg-sky-700' : '');
      }

      if (mode == 'light') {
        return 'bg-sky-200 text-sky-600' + (hover ? ' hover:bg-sky-300' : '');
      }
      break;
  }
}
