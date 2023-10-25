// src/components/GlowingMouse.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MouseWrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
`;

const MouseGlow1 = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.01;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
`;

const MouseGlow2 = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.01;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
`;
const MouseGlow3 = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.01;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
`;
const MouseGlow4 = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.01;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
`;

const GlowingMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <MouseWrapper style={{ left: position.x, top: position.y }}>
      <MouseGlow1 />
      <MouseGlow2 />
      <MouseGlow3 />
      <MouseGlow4 />
    </MouseWrapper>
  );
};

export default GlowingMouse;