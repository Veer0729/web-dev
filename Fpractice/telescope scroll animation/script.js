gsap.registerPlugin(ScrollTrigger);

const config = {
  gap: 0.08,
  speed: 0.3,
  arcRadius: 500,
};

const spotlightItems = [
  { name: "Silent Arc", img: "img_1.jpg" },
  { name: "Bloom24", img: "img_2.jpg" },
  { name: "Glass Fade", img: "img_3.jpg" },
  { name: "Echo 9", img: "img_4.jpg" },
  { name: "Velvet Loop", img: "img_5.jpg" },
  { name: "Field Two", img: "img_6.jpg" },
  { name: "Pale Thread", img: "img_7.jpg" },
  { name: "Stillroom", img: "img_8.jpg" },
  { name: "Ghostline", img: "img_9.jpg" },
  { name: "Mono 73", img: "img_10.jpg" },
];

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => 1 - Math.pow(1 - t, 4),
});
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

const titlesContainer = document.querySelector(".spotlight-titles");
const imagesContainer = document.querySelector(".spotlight-images");
const spotlightHeader = document.querySelector(".spotlight-header");
const titlesContainerElement = document.querySelector(".spotlight-titles-container");
const introTextElements = document.querySelectorAll(".spotlight-intro-text");
const imageElements = [];

spotlightItems.forEach((items, index) => {
  const title = document.createElement("h1");
  title.textContent = items.name;
  if (index === 0) title.style.opacity = "1";
  titlesContainer.appendChild(title);

  const wrapper = document.createElement("div");
  wrapper.className = "spotlight-img";
  const img = document.createElement("img");
  img.src = items.img;
  img.alt = items.name;
  wrapper.appendChild(img);
  imagesContainer.appendChild(wrapper);
  imageElements.push(wrapper);
});

const titleElements = titlesContainer.querySelectorAll("h1");
let currentActiveIndex = 0;

const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;
const arcStartX = containerWidth * 0.75;
const arcStartY = -200;
const arcEndY = containerHeight + 200;
const arcControlPointX = arcStartX + config.arcRadius;
const arcControlPointY = containerHeight / 2;

function getBezierPosition(t) {
  const x = (1 - t) ** 2 * arcStartX + 2 * (1 - t) * t * arcControlPointX + t ** 2 * arcStartX;
  const y = (1 - t) ** 2 * arcStartY + 2 * (1 - t) * t * arcControlPointY + t ** 2 * arcEndY;
  return { x, y };
}

function getImgProgressState(index, overallProgress) {
  const start = index * config.gap;
  const end = start + config.speed;
  if (overallProgress < start) return -1;
  if (overallProgress > end) return 2;
  return (overallProgress - start) / config.speed;
}

imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));

ScrollTrigger.create({
  trigger: ".spotlight",
  start: "top top",
  end: `+=${window.innerHeight * 10}px`,
  pin: true,
  pinSpacing: true,
  scrub: 1.5,
  onUpdate: ({ progress }) => {
    if (progress <= 0.2) {
      const p = progress / 0.2;
      const move = window.innerWidth * 0.6;

      gsap.set(introTextElements[0], { x: -p * move, opacity: 1 });
      gsap.set(introTextElements[1], { x: p * move, opacity: 1 });

      gsap.set(".spotlight-bg-img", { scale: p });
      gsap.set(".spotlight-bg-img img", { scale: 1.5 - p * 0.5 });

      imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
      spotlightHeader.style.opacity = "0";
      gsap.set(titlesContainerElement, { "--before-opacity": "0", "--after-opacity": "0" });

    } else if (progress <= 0.25) {
      gsap.set(".spotlight-bg-img", { scale: 1 });
      gsap.set(".spotlight-bg-img img", { scale: 1 });

      gsap.set(introTextElements, { opacity: 0 });
      imageElements.forEach((img) => gsap.set(img, { opacity: 0 }));
      spotlightHeader.style.opacity = "1";
      gsap.set(titlesContainerElement, { "--before-opacity": "1", "--after-opacity": "1" });

    } else if (progress <= 0.95) {
      const sp = (progress - 0.25) / 0.7;
      const startY = window.innerHeight;
      const targetY = -titlesContainer.scrollHeight;
      const y = startY - sp * (startY - targetY);

      gsap.set(".spotlight-titles", { y });
      imageElements.forEach((img, index) => {
        const imgProg = getImgProgressState(index, sp);
        if (imgProg < 0 || imgProg > 1) return gsap.set(img, { opacity: 0 });
        const pos = getBezierPosition(imgProg);
        const el = img.querySelector("img");
        const w = el.offsetWidth || 200;
        const h = el.offsetHeight || 150;
        gsap.set(img, { x: pos.x - w / 2, y: pos.y - h / 2, opacity: 1 });
      });

      let closest = -1, minDist = Infinity;
      imageElements.forEach((img, i) => {
        const prog = getImgProgressState(i, sp);
        if (prog < 0 || prog > 1) return;
        const rect = img.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = cx - arcStartX;
        const dy = cy - arcControlPointY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      if (closest !== -1 && closest !== currentActiveIndex) {
        titleElements[currentActiveIndex].style.opacity = "0.25";
        titleElements[closest].style.opacity = "1";
        document.querySelector(".spotlight-bg-img img").src = spotlightItems[closest].img;
        currentActiveIndex = closest;
      }

    } else {
      spotlightHeader.style.opacity = "0";
      gsap.set(titlesContainerElement, { "--before-opacity": "0", "--after-opacity": "0" });
    }
  },
});
