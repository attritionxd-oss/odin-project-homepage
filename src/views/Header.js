import "./header.css";
import { Logo } from "/src/components/Logo.js";
import { Nav } from "/src/components/Nav.js";

export const Header = {
  render: () => {
    return `
      <header>
        ${Logo.render()}
        ${Nav.render()}
      </header>
    `;
  },
};
