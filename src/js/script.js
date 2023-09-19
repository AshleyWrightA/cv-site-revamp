import Typed from "typed.js";
import data from "./data";

export function dynamicText() {
  const dynamicTextConfig = {
    strings: [
      `Problem Solver <img class="hero__icon" src='/src/assets/raisinghands.webp' alt='' />`,
      `College Graduate <img class="hero__icon" src='/src/assets/graduation-cap_1f393.webp' alt='' />`,
      `Coffee Addict <img class="hero__icon" src='/src/assets/hot-beverage_2615.webp' alt='' />`,
      `Web Developer <img class="hero__icon" src='/src/assets/mobile-phone_1f4f1.webp' alt='' />+<img class="hero__icon" src='/src/assets/desktop-computer_1f5a5-fe0f.webp' alt='' />`,
      `Cat Mom <img class="hero__icon" src='/src/assets/cat_1f408.webp' alt='' />`,
      `React Wizard <img class="hero__icon" src='/src/assets/woman-mage_1f9d9-200d-2640-fe0f.webp' alt='' /><img class="hero__icon" src='/src/assets/react.webp' alt='' /> `,
      `History Buff <img class="hero__icon" src='/src/assets/open-book_1f4d6.webp' alt='' />`,
      `Techie <img class="hero__icon" src='/src/assets/woman-technologist_1f469-200d-1f4bb.webp' alt='' />`,
      `Game Master <img class="hero__icon" src='/src/assets/game-die_1f3b2.webp' alt='' />`,
      `Google-fu <img class="hero__icon" src='/src/assets/martial-arts-uniform_1f94b.webp' alt='' />`,
      `Green Thumb <img class="hero__icon" src='/src/assets/seedling_1f331.webp' alt='' />`,
      `BoardGame Geek <img class="hero__icon" src='/src/assets/chess-pawn_265f-fe0f.webp' alt='' />`,
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
