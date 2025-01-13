// src/animations/gsapAnimations.js
import gsap from "gsap";

// Function to add animation to `.animateBox1`
export const animateBox1 = () => {
  gsap.to(".animation1", {
    x: 1000,
    duration: 2,
    backgroundColor: "blue",
    borderRadius: "200px",
  });
};

// Function to add animation to `.animateBox2`
export const animateBox2 = () => {
  gsap.from(".animation2", {
    x: 500,
    y: 100,
    duration: 2,
    backgroundColor: "palevioletred",
    borderRadius: "200px",
  });
};
