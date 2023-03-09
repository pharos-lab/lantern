export function useCheckedSwitch(color, mode, hover = false) {
  switch (color) {
    case 'gray':
      if (mode == 'outlined') {
        return (
          (hover ? 'hover:bg-slate-200 ' : '') +
          ' checked:bg-slate-500 checked:hover:bg-slate-500'
        );
      }

      if (mode == 'fill') {
        return (
          (hover ? 'hover:bg-slate-600 ' : '') +
          ' bg-slate-500 checked:bg-slate-700 checked:hover:bg-slate-700'
        );
      }

      if (mode == 'light') {
        return (
          (hover ? 'hover:bg-slate-300 ' : '') +
          ' bg-slate-200 checked:bg-slate-500 checked:hover:bg-slate-500'
        );
      }
      break;
    case 'red':
      if (mode == 'outlined') {
        return (
          (hover ? 'hover:bg-red-200 ' : '') +
          ' checked:bg-red-500 checked:hover:bg-red-500'
        );
      }

      if (mode == 'fill') {
        return (
          (hover ? 'hover:bg-red-600 ' : '') +
          ' bg-red-500 checked:bg-red-700 checked:hover:bg-red-700'
        );
      }

      if (mode == 'light') {
        return (
          (hover ? 'hover:bg-red-300 ' : '') +
          ' bg-red-200 checked:bg-red-500 checked:hover:bg-red-500'
        );
      }
      break;
    case 'orange':
      if (mode == 'outlined') {
        return (
          (hover ? 'hover:bg-orange-200 ' : '') +
          ' checked:bg-orange-500 checked:hover:bg-orange-500'
        );
      }

      if (mode == 'fill') {
        return (
          (hover ? 'hover:bg-orange-600 ' : '') +
          ' bg-orange-500 checked:bg-orange-700 checked:hover:bg-orange-700'
        );
      }

      if (mode == 'light') {
        return (
          (hover ? 'hover:bg-orange-300 ' : '') +
          ' bg-orange-200 checked:bg-orange-500 checked:hover:bg-orange-500'
        );
      }
      break;
    case 'yellow':
      if (mode == 'outlined') {
        return (
          (hover ? 'hover:bg-yellow-200 ' : '') +
          ' checked:bg-yellow-500 checked:hover:bg-yellow-500'
        );
      }

      if (mode == 'fill') {
        return (
          (hover ? 'hover:bg-yellow-600 ' : '') +
          ' bg-yellow-500 checked:bg-yellow-700 checked:hover:bg-yellow-700'
        );
      }

      if (mode == 'light') {
        return (
          (hover ? 'hover:bg-yellow-300 ' : '') +
          ' bg-yellow-200 checked:bg-yellow-500 checked:hover:bg-yellow-500'
        );
      }
      break;

    case 'green':
      if (mode == 'outlined') {
        return (
          (hover ? 'hover:bg-emerald-200 ' : '') +
          ' checked:bg-emerald-500 checked:hover:bg-emerald-500'
        );
      }

      if (mode == 'fill') {
        return (
          (hover ? 'hover:bg-emerald-600 ' : '') +
          ' bg-emerald-500 checked:bg-emerald-700 checked:hover:bg-emerald-700'
        );
      }

      if (mode == 'light') {
        return (
          (hover ? 'hover:bg-emerald-300 ' : '') +
          ' bg-emerald-200 checked:bg-emerald-500 checked:hover:bg-emerald-500'
        );
      }
      break;
    case 'blue':
      if (mode == 'outlined') {
        return (
          (hover ? 'hover:bg-sky-200 ' : '') +
          ' checked:bg-sky-500 checked:hover:bg-sky-500'
        );
      }

      if (mode == 'fill') {
        return (
          (hover ? 'hover:bg-sky-600 ' : '') +
          ' bg-sky-500 checked:bg-sky-700 checked:hover:bg-sky-700'
        );
      }

      if (mode == 'light') {
        return (
          (hover ? 'hover:bg-sky-300 ' : '') +
          ' bg-sky-200 checked:bg-sky-500 checked:hover:bg-sky-500'
        );
      }
      break;
  }
}
