import "/src/styles/style-vars.css";
import "/src/styles/style.css";
import { HomePage } from "/src/pages/HomePage.js";
import { Nav } from "/src/components/Nav.js";

const body = document.body;
body.innerHTML = HomePage.render();
Nav.init();
