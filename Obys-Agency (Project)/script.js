console.log("Loader JS Connected");
gsap.registerPlugin(ScrollTrigger);

// SELECT ELEMENTS
const counter = document.getElementById("loader-counter");
const loadingBar = document.getElementById("loading-bar");
const wipeBar = document.getElementById("wipe-bar");       
const nam = document.getElementById("nam");
const aste = document.getElementById("aste");
const heroText = document.getElementById("heroText");
const loader = document.getElementById("loader");
const main = document.getElementById("main");

let count = 0;


// ENTRY ANIMATION
gsap.from([nam, aste], {
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.15
});

gsap.delayedCall(1.1, () => {
  idleTl.play();
});


// LOADING COUNTER + BARS
let loading = setInterval(() => {
  if (count <= 100) {
    counter.innerHTML = count + "%";
    loadingBar.style.width = count + "%";
    wipeBar.style.width = count + "%";
    count++;
  } else {
    clearInterval(loading);
    idleTl.kill();
    gsap.set([nam, aste], { y: 0, opacity: 1 });
    
    gsap.to(loadingBar, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        loadingBar.style.display = "none";
      }
    });
    mergeNamaste();
  }
}, 25);

// IDLE ANIMATION DURING LOAD
const idleTl = gsap.timeline({
  repeat: -1,
  yoyo: true,
  paused: true
});

idleTl.to([nam, aste], {
  y: -14,
  opacity: 0.85,
  duration: 1.6,
  letterSpacing: "0.08em",
  ease: "power1.inOut",
  stagger: 0.2
});

// DICE ROLL TEXT EFFECT
function diceRollText(element, finalText, duration = 1.5) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let iterations = 0;
  const intervalTime = 80;
  const total = finalText.length;

  const interval = setInterval(() => {
    element.innerText = finalText
      .split("")
      .map((char, index) => {
        if (char === " ") return " ";
        if (index < iterations) return finalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    iterations++;

    if (iterations > total) {
      clearInterval(interval);
      element.innerText = finalText;
    }
  }, intervalTime);
}

// MERGING NAM + ASTE
function mergeNamaste() {
  console.log("mergeNamaste called");

  const tl = gsap.timeline();

  tl.to(nam, {
    paddingBottom: "0%",
    duration: 1,
    ease: "power4.inOut"
  });

  tl.to(aste, {
    paddingTop: "0%",
    duration: 1,
    ease: "power4.inOut"
  }, "<");

  tl.to(counter, {
    opacity: 0,
    duration: 0.4
  });

  tl.to(wipeBar, {
    height: "43vh",
    duration: 1.4,
    ease: "power4.inOut",
    onComplete: () => {
      heroText.style.visibility = "visible";
      heroText.innerText = "";
      diceRollText(heroText, "DESIGN AGENCY", 1.5);
    }
  });

  tl.to({}, { duration: 2 });

  tl.to([nam, aste, heroText], {
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  tl.to(wipeBar, {
    height: "100vh",
    duration: 1.2,
    ease: "power4.inOut"
  });

  tl.to(wipeBar, {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  tl.to(main, {
    opacity: 1,
    y: 0,
    duration: 0,
    ease: "power4.out",
    onStart: () => {
      main.style.pointerEvents = "auto";
    },
    onComplete: () => {
      page1Animation();
    }
  });

  tl.call(() => {
    console.log("Removing loader from DOM");
    loader.remove();
  });
}

function page1Animation() {
  const tl = gsap.timeline();

  tl.from("#nav", {
    y: -120,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  })
  .from("#hero h3", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
  .from("#hero .text h1", {
    y: 160,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "power4.out"
  }, "-=0.5")
  .from("#web-graphic h2", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  }, "-=0.8")
  .from("#web-graphic h1", {
    borderBottomWidth: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.6")
  .call(() => {
    page2Animation();
  });
}

function page2Animation() {
  gsap.from("#vidcont", {
    y: 120,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    onComplete: () => {
      playicon();
    }
  });

  gsap.from("#playbtn", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    delay: 0.3,
  });
}

function sherygoeyeffect(){
  Shery.imageEffect(".img-div", {
    style: 6,
    debug: false,
    config: {
      "noiseDetail": {"value": 7.44, "range": [0, 100]},
      "distortionAmount": {"value": 2.98, "range": [0, 10]},
      "scale": {"value": 36.36, "range": [0, 100]},
      "speed": {"value": 0, "range": [0, 1]},
      "zindex": {"value": 10, "range": [-9999999, 9999999]},
      "aspect": {"value": 0.8},
      "ignoreShapeAspect": {"value": true},
      "shapePosition": {"value": {"x": 0, "y": 0}},
      "shapeScale": {"value": {"x": 0.5, "y": 0.5}},
      "shapeEdgeSoftness": {"value": 0, "range": [0, 0.5]},
      "shapeRadius": {"value": 0, "range": [0, 2]},
      "currentScroll": {"value": 0},
      "scrollLerp": {"value": 0.07},
      "gooey": {"value": true},
      "infiniteGooey": {"value": true},
      "growSize": {"value": 4, "range": [1, 15]},
      "durationOut": {"value": 1, "range": [0.1, 5]},
      "durationIn": {"value": 1.5, "range": [0.1, 5]},
      "displaceAmount": {"value": 0.5},
      "masker": {"value": true},
      "maskVal": {"value": 1.52, "range": [1, 5]},
      "scrollType": {"value": 0},
      "geoVertex": {"range": [1, 64], "value": 28.94},
      "noEffectGooey": {"value": true},
      "onMouse": {"value": 0},
      "noise_speed": {"value": 0, "range": [0, 10]},
      "metaball": {"value": 0.43, "range": [0, 2]},
      "discard_threshold": {"value": 0.53, "range": [0, 1]},
      "antialias_threshold": {"value": 0.03, "range": [0, 0.1]},
      "noise_height": {"value": 0.44, "range": [0, 2]},
      "noise_scale": {"value": 9.92, "range": [0, 100]}
    },
    gooey: true
  });
}
sherygoeyeffect()

function initImageSwitcher() {
  const allImgDivs = document.querySelectorAll('.img-div');
  
  console.log('Found', allImgDivs.length, 'image containers');
  
  allImgDivs.forEach((imgDiv, index) => {
    const images = imgDiv.querySelectorAll('img');
    
    if (images.length < 2) {
      console.log(`Card ${index}: Not enough images`);
      return;
    }
    
    let currentIndex = 0;
    
    console.log(`Card ${index}: Initializing with ${images.length} images`);
    
    gsap.set(images[1], {
      opacity: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    });
    
    gsap.set(images[0], {
      position: 'relative',
      opacity: 1
    });
    
    imgDiv.addEventListener('click', (e) => {
      console.log(`Card ${index} clicked!`);
      
      if (currentIndex === 0) {
        gsap.to(images[0], {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        });
        
        gsap.to(images[1], {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        });
        
        currentIndex = 1;
        console.log(`Card ${index}: Switched to image 2`);
      } else {
        gsap.to(images[1], {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        });
        
        gsap.to(images[0], {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        });
        
        currentIndex = 0;
        console.log(`Card ${index}: Switched to image 1`);
      }
    });
    
    imgDiv.style.cursor = 'pointer';
    imgDiv.style.position = 'relative';
    
    console.log(`Card ${index}: Initialized successfully`);
  });
  
  console.log('All image switchers initialized!');
}

setTimeout(() => {
  initImageSwitcher();
}, 500);

function initBlockReveal() {
  document.querySelectorAll(".reveal-text").forEach((el) => {
    const computedStyle = window.getComputedStyle(el);
    const fontSize = computedStyle.fontSize;
    const lineHeight = computedStyle.lineHeight;
    
    const words = el.innerText.trim().split(/\s+/);
    el.innerHTML = '';
    
    const wordSpans = [];
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.display = 'inline-block';
      span.style.whiteSpace = 'nowrap';
      el.appendChild(span);
      wordSpans.push(span);
      
      if (i < words.length - 1) {
        el.appendChild(document.createTextNode(' '));
      }
    });
    
    const lines = [];
    let currentLine = [];
    let lastTop = -1;
    
    wordSpans.forEach((span) => {
      const top = span.offsetTop;
      if (top !== lastTop) {
        if (currentLine.length > 0) {
          lines.push(currentLine);
        }
        currentLine = [span];
        lastTop = top;
      } else {
        currentLine.push(span);
      }
    });
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
    
    el.innerHTML = '';
    
    lines.forEach((lineWords, lineIndex) => {
      const lineWrapper = document.createElement('div');
      lineWrapper.classList.add('reveal-line');
      lineWrapper.style.overflow = 'hidden';
      lineWrapper.style.position = 'relative';
      lineWrapper.style.display = 'block';
      
      const textSpan = document.createElement('span');
      textSpan.style.display = 'inline-block';
      
      lineWords.forEach((wordSpan, i) => {
        textSpan.appendChild(document.createTextNode(wordSpan.textContent));
        if (i < lineWords.length - 1) {
          textSpan.appendChild(document.createTextNode(' '));
        }
      });
      
      const block = document.createElement('div');
      block.classList.add('reveal-block');
      
      lineWrapper.appendChild(textSpan);
      lineWrapper.appendChild(block);
      el.appendChild(lineWrapper);
    });

    const lineWrappers = el.querySelectorAll('.reveal-line');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });

    lineWrappers.forEach((lineWrapper, index) => {
      const span = lineWrapper.querySelector('span');
      const block = lineWrapper.querySelector('.reveal-block');
      
      gsap.set(span, { y: '100%' });
      gsap.set(block, { x: '-100%' });
      
      const delay = index * 0.12;
      
      tl.to(block, {
        x: '0%',
        duration: 0.3,
        ease: "power4.inOut"
      }, delay)
      .to(span, {
        y: '0%',
        duration: 0.4,
        ease: "power4.out"
      }, delay + 0.05)
      .to(block, {
        x: '100%',
        duration: 0.3,
        ease: "power4.inOut"
      }, delay + 0.25);
    });
  });
}

setTimeout(() => {
  initBlockReveal();
}, 100);

function initTextillate() {
  $('.rolltext').textillate({
    loop: false,
    in: {
      effect: 'fadeInUp',
      delay: 50,
      sync: false,
      shuffle: false
    }
  });
}

gsap.utils.toArray('.rolltext').forEach(text => {
  ScrollTrigger.create({
    trigger: text,
    start: 'top 90%',
    once: true,
    onEnter: () => {
      $(text).textillate('in');
    }
  });
});

document.querySelectorAll('#page6-flex .social a, #page6-flex .social .rolltext').forEach(link => {
  link.addEventListener('mouseenter', function() {
    gsap.to(this, {
      x: 10,
      duration: 0.3,
      ease: "power2.out"
    });
  });
  
  link.addEventListener('mouseleave', function() {
    gsap.to(this, {
      x: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

window.addEventListener('load', () => {
  initTextillate();
  
  document.querySelectorAll('.page5-elem, .page5-elem2').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      elem.style.animationPlayState = 'paused';
    });
    elem.addEventListener('mouseleave', () => {
      elem.style.animationPlayState = 'running';
    });
  });
});

function cursoranime(){
  Shery.makeMagnet("#part-2 h2 , #part-1 div svg", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.mouseFollower({
    skew:false,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration:.5 ,
  });
}
cursoranime()

function playicon(){
  const videocont = document.querySelector("#vidcont");
  const video = document.querySelector("#vidcont video");
  const playbtn = document.querySelector("#playbtn");

  if (!videocont || !video || !playbtn) {
    console.error("Elements not found:", { videocont, video, playbtn });
    return;
  }

  console.log("Play icon initialized");

  videocont.addEventListener("mouseenter", () => {
    gsap.to(".mousefollower", { opacity: 0 });
  });

  videocont.addEventListener("mousemove", (e) => {
    const bounds = videocont.getBoundingClientRect();
    gsap.to(playbtn, {
      left: e.clientX - bounds.left,
      top: e.clientY - bounds.top,
      ease: "power3.out",
      duration: 0.3
    });
  });

  videocont.addEventListener("mouseleave", () => {
    gsap.to(".mousefollower", { opacity: 1 });
    gsap.to(playbtn, {
      left: "65%",
      top: "50%",
      ease: "power3.out",
      duration: 0.4
    });
  });

  let flag = 0;
  videocont.addEventListener("click", () => {
    if (flag === 0) {
      video.play()
        .then(() => console.log("Video playing"))
        .catch(err => console.error("Play error:", err));
      video.style.opacity = 1;
      playbtn.innerHTML = `<i class="ri-pause-mini-line"></i>`;
      gsap.to(playbtn, { scale: 0.5 });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      playbtn.innerHTML = `<i class="ri-play-fill"></i>`;
      gsap.to(playbtn, { scale: 1 });
      flag = 0;
    }
  });
}

function initPeepCrowd({
  canvasId = "canvas",
  zIndex = 50
} = {}) {

  const config = {
    src: "./peeps.png",
    rows: 15,
    cols: 7
  };

  const randomRange = (min, max) => min + Math.random() * (max - min);
  const randomIndex = (array) => (Math.random() * array.length) | 0;
  const removeFromArray = (array, i) => array.splice(i, 1)[0];
  const removeItemFromArray = (array, item) =>
    removeFromArray(array, array.indexOf(item));
  const removeRandomFromArray = (array) =>
    removeFromArray(array, randomIndex(array));
  const getRandomFromArray = (array) => array[randomIndex(array)];

  const resetPeep = ({ stage, peep }) => {
    const direction = Math.random() > 0.5 ? 1 : -1;
    const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
    const startY = stage.height - peep.height + offsetY;
    let startX, endX;
    if (direction === 1) {
      startX = -peep.width;
      endX = stage.width;
      peep.scaleX = 1;
    } else {
      startX = stage.width + peep.width;
      endX = 0;
      peep.scaleX = -1;
    }
    peep.x = startX;
    peep.y = startY;
    peep.anchorY = startY;
    return { startX, startY, endX };
  };

  const normalWalk = ({ peep, props }) => {
    const { startY, endX } = props;
    const tl = gsap.timeline();
    tl.timeScale(randomRange(0.5, 1.5));
    tl.to(peep, { duration: 10, x: endX, ease: "none" }, 0);
    tl.to(peep, { duration: 0.25, repeat: 40, yoyo: true, y: startY - 10 }, 0);
    return tl;
  };

  const walks = [normalWalk];

  class Peep {
    constructor({ image, rect }) {
      this.image = image;
      this.setRect(rect);
      this.x = 0;
      this.y = 0;
      this.anchorY = 0;
      this.scaleX = 1;
      this.walk = null;
    }
    setRect(rect) {
      this.rect = rect;
      this.width = rect[2];
      this.height = rect[3];
      this.drawArgs = [this.image, ...rect, 0, 0, this.width, this.height];
    }
    render(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.scale(this.scaleX, 1);
      ctx.drawImage(...this.drawArgs);
      ctx.restore();
    }
  }

  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.warn("Peep canvas not found");
    return;
  }
  canvas.style.display = "block";
  canvas.style.position = "absolute";
  canvas.style.inset = "0";
  canvas.style.zIndex = zIndex;
  canvas.style.pointerEvents = "none";

  const ctx = canvas.getContext("2d");
  const stage = { width: 0, height: 0 };
  const allPeeps = [];
  const availablePeeps = [];
  const crowd = [];

  const img = new Image();
  img.onload = () => {
    console.log("Peep image loaded!", img.naturalWidth, "x", img.naturalHeight);
    init();
  };
  img.onerror = (err) => {
    console.error("Peep image failed:", err);
  };
  img.src = config.src;
  
  function init() {
    createPeeps();
    resize();
    gsap.ticker.add(render);
    window.addEventListener("resize", resize);
  }

  function createPeeps() {
    const { rows, cols } = config;
    const { naturalWidth, naturalHeight } = img;
    const rectW = naturalWidth / rows;
    const rectH = naturalHeight / cols;
    for (let i = 0; i < rows * cols; i++) {
      allPeeps.push(
        new Peep({
          image: img,
          rect: [
            (i % rows) * rectW,
            ((i / rows) | 0) * rectH,
            rectW,
            rectH
          ]
        })
      );
    }
  }

  function resize() {
    stage.width = canvas.clientWidth;
    stage.height = canvas.clientHeight;
    canvas.width = stage.width * devicePixelRatio;
    canvas.height = stage.height * devicePixelRatio;
    crowd.forEach((p) => p.walk && p.walk.kill());
    crowd.length = 0;
    availablePeeps.length = 0;
    availablePeeps.push(...allPeeps);
    initCrowd();
  }

  function initCrowd() {
    while (availablePeeps.length) {
      addPeepToCrowd().walk.progress(Math.random());
    }
  }

  function addPeepToCrowd() {
    const peep = removeRandomFromArray(availablePeeps);
    peep.walk = getRandomFromArray(walks)({
      peep,
      props: resetPeep({ peep, stage })
    }).eventCallback("onComplete", () => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
      addPeepToCrowd();
    });
    crowd.push(peep);
    crowd.sort((a, b) => a.anchorY - b.anchorY);
    return peep;
  }

  function render() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(devicePixelRatio, devicePixelRatio);
    crowd.forEach((p) => p.render(ctx));
  }
}

ScrollTrigger.create({
  trigger: "#page7",
  start: "top 90%",
  once: true,
  onEnter: () => {
    initPeepCrowd({ canvasId: "canvas", zIndex: 20 });
  }
});