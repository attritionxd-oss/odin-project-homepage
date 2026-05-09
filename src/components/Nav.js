import "./nav.css";
import { NavIcon } from "/src/assets/NavIcon.js";

export const Nav = {
  isOpen: false,
  toggleMenu() {
    this.isOpen = !this.isOpen;
    const nav = document.querySelector(".header__nav");
    nav.style.display = this.isOpen ? "flex" : "none";
  },
  render: () => {
    return `
      <nav class="header__nav-wrapper">
        <ul class="header__nav">
          <li class="header__nav-link"><a href="#projects">Projects</a></li>
          <li class="header__nav-link"><a href="#contact">Contact</a></li>
        </ul>
        ${NavIcon.render()}
      </nav>
    `;
  },
  init() {
    const navIcon = document.querySelector(".nav-icon");
    navIcon.addEventListener("click", () => this.toggleMenu());

    const navLinks = document.querySelectorAll(".header__nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => this.toggleMenu());
    });
  },
};
