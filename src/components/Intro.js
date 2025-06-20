import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #000;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const TextContainer = styled.div`
  position: relative;
  z-index: 5;
  text-align: center;
  cursor: pointer;
  
  h1 {
    font-size: 4rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 1rem;
    letter-spacing: 2px;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  h3 {
    color: #fff;
    padding: 0.7rem 2.5rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    letter-spacing: 5px;
    background: #6b46c1;
    display: inline-block;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding: 0.5rem 1.5rem;
    }
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
`;

const Intro = ({ click }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Golden particle sphere
    const particles = [];
    const particleCount = 1200;
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.3;
    
    // Create particles on sphere surface
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      particles.push({
        x: x,
        y: y,
        z: z,
        originalX: x,
        originalY: y,
        originalZ: z,
        size: Math.random() * 2 + 0.5,
        brightness: Math.random()
      });
    }

    let rotation = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - canvas.width / 2) * 0.0005;
      mouseY = (e.clientY - rect.top - canvas.height / 2) * 0.0005;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      rotation += 0.003;

      // Sort particles by z-depth for proper rendering
      const sortedParticles = [...particles].sort((a, b) => b.z - a.z);

      sortedParticles.forEach((particle) => {
        // Rotate around Y-axis
        let x = particle.originalX * Math.cos(rotation + mouseX) - particle.originalZ * Math.sin(rotation + mouseX);
        let z = particle.originalX * Math.sin(rotation + mouseX) + particle.originalZ * Math.cos(rotation + mouseX);
        
        // Rotate around X-axis based on mouse
        let y = particle.originalY * Math.cos(mouseY) - z * Math.sin(mouseY);
        z = particle.originalY * Math.sin(mouseY) + z * Math.cos(mouseY);

        // Update particle position
        particle.x = x;
        particle.y = y;
        particle.z = z;

        // Perspective projection
        const perspective = 500;
        const scale = perspective / (perspective + z);
        const x2d = centerX + x * scale;
        const y2d = centerY + y * scale;

        // Size based on z-depth
        const size = particle.size * scale;

        // Golden color with depth
        const alpha = scale * particle.brightness;
        const hue = 45 + (z / radius) * 15; // Golden hue range
        const lightness = 50 + (z / radius) * 20;

        // Draw particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 100%, ${lightness}%, ${alpha})`;
        ctx.fill();

        // Store screen position for connections
        particle.screenX = x2d;
        particle.screenY = y2d;
        particle.scale = scale;
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.15)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (distance < 40 && particles[i].scale > 0.3 && particles[j].scale > 0.3) {
            ctx.beginPath();
            ctx.moveTo(particles[i].screenX, particles[i].screenY);
            ctx.lineTo(particles[j].screenX, particles[j].screenY);
            ctx.globalAlpha = (1 - distance / 40) * Math.min(particles[i].scale, particles[j].scale);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Canvas ref={canvasRef} />
      <TextContainer onClick={click}>
        <h1>Vaikunth's Voyage</h1>
        <h3>DATA SCIENTIST</h3>
        <p>Click on the name or press enter to continue</p>
      </TextContainer>
    </Box>
  );
};

export default Intro;
