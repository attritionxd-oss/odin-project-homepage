import "./section-3.css";
import LogoAsset from "/src/assets/logo.png?sizes[]=40";

const contactInfoEmail = "developer@email.com";
const contactInfoTel = "+1234567890";
const contactInfoTelFormatted = "(123) 456-7890";

const email = `<a href="mailto:${contactInfoEmail}">${contactInfoEmail}</a>`;
const tel = `<a href="tel:${contactInfoTel}">${contactInfoTelFormatted}</a>`;

export const Section3 = {
  render: () => {
    return `
      <section class="section-3" id="contact">
        <ul class="section-3__contact-wrapper">
          <li class="section-3__contact-info">
            <p class="section-3__email">${email}</p>
            <p class="section-3__tel">${tel}</p>
          </li>
          <li class="section-3__logo"><a href=""><img 
            class="section-3__logo"
            src="${LogoAsset.src}"
          /></a></li>
          <li class="section-3__socials-wrapper">
            <ul class="section-3__socials">
              <li><a>T</a></li>
              <li><a>L</a></li>
              <li><a>G</a></li>
            </ul>
          </li>
        </ul>
      </section>
    `;
  },
};
