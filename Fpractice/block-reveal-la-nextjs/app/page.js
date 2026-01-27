"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "../style.css";

export default function Home() {
  useEffect(() => {
    function startLoader() {
      let counterElement = document.querySelector(".counter");
      let currentValue = 0;
      function updateCounter() {
        if (currentValue === 100) return;
        currentValue += Math.floor(Math.random() * 10) + 1;
        if (currentValue > 100) currentValue = 100;
        counterElement.textContent = currentValue;
        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }
      updateCounter();
    }
    startLoader();
    if (window.gsap) {
      window.gsap.to(".counter", 0.25, { delay: 3.5, opacity: 0 });
      window.gsap.to(".bar", 1.5, {
        delay: 3.5,
        height: 0,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
      });
      window.gsap.from(".h1", 1.5, {
        delay: 4,
        y: 700,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
      });
      window.gsap.from(".hero", 2, {
        delay: 4.5,
        y: 400,
        ease: "power4.inOut",
      });
    }
  }, []);

  useEffect(() => {
    // Dynamically load GSAP from CDN
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js";
    script.async = true;
    script.onload = () => {
      if (window.gsap) {
        // Re-run GSAP animations after script loads
        window.gsap.to(".counter", 0.25, { delay: 3.5, opacity: 0 });
        window.gsap.to(".bar", 1.5, {
          delay: 3.5,
          height: 0,
          stagger: { amount: 0.5 },
          ease: "power4.inOut",
        });
        window.gsap.from(".h1", 1.5, {
          delay: 4,
          y: 700,
          stagger: { amount: 0.5 },
          ease: "power4.inOut",
        });
        window.gsap.from(".hero", 2, {
          delay: 4.5,
          y: 400,
          ease: "power4.inOut",
        });
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <h1 className="counter">0</h1>
      <div className="overlay">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="bar" key={i}></div>
        ))}
      </div>
      <div className="container">
        <nav>
          <div>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <a href="#">Playground</a>
          </div>
        </nav>
        <div className="header">
          <div className="h1">f</div>
          <div className="h1">l</div>
          <div className="h1">a</div>
          <div className="h1">u</div>
        </div>
        <div className="hero">
          <img src="/hero1.jpg" alt="hero" />
        </div>
      </div>
    </>
  );
}
