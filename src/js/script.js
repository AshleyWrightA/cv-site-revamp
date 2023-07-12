import Typed from "typed.js";

export function dynamicText() {
  const dynamicTextConfig = {
    strings: [
      "Problem Solver 🙌",
      "College Graduate 🎓",
      "Cat Mom 🐱",
      "Web Developer 📱 + 🖱️",
      "Coffee Addict ☕",
      "History Buff 📖",
      "Techie 👩‍💻",
      "Game Master 🎲",
      "Google-fu Master ⌨️",
      "Green Thumb 🌱",
      "BoardGame Geek ♟️",
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
    smartBackspace: true,
    shuffle: false,
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
