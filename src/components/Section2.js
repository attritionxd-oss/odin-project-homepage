import "./section-2.css";
import { GitHubIcon } from "/src/assets/GitHubIcon.js";
import ProjectScreenshot1 from "/src/assets/project-screenshot-1.png?sizes[]=300,sizes[]=400";
import ProjectScreenshot2 from "/src/assets/project-screenshot-2.png?sizes[]=300,sizes[]=400";
import ProjectScreenshot3 from "/src/assets/project-screenshot-3.png?sizes[]=300,sizes[]=400";
import ProjectScreenshot4 from "/src/assets/project-screenshot-4.png?sizes[]=300,sizes[]=400";
import ProjectScreenshot5 from "/src/assets/project-screenshot-5.png?sizes[]=300,sizes[]=400";
import ProjectScreenshot6 from "/src/assets/project-screenshot-6.png?sizes[]=300,sizes[]=400";

export const Section2 = {
  render: () => {
    return `
      <section class="section-2" id="projects">
        <div class="section-2__container">
          <h2>Previous projects</h2>
          <div class="projects-wrapper">
            <article class="project-1">
              <img
                class="section-2__project-image"
                alt="project-1-img"
                sizes="(max-width: 400) 300px, 400px"
                src="${ProjectScreenshot1.src}"
                srcset="${ProjectScreenshot1.srcSet}"
              />
              <div class="section-2__project-description">
                <div class="section-2__project-description-header">
                  <h3>Project 1</h3>
                  ${GitHubIcon.render()}
                </div>
                <p>
                  Short description of the project. Just a couple of sentences will do.
                </p>
              </div>
            </article>
            <article class="project-2">
              <img
                class="section-2__project-image"
                alt="project-2-img"
                sizes="(max-width: 400) 300px, 400px"
                src="${ProjectScreenshot2.src}"
                srcset="${ProjectScreenshot2.srcSet}"
              />
              <div class="section-2__project-description">
                <div class="section-2__project-description-header">
                  <h3>Project 2</h3>
                  ${GitHubIcon.render()}
                </div>
                <p>
                  Short description of the project. Just a couple of sentences will do.
                </p>
              </div>
            </article>
            <article class="project-3">
              <img
                class="section-2__project-image"
                alt="project-3-img"
                sizes="(max-width: 400) 300px, 400px"
                src="${ProjectScreenshot3.src}"
                srcset="${ProjectScreenshot3.srcSet}"
              />
              <div class="section-2__project-description">
                <div class="section-2__project-description-header">
                  <h3>Project 3</h3>
                  ${GitHubIcon.render()}
                </div>
                <p>
                  Short description of the project. Just a couple of sentences will do.
                </p>
              </div>
            </article>
            <article class="project-4">
              <img
                class="section-2__project-image"
                alt="project-4-img"
                sizes="(max-width: 400) 300px, 400px"
                src="${ProjectScreenshot4.src}"
                srcset="${ProjectScreenshot4.srcSet}"
              />
              <div class="section-2__project-description">
                <div class="section-2__project-description-header">
                  <h3>Project 4</h3>
                  ${GitHubIcon.render()}
                </div>
                <p>
                  Short description of the project. Just a couple of sentences will do.
                </p>
              </div>
            </article>
            <article class="project-5">
              <img
                class="section-2__project-image"
                alt="project-5-img"
                sizes="(max-width: 400) 300px, 400px"
                src="${ProjectScreenshot5.src}"
                srcset="${ProjectScreenshot5.srcSet}"
              />
              <div class="section-2__project-description">
                <div class="section-2__project-description-header">
                  <h3>Project 5</h3>
                  ${GitHubIcon.render()}
                </div>
                <p>
                  Short description of the project. Just a couple of sentences will do.
                </p>
              </div>
            </article>
            <article class="project-6">
              <img
                class="section-2__project-image"
                alt="project-6-img"
                sizes="(max-width: 400) 300px, 400px"
                src="${ProjectScreenshot6.src}"
                srcset="${ProjectScreenshot6.srcSet}"
              />
              <div class="section-2__project-description">
                <div class="section-2__project-description-header">
                  <h3>Project 6</h3>
                  ${GitHubIcon.render()}
                </div>
                <p>
                  Short description of the project. Just a couple of sentences will do.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    `;
  },
};
