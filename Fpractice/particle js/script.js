const images = document.querySelectorAll(".gallery img");
let currentImageIndex = -1;
let scrollPosition = 0;
const threshold = 400; // distance required between images

function showImage(index) {
  if (!images[index]) return;

  gsap.to(images[index], {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out"
  });
}

function hideImage(index) {
  if (!images[index]) return;

  gsap.to(images[index], {
    opacity: 0,
    scale: 0.5,
    duration: 0.4,
    ease: "power2.in"
  });
}

window.addEventListener("wheel", (e) => {
  // detect scroll direction
  const delta = e.deltaY;
  scrollPosition += delta;

  // scroll down → show next image
  if (
    scrollPosition > threshold &&
    currentImageIndex < images.length - 1
  ) {
    currentImageIndex += 1;
    showImage(currentImageIndex);
    scrollPosition = 0;
  }

  // scroll up → hide current image
  if (
    scrollPosition < -threshold &&
    currentImageIndex >= 0
  ) {
    hideImage(currentImageIndex);
    currentImageIndex -= 1;
    scrollPosition = 0;
  }
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 250,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#68c29b"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});

