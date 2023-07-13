import { dynamicText, fadeInSection, checkScreenSize } from "./script.js";

function initApp() {
  dynamicText();
  fadeInSection();
  checkScreenSize();

  window.addEventListener("resize", checkScreenSize);
}

initApp();
