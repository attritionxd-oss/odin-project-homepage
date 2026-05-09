import "./nav-icon.css";

/* NavIcon source
  http://www.w3.org/2000/svg
  https://pictogrammers.com/library/mdi/icon/menu/
*/

export const NavIcon = {
  render: () => {
    return `
      <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>Navigation menu</title>
        <desc>Click this icon to open the navigation menu</desc>
        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    `;
  },
};
