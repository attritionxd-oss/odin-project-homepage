import "./main.css";
import { Section1 } from "/src/components/Section1.js";
import { Section2 } from "/src/components/Section2.js";
import { Section3 } from "/src/components/Section3.js";
export const Main = {
  render: () => {
    return `
      <main>
        ${Section1.render()}
        ${Section2.render()}
        ${Section3.render()}
      </main>
    `;
  },
};
