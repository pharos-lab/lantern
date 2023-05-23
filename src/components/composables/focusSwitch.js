export function useFocusSwitch(color, mode) {
  switch (color) {
    case 'gray':
      return `focus:outline-none focus:ring focus:ring-gray-300`;

    case 'red':
      return `focus:outline-none focus:ring focus:ring-red-300`;

    case 'orange':
      return `focus:outline-none focus:ring focus:ring-orange-300`;

    case 'yellow':
      return `focus:outline-none focus:ring focus:ring-yellow-300`;

    case 'green':
      return `focus:outline-none focus:ring focus:ring-emerald-300`;

    case 'blue':
      return `focus:outline-none focus:ring focus:ring-sky-300`;
  }
}
