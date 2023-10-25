// TriangleRain.js
import React, { useEffect } from 'react';
import '../styles/TriangleRain.css'; // Import your CSS file for the triangle rain animation

const TriangleRain = () => {
  useEffect(() => {
    const rainContainer = document.createElement('div');
    rainContainer.classList.add('rain-container');

    for (let i = 0; i < 20; i++) { // Create 50 triangles (you can adjust the number)
      const triangle = document.createElement('div');
      triangle.classList.add('triangle');

      // Random horizontal position
      triangle.style.left = `${Math.random() * 100}vw`;

      // Random falling speed
      triangle.style.animationDuration = `${Math.random() * 4 + 5}s`;

      // Random opacity
      triangle.style.opacity = Math.random();

      // Random rotation angle between -20 and 20 degrees
      const randomRotation = Math.random() * 60 - 30;
      triangle.style.setProperty('--random-rotation', `${randomRotation}deg`);

      // Random animation delay between 0 and 5 seconds
      triangle.style.animationDelay = `${Math.random() * 5}s`;

      rainContainer.appendChild(triangle);
    }

    document.body.appendChild(rainContainer);

    return () => {
      rainContainer.remove(); // Clean up on component unmount
    };
  }, []);

  return null; // No visible component for the triangle rain, it's all CSS
};

export default TriangleRain;