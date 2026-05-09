import "./logo.css";
import LogoAsset from "/src/assets/logo.png?sizes[]=40";

export const Logo = {
  render: () => {
    return `
      <div class="header__logo-wrapper">
        <div class="header__logo">
          <img src="${LogoAsset.src}" />
        </div>
        <h1>Project: Homepage</h1>
      </div>
    `;
  },
};
