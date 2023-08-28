import Typed from "typed.js";
import data from "./data";

export function dynamicText() {
  const dynamicTextConfig = {
    strings: [
      "Problem Solver 🙌",
      "College Graduate 🎓",
      "Coffee Addict ☕",
      "Web Developer 📱 + 🖱️",
      "Cat Mom 🐱",
      `React Wizard <iconify-icon icon="twemoji:woman-mage"></iconify-icon>`,
      "History Buff 📖",
      "Techie 👩‍💻",
      "Game Master 🎲",
      "Google-fu Black Belt 🥋",
      "Green Thumb 🌱",
      "BoardGame Geek ♟️",
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,
    loop: true,
    smartBackspace: true,
    shuffle: false,
    showCursor: true,
  };

  const heroDynamicText = new Typed(".hero__dynamic-text", dynamicTextConfig);
}

export function fadeInSection() {
  function scrollHandler() {
    aboutSectionFade();
    projectFade();
  }

  function aboutSectionFade() {
    const fadeInSection = document.querySelector(".fade-in-section");
    const fadeInSectionRect = fadeInSection.getBoundingClientRect();
    if (window.innerHeight + window.pageYOffset >= fadeInSectionRect.top) {
      fadeInSection.style.opacity = "1";
      fadeInSection.style.transform = "translateY(-50px)";
    }
  }

  function projectFade() {
    const fadeInProjects = Array.from(document.querySelectorAll(".project"));

    fadeInProjects.forEach((element) => {
      if (window.innerHeight >= element.getBoundingClientRect().top) {
        element.style.opacity = "1";
        element.style.transform = "translateX(-10vw)";
      }
    });
  }

  window.addEventListener("scroll", scrollHandler);
  window.onload = function () {
    window.scrollTo(0, 0);
  };
}

// Function to check the screen size and remove class
export function checkScreenSize() {
  var screenWidth =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var element = document.querySelector("header");

  if (screenWidth < 768) {
    element.classList.remove("global-padding");
  } else {
    element.classList.add("global-padding"); // Add the class back if the screen size is 768px or larger
  }
}

export function setModal() {
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-bg");
  const modalOpen = document.querySelectorAll(".modal-open");
  const modalClose = document.querySelectorAll(".modal-close");

  modalOpen.forEach((e) => {
    e.addEventListener("click", () => {
      modal.style.display = "flex";
      body.style.overflowY = "hidden";
      projectInfoModal(e, data);
    });
  });

  modalClose.forEach((e) => {
    e.addEventListener("click", () => {
      modal.style.display = "none";
      body.style.overflowY = "auto";
    });
  });
}

function projectInfoModal(sourceButton, data) {
  // Place data into the modal

  const modalHeader = document.querySelector(".modal-header");
  const modalImage = document.querySelector(".modal-img");
  const modalSectionOne = document.querySelector(".modal-summary");
  const modalSectionTwo = document.querySelector(".modal-learned");
  const modalSectionThree = document.querySelector(".modal-change");

  for (const e in data) {
    if (sourceButton.classList.contains(e)) {
      modalHeader.textContent = data[e].title;
      modalImage.src = data[e].img;
      modalImage.alt = data[e].alt;
      modalSectionOne.textContent = data[e].summary;
      modalSectionTwo.textContent = data[e].learned;
      modalSectionThree.textContent = data[e].change;
    }
  }
}
