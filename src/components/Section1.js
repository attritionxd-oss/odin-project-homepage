import "./section-1.css";
import PortraitAsset from "/src/assets/pexels-jimmyelizarraras-30999121.jpg?sizes[]=300,sizes[]=400";

const portraitAttribution = "Photo by Jimmy Elizarraras from Pexels";
const portraitAttributionLink =
  "https://www.pexels.com/photo/silhouette-of-woman-against-a-purple-backdrop-30999121/";

export const Section1 = {
  render: () => {
    return `
      <section class="section-1">
        <div class="section-1__portrait-wrapper">
          <img
            class="section-1__portrait"
            src="${PortraitAsset.src}"
            srcset="${PortraitAsset.srcSet}"
            sizes="(max-width: 1000px) 300px, 400px"
            alt="${portraitAttribution}"
          />
          <p><a href="${portraitAttributionLink}">${portraitAttribution}</a></p>
        </div>
        <div class="section-1__developer-details">
          <h2>Developer name</h2>
          <h3>Fullstack developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem nulla maiores temporibus qui amet rerum tenetur est culpa cupiditate ipsa, labore quibusdam quas hic mollitia minus placeat nisi. Dolor!<p>
          <a class="button-link" aria-label="Link to full resume unavailable" title="Link to full resume unavailable">Full resume</a>
        </div>
      </section>
    `;
  },
};
