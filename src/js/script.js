import Typed from "typed.js";
import data from "./data";

// Emoji Images imports for /dist
import raisinghandsImage from "../assets/raisinghands.webp";
import graduationCapImage from "../assets/graduation-cap.webp";
import hotBeverageImage from "../assets/hot-beverage.webp";
import mobilePhoneImage from "../assets/mobile-phone.webp";
import desktopCompuerImage from "../assets/desktop-computer.webp";
import catImage from "../assets/cat.webp";
import womanMageImage from "../assets/woman-mage.webp";
import reactImage from "../assets/react.webp";
import openBookImage from "../assets/open-book.webp";
import womanTechnologistImage from "../assets/woman-technologist.webp";
import gameDieImage from "../assets/game-die.webp";
import martialArtsUniformImage from "../assets/martial-arts-uniform.webp";
import seedlingImage from "../assets/seedling.webp";
import chessPawnImage from "../assets/chess-pawn.webp";

export function dynamicText() {
  const dynamicTextConfig = {
    strings: [
      `Problem Solver <img class="hero__icon" src='${raisinghandsImage}' alt='' />`,
      `College Graduate <img class="hero__icon" src='${graduationCapImage}' alt='' />`,
      `Coffee Addict <img class="hero__icon" src='${hotBeverageImage}' alt='' />`,
      `Web Developer <img class="hero__icon" src='${mobilePhoneImage}' alt='' />+<img class="hero__icon" src='${desktopCompuerImage}' alt='' />`,
      `Cat Mom <img class="hero__icon" src='${catImage}' alt='' />`,
      `React Wizard <img class="hero__icon" src='${womanMageImage}' alt='' /><img class="hero__icon" src='${reactImage}' alt='' /> `,
      `History Buff <img class="hero__icon" src='${openBookImage}' alt='' />`,
      `Techie <img class="hero__icon" src='${womanTechnologistImage}' alt='' />`,
      `Game Master <img class="hero__icon" src='${gameDieImage}' alt='' />`,
      `Google-fu <img class="hero__icon" src='${martialArtsUniformImage}' alt='' />`,
      `Green Thumb <img class="hero__icon" src='${seedlingImage}' alt='' />`,
      `BoardGame Geek <img class="hero__icon" src='${chessPawnImage}' alt='' />`,
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,
    loop: true,
    smartBackspace: true,
    shuffle: false,
    showCursor: true,
    cursorChar: "_",
  };

  const heroDynamicText = new Typed(".hero__dynamic-text", dynamicTextConfig);
}

export function fadeInSection() {
  function scrollHandler() {
    aboutSectionFade();
    projectFade();
  }

  function aboutSectionFade() {
    const skillGroups = Array.from(document.querySelectorAll(".skill-fade"));

    if (window.innerHeight >= skillGroups[0].getBoundingClientRect().top) {
      skillGroups.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(-10vh)";
        }, 300 * index);
      });
    }

    // custom hover element
    // prevents hover on element before it is visible
    setTimeout(() => {
      skillGroups.forEach((element) => {
        element.style.transition = "0.5s";
        element.addEventListener("mouseenter", () => {
          element.classList.add("hovered");
        });
        element.addEventListener("mouseleave", () => {
          element.classList.remove("hovered");
        });
      });
    }, 1500);
  }

  function projectFade() {
    const fadeInProjects = Array.from(document.querySelectorAll(".project"));

    fadeInProjects.forEach((element) => {
      if (window.innerHeight >= element.getBoundingClientRect().top) {
        element.style.opacity = "1";
        element.style.transform = "translateY(-10vh)";
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
