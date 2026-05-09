import "./home-page.css";
import { Header } from "/src/views/Header.js";
import { Main } from "/src/views/Main.js";
import { Footer } from "/src/components/Footer.js";
import { VerticalNav } from "/src/components/VerticalNav.js";

export const HomePage = {
  render: () => {
    return `
      <div id="root">
        ${Header.render()}
        ${Main.render()}
        ${Footer.render()}
      </div>
    `;
  },
};
