// src/components/GsapBoxAnimation.jsx
import React, { useState } from "react";
import { animateBox1, animateBox2 } from "../Animations/gsapAnimation.js"; // Import GSAP animation functions

const GsapBoxAnimation = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  // Handle button click to trigger animations
  const handleStartAnimation = () => {
    setTriggerAnimation(true); // This will trigger the animation class
    animateBox1();  // Trigger GSAP animation for box 1
    animateBox2();  // Trigger GSAP animation for box 2
  };

  return (
    <div className="m-4">
      <h1>Gsap Box Animation</h1>
      <button onClick={handleStartAnimation} className="p-2 mb-4 rounded-full border-1 bg-gradient-to-tr to-gray-950 from-gray-100 ring-inset ring-1 ring-gray-50/5">Start Animation</button>
      <div className={`animation1 bg-sky-400 h-[200px] w-[200px]`}></div>
      <div className={`animation2 bg-pink-400 h-[200px] w-[200px]`}></div>
    </div>
  );
};

export default GsapBoxAnimation;
