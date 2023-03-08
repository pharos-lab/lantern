export function useCheckedSwitch(color, mode) {
  switch (color) {
    case 'gray':
      if (mode == 'outlined') {
        return 'shadow-slate-500';
      }

      if (mode == 'fill') {
        return `focus:outline-none focus:ring focus:ring-gray-300`;
      }

      if (mode == 'light') {
        return `focus:outline-none focus:ring focus:ring-gray-300`;
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
        return `focus:outline-none focus:ring focus:ring-red-300`;
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
        return `focus:outline-none focus:ring focus:ring-orange-300`;
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
        return `focus:outline-none focus:ring focus:ring-yellow-300`;
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
        return `focus:outline-none focus:ring focus:ring-emerald-300`;
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
        return `focus:outline-none focus:ring focus:ring-sky-300`;
      }
      break;
  }
}
