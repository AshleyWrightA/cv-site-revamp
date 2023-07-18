import { dynamicText, fadeInSection, checkScreenSize, setModal } from "./script.js";

function initApp() {
  dynamicText();
  fadeInSection();
  checkScreenSize();
  setModal();

  window.addEventListener("resize", checkScreenSize);
}

initApp();
