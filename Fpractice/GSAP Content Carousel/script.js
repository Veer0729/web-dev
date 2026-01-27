import slides from "./slides.js";

document.addEventListener("DOMContentLoaded", () => {
    const totalslides = slides.length;
    let current = 1;

    let isAnimating = false;
    let scrollAllowed = true;
    let lastscrolltime = 0;

    function createSlide(slideIndex) {
        const slideData = slides[slideIndex -1];

        const slide = document.createElement("div");
        slide.className = "slide";

        const slideImg = document.createElement("div");
        slideImg.className = "slide-img";
        const img = document.createElement("img");
        img.src = slideData.slideImg;
        img.alt = "";
        slideImg.appendChild(img);

        const slideHeader = document.createElement("div");
        slideHeader.className = "slide-header";

        const slideTitle = document.createElement("div");
        slideTitle.className = "slide-title";
        const h1 = document.createElement("h1");
        h1.textContent = slideData.slideTitle;
        slideTitle.appendChild(h1);

        const slideDescription = document.createElement("div");
        slideDescription.className = "slide-description";
        const p = document.createElement("p");
        p.textContent = slideData.slideDescription;
        slideDescription.appendChild(p);

        const slideLink = document.createElement("div");
        slideLink.className = "slide-link";
        const a = document.createElement("a");
        a.href = slideData.slideUrl;
        a.textContent = "View Project";
        slideLink.appendChild(a);

        slideHeader.appendChild(slideTitle);
        slideHeader.appendChild(slideDescription);
        slideHeader.appendChild(slideLink);

        const slideInfo = document.createElement("div");
        slideInfo.className = "slide-info";

        const slideTags = document.createElement("div");
        slideTags.className = "slide-tags";
        const tagsLabel = document.createElement("p");
        tagsLabel.textContent = "Tags";
        slideTags.appendChild(tagsLabel);

        slideData.slideTags.forEach((tag) => {
        const tagP = document.createElement("p");
        tagP.textContent = tag;
        slideTags.appendChild(tagP);
        });

        const slideIndexWrapper = document.createElement("div");
        slideIndexWrapper.className = "slide-index-wrapper";
        const slideIndexCopy = document.createElement("p");
        slideIndexCopy.textContent = slideIndex.toString().padStart(2, "0");
        const slideIndexSeparator = document.createElement("p");
        slideIndexSeparator.textContent = "/";
        const slidesTotalCount = document.createElement("p");
        slidesTotalCount.textContent = totalSlides.toString().padStart(2, "0");

        slideIndexWrapper.appendChild(slideIndexCopy);
        slideIndexWrapper.appendChild(slideIndexSeparator);
        slideIndexWrapper.appendChild(slidesTotalCount);

        slideInfo.appendChild(slideTags);
        slideInfo.appendChild(slideIndexWrapper);

        slide.appendChild(slideImg);
        slide.appendChild(slideHeader);
        slide.appendChild(slideInfo);

        return slide;
    }

    function splitText(slide) {
        const slideHeader = slide.querySelector(".slide-title h1");
        if (slideHeader) {
        SplitText.create(slideHeader, {
        type: "words",
        wordsClass: "word",
        mask: "words",
    });
}

const slideContent = slide.querySelectorAll("p, a");
slideContent.forEach((element) => {
    SplitText.create(element, {
        type: "lines",
        linesClass: "line",
        mask: "lines",
        reduceWhiteSpace: false,
        });
    });
}
})