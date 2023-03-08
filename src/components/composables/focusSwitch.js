export function useFocusSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring focus:ring-gray-300';
      }

      if (mode == 'fill') {
        return `focus:outline-none focus:ring focus:ring-gray-300`;
      }

      if (mode == 'light') {
        return `focus:outline-none focus:ring focus:ring-gray-300 focus:border-slate-400`;
      }
      break;
    case 'red':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring focus:ring-red-300';
      }

      if (mode == 'fill') {
        return `focus:outline-none focus:ring focus:ring-red-300`;
      }

      if (mode == 'light') {
        return `focus:outline-none focus:ring focus:ring-red-300  focus:border-red-400`;
      }
      break;
    case 'orange':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring focus:ring-orange-300';
      }

      if (mode == 'fill') {
        return `focus:outline-none focus:ring focus:ring-orange-300`;
      }

      if (mode == 'light') {
        return `focus:outline-none focus:ring focus:ring-orange-300  focus:border-orange-400`;
      }
      break;
    case 'yellow':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring focus:ring-yellow-300';
      }

      if (mode == 'fill') {
        return `focus:outline-none focus:ring focus:ring-yellow-300`;
      }

      if (mode == 'light') {
        return `focus:outline-none focus:ring focus:ring-yellow-300  focus:border-yellow-400`;
      }
      break;

    case 'green':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring focus:ring-emerald-300';
      }

      if (mode == 'fill') {
        return `focus:outline-none focus:ring focus:ring-emerald-300`;
      }

      if (mode == 'light') {
        return `focus:outline-none focus:ring focus:ring-emerald-300  focus:border-emerald-400`;
      }
      break;
    case 'blue':
      if (mode == 'outlined') {
        return 'focus:outline-none focus:ring focus:ring-sky-300';
      }

      if (mode == 'fill') {
        return `focus:outline-none focus:ring focus:ring-sky-300`;
      }

      if (mode == 'light') {
        return `focus:outline-none focus:ring focus:ring-sky-300  focus:border-sky-400`;
      }
      break;
  }
}
