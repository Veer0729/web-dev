import collection from "./collection.js";

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(SplitText);

    // Our HTML pointers
    const gallery = document.querySelector(".gallery");
    const galleryContainer = document.querySelector(".gallery-container");
    const titleContainer = document.querySelector(".title-container");

    const cards = []; // store all the  cards element we generate
    const transformstate = [] // keeps track of position, scale and rotation of each card

    let currentTitle = null; // keeps track of which text is currently visible
    let isPreviewActive = false; // tracks weather the user clicked/tapped a card
    let isTransitioning = false // prevents double clicks or bugs

    const config = {
        imageCount: 25, // number of cards to render
        radius: 275, // radius of our layout
        sensitivity: 500, // responsive the mouse or touch movement is
        effectsFalloff: 250, // effects fade
        cardMovement: 50, // how much cards move when we hover
        lerpFactor: 0.15, // smoothness of animation
        isMobile: window.innerWidth < 1000 // disables parallax and effects on small screens
    };

    const parallaxState = {
        targetX: 0,
        targetY: 0,
        targetZ: 0, // where the camera should move to....using lerp
        currentX: 0,
        currentY: 0,
        currentZ: 0, // where the camera currently is
    };

    // card creation loop
    for (let i = 0; i < config.imageCount; i++){
        // position around the circle
        const angle = (i / config.imageCount) * Math.PI * 2;
        const x = config.radius * Math.cos(angle);
        const y = config.radius * Math.sin(angle);

        // get our images and titles
        const cardIndex = i % 20; // ensure only loops for 20 images (0- 19)
        const card = document.createElement("div");
        card.className = "card"; // links to css style
        card.dataset.index = i; // holds our selected card image
        card.dataset.title = collection[cardIndex].title; // holds our selected card title
        
        const img = document.createElement("img"); // 
        img.src = collection[cardIndex].img;
        card.appendChild(img); // places it inside the card div

        gsap.set(card, {
            // places each card in position around the circle
            x,
            y,
            rotation: (angle * 180) / Math.PI + 90,
            transformPerspective: 800,
            transformOrigin: "center center", // it means it rotates from its own center
        });

        gallery.appendChild(card); // adds card to our gallery 
        cards.push(card); // stores the card in an array
        transformstate.push({
            currentRotation: 0, // current flipped/rotation of our card
            targetRotation: 0, // the rotation we want to animate towards
            currentX: 0, // where it currently is
            targetX: 0, // where it should move in animation
            currentY: 0,
            targetY: 0,
            currentScale: 1, // current size
            targetScale: 1,
            angle, // angle where it is placed (calculated earlier)
        });

        // "When clicked on a card, if not already zoomed in or animating, zoom into that card and stop the click from doing anything else."
        card.addEventListener("click", (e) => { // e is short for event (stores info about clicking, where and what element was clicked)
            if (!isPreviewActive & !isTransitioning) { // not already previewing and animation not already happening
                togglePreview(parseInt(card.dataset.index)); // starts the zoom in animation
                e.stopPropagation(); // stops the clicks from bubbling up
            }
        });
    }

    // when a card is clicked, the gallery rotates and the selected card is zoomed in, it also shows its title, other clicks are blocked during this time.
    function togglePreview(index) {
        isPreviewActive = true; // zoomed in state
        isTransitioning = true; // animation is happening, no other interactions are allowed

        const angle = transformstate[index].angle; // the angle where the selected card is currently placed
        const targetPosition = (Math.PI * 3) / 2; // where we want our card to move

        // calculates how much to rotate the whole gallery, if it's more or less than 180 or -180, we take the shortest path
        let totalradian = targetPosition - angle;
        let rotationradian = totalradian;

        if (rotationradian > Math.PI) rotationradian -= Math.PI * 2;
        else if (rotationradian < -Math.PI) rotationradian += Math.PI * 2;
        
        // resets all cards to their original scale and position before zooming in. prevents any hover effects
        transformstate.forEach((state) => {
            state.currentRotation = state.targetRotation = 0;
            state.currentScale = state.targetScale = 1;
            state.currentX = state.targetX = state.currentY = state.targetY = 0;
        });

        gsap.to(gallery, {
            onStart: () => { // resets all cards position for clean zoom
                cards.forEach((card, i) => {
                    gsap.to(card, {
                        x: config.radius * Math.cos(transformstate[i].angle),
                        y: config.radius * Math.sin(transformstate[i].angle),
                        rotationY: 0,
                        scale: 1,
                        duration: 1.25,
                        ease: "power.out ",
                    });
                });
            },
            scale: 5, // zooms in our card
            y: 1300, // moves the whole
            rotation: (rotationradian * 180) / Math.PI + 360, // rotates the whole gallery
            duration: 2,
            ease: "power4.inOut",
            onComplete: () => (isTransitioning = false),
        });

        // disables the 3D mouse parallax effect while zoomed in
        gsap.to(parallaxState, {
            currentX: 0,
            currentY: 0,
            currentZ: 0,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => {
                gsap.set(galleryContainer, {
                    rotateX: parallaxState.currentX,
                    rotateY: parallaxState.currentY,
                    rotateZ: parallaxState.currentZ,
                    transformOrigin: "center center",
                });
            },
        });

        const titleText = cards[index].dataset.title; // grabs the title from the clicked card
        const p = document.createElement("p"); // creates a new element p inside the title container
        p.textContent = titleText;
        titleContainer.appendChild(p);
        currentTitle = p;

        const split = new SplitText(p, { // use splittext to split them in dfferent words
            type: "words",
            wordsClass: "word",
        });
        const words = split.words;

        // moves all the words from below into place
        gsap.set(words, {y: "125%"});
        gsap.to(words, {
            y: "0%",
            duration: 0.75,
            delay: 1.25,
            stagger: 0.1,
            ease: "power4.out",
        });
        
    }

    // brings the gallery back in its original point as it was before
    function resetGallery() {
        if (isTransitioning) return; // if animation already running, prevents from accidentally triggering reset again.

        isTransitioning = true; // zoom out animation

        if(currentTitle) { // if there's our title on the screen, we grab them all
            const words = currentTitle.querySelectorAll(".word");
            // we animate them to slide up and disappear
            gsap.to(words, {
                y: "-125%",
                duration: 0.75,
                delay: 0.5,
                stagger: 0.1,
                ease: "power4.out",
                onComplete: () => { // once done, we remove the p tag and resets currentTitle
                    currentTitle.remove();
                    currentTitle = null;
                },
            });
        }

        // based on screen size decides how the gallery should look
        const viewportWidth = window.innerWidth;
        let galleryScale = 1;

        if (viewportWidth < 768) {
            galleryScale = 0.6;
        } else if (viewportWidth < 1200){
            galleryScale = 0.8;
        }

        // animates the whole gallery to go back to center, remove all rotations and reset its scale
        gsap.to(gallery, {
            scale: galleryScale,
            y: 0,
            x: 0,
            rotation: 0,
            duration: 2.5,
            ease: "power4.inOut",
            onComplete: () => { // once its done, the user can click again
                isPreviewActive = isTransitioning = false;
                Object.assign(parallaxState, {
                    targetX: 0,
                    targetY: 0,
                    targetZ: 0,
                    currentX: 0,
                    currentY: 0,
                    currentZ: 0,
                });
            },
        });
    }

    // scales our  gallery for mobile/tablet, resetting camera values, only doing full reset when you're not zoomed in
    function handleResize() {
        const viewportWidth = window.innerWidth; // gets width of browser in pixels
        config.isMobile = viewportWidth < 1000;

        let galleryScale = 1; // 1 means full size

        if (viewportWidth < 768) {
            galleryScale = 0.6; // very small screen
        } else if (viewportWidth < 1200){
            galleryScale = 0.8; // medium size screen
        }

        gsap.set(gallery, { // is used for setting properties without animation
            scale: galleryScale,
        });

        if (!isPreviewActive){
            // resets all parallax values
            parallaxState.targetX = 0;
            parallaxState.targetY = 0;
            parallaxState.targetZ = 0;
            parallaxState.currentX = 0;
            parallaxState.currentY = 0;
            parallaxState.currentZ = 0;

            transformstate.forEach((state) => { // loops over all cards and reset their transformation
                state.targetRotation = 0;
                state.currentRotation = 0;
                state.targetScale = 1;
                state.currentScale = 1;
                state.targetX = 0,
                state.currentX = 0;
                state.targetY = 0;
                state.currentY = 0
            });
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    document.addEventListener("click", () => {
        if (isPreviewActive && !isTransitioning) resetGallery();
    });

    // tilts the entire gallery, zoom and flips cards if we hover over them
    document.addEventListener("mousemove", (e) => { // adds listener for every mouse move on the page
        if (isPreviewActive || isTransitioning || config.isMobile) return; // dosent work if, we aree zoomed, zoom aniamtion is running, or in mobile screen.

        // sets the screen's center
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // calculate how far our mouse is from the center
        const percentX = (e. clientX - centerX) / centerX;
        const percentY = (e. clientX - centerY) / centerY;

        // sets a 3D camera tilt direction
        parallaxState.targetY = percentX * 15;
        parallaxState.targetX = -percentY * 15;
        parallaxState.targetZ = (percentX + percentY) * 5;

        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect(); // gets the cards position and size

            // calculates our mouse distance from the card
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy); // calculates how far is it from the center

            if(distance < config.sensitivity && !config.isMobile){ // if close to the card and not on mobile, apply hover effect
                const flipFactor = Math.max(0,1 - distance / config.effectsFalloff); // closer the mous stronger the effect
                
                // gets the angle of  the card on the circle, decides how much it should move outward when hovered
                const angle = transformstate[index].angle;
                const moveAmount = config.cardMovement * flipFactor;

                transformstate[index].targetRotation = 180 * flipFactor; // card can flip upto 180 degrees
                transformstate[index].targetScale = 1 + 0.3 * flipFactor; // zooms in
                transformstate[index].targetX = moveAmount * Math.cos(angle);
                transformstate[index].targetY = moveAmount * Math.sin(angle);
            }else { // if the mouse is not near, return to normal
                transformstate[index].targetRotation = 0;
                transformstate[index].targetScale = 1;
                transformstate[index].targetX = 0;
                transformstate[index].targetY = 0;
            }

        })
    });

    // smoothly tilts the gallery based on mouse movement, makes each card flip, zoom and move outward, uses lerp for smoothness, repeat forever
    function animate() {
        if (!isPreviewActive && !isTransitioning) { // make sure only work when we are not previewing or zooming
            // uses lerping, smoothly transitions the camera tilt from current to target
            // lerfactor controls transitions (0.15 = very smooth)
            parallaxState.currentX +=
                (parallaxState.targetX - parallaxState.currentX) * config.lerpFactor;
            parallaxState.currentY +=
                (parallaxState.targetY - parallaxState.currentY) * config.lerpFactor;
            parallaxState.currentZ +=
                (parallaxState.targetZ - parallaxState.currentZ) * config.lerpFactor;

            // applies the new rotation values to the entire gallery for 3D camera effect
            gsap.set(galleryContainer, {
                rotateX: parallaxState.currentX,
                rotateY: parallaxState.currentY,
                rotation: parallaxState.currentZ,
            });

            cards.forEach((card, index) => { // loops through each card
                const state = transformstate[index]; // gets their current, target, position, scale values

                // slowly move rotation, scale, and position to their values
                // creates hover zoom and flip animations
                state.currentRotation +=
                    (state.targetRotation - state.currentRotation) * config.lerpFactor;
                state.currentScale +=
                    (state.targetScale - state.currentScale) * config.lerpFactor;
                    state.currentX += (state.targetX - state.currentX) * config.lerpFactor;
                    state.currentY += (state.targetY - state.currentY) * config.lerpFactor;

                // keeps the circle positioned along the circle using trignometry
                const angle = state.angle;
                const x = config.radius * Math.cos(angle);
                const y = config.radius * Math.sin(angle);

                gsap.set(card, {
                    // final x and y for original circle + extra movements on hover
                    x: x + state.currentX,
                    y: y + state.currentY,
                    rotateY: state.currentRotation, // flip effect
                    scale: state.currentScale, // zoom
                    rotation: (angle * 180) / Math.PI + 90, // rotate around the circle
                    transformPerspective: 1000, // keeps the 3D effect
                });
            });
        }
        requestAnimationFrame(animate); // tell the browser to run animation on the next frame so it keeps looping forever
    }

    animate();
});