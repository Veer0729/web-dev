gsap.registerPlugin(SplitText); // enables the use of split text plugin

document.addEventListener("DOMContentLoaded", () => { // waits for the entire html to loads it's content
  const profileImages = document.querySelectorAll(".profile-images .img"); // select all images inside profile-image
  const nameElements = document.querySelectorAll(".profile-names .name"); // select all name containers inside profile-names
  const nameHeadings = document.querySelectorAll(".profile-names .name h1"); // select all real names inside the containers

  nameHeadings.forEach((heading) => { 
    const split = new SplitText(heading, { type: "chars" }); // splits the heading into individual char
    split.chars.forEach((char) => char.classList.add("letter")); // adds a class .letter
  });

  const defaultName = nameElements[0]; // picks "The squad" by default
  const defaultLetters = defaultName.querySelectorAll(".letter"); // selects all it's individual char
  gsap.set(defaultLetters, { y: 0 }); // vertical position is 0 (not animated)
  defaultName.querySelector("h1").style.opacity = "1"; // opactiy is 1 so it is visible

  nameElements.forEach((el, i) => { // (el) = nameElements in short
    if (i !== 0) { // if not the first one "The Squad"
      const letters = el.querySelectorAll(".letter"); // for every letter
      gsap.set(letters, { y: "100%" }); // go down 100% (out of view)
      el.querySelector("h1").style.opacity = "0"; // opacity 0
    }
  });

  profileImages.forEach((img, index) => { // go through each profile img
    const targetName = nameElements[index + 1]; // pick a name (start from the 2nd one)
    const targetLetters = targetName.querySelectorAll(".letter"); // gets it's letters

    img.addEventListener("mouseenter", () => { // when mouse hover over the image

      // Enlarges the image
      gsap.to(img, {
        width: 140,
        height: 140,
        duration: 0.4,
        ease: "power4.out"
      });

      gsap.to(defaultLetters, { // our "The Squad" letters
        y: "100%", // take them down out of the view
        duration: 0.5,
        ease: "power4.out",
        stagger: { each: 0.025, from: "center" } // stagger means each letter animates slightly after the previous one, starting from center
      });
      defaultName.querySelector("h1").style.opacity = "0"; // converts the opactiy to 0

      gsap.to(targetLetters, { // gets up our targeted image's letters
        y: "0%",
        duration: 0.6,
        ease: "power4.out",
        stagger: { each: 0.03, from: "center" }
      });
      targetName.querySelector("h1").style.opacity = "1"; // opacity is 1 
    });

    img.addEventListener("mouseleave", () => { // when mouse leaves the img

      // shrinks back to original size
      gsap.to(img, {
        width: 70,
        height: 70,
        duration: 0.4,
        ease: "power4.out"
      });

      gsap.to(targetLetters, { // moves the hovered name's letters back down
        y: "100%",
        duration: 0.6,
        ease: "power4.out",
        stagger: { each: 0.03, from: "center" }
      });
      targetName.querySelector("h1").style.opacity = "0";

      gsap.to(defaultLetters, { // our default "The Squad is up again"
        y: "0%",
        duration: 0.6,
        ease: "power4.out",
        stagger: { each: 0.03, from: "center" }
      });
      defaultName.querySelector("h1").style.opacity = "1";
    });
  });
});
