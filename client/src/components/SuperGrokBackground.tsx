import React, { useEffect, useRef } from "react";

const NUM_STARS = 350; // Increased for density
const NUM_PARTICLES = 100; // Increased for density

export default function SuperGrokBackground() {
  const starsRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // Stars
  useEffect(() => {
    const starsContainer = starsRef.current;
    if (!starsContainer) return;
    starsContainer.innerHTML = "";
    const sizes = ["small", "medium", "large"];
    for (let i = 0; i < NUM_STARS; i++) {
      const star = document.createElement("div");
      star.className = `star ${sizes[Math.floor(Math.random() * sizes.length)]}`;
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.background = "#fff"; // Ensure white
      star.style.opacity = String(0.6 + Math.random() * 0.4); // Brighter
      star.style.animationDelay = Math.random() * 3 + "s";
      starsContainer.appendChild(star);
    }
  }, []);

  // Particles
  useEffect(() => {
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;
    particlesContainer.innerHTML = "";
    for (let i = 0; i < NUM_PARTICLES; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 4 + 1;
      particle.style.width = size + "px";
      particle.style.height = size + "px";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.background = "rgba(255,255,255,0.15)"; // Brighter
      animateParticle(particle);
      particlesContainer.appendChild(particle);
    }
    function animateParticle(particle: HTMLDivElement) {
      const duration = Math.random() * 10000 + 5000;
      const startX = parseFloat(particle.style.left);
      const startY = parseFloat(particle.style.top);
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      particle.animate([
        { transform: `translate(0, 0)`, opacity: 0.15 },
        { transform: `translate(${endX - startX}vw, ${endY - startY}vh)`, opacity: 0.3 },
        { transform: `translate(${endX - startX}vw, ${endY - startY}vh)`, opacity: 0.15 }
      ], {
        duration: duration,
        easing: "ease-in-out",
        iterations: Infinity,
        direction: "alternate"
      });
    }
  }, []);

  // Mouse movement for orbs
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const orbs = document.querySelectorAll<HTMLElement>(".floating-orb");
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.5;
        const moveX = (x - 0.5) * 20 * speed;
        const moveY = (y - 0.5) * 20 * speed;
        orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="sg-background"></div>
      <div className="nebula"></div>
      <div className="grid-overlay"></div>
      <div className="stars" ref={starsRef}></div>
      <div className="particles" ref={particlesRef}></div>
      <div className="floating-orb orb1"></div>
      <div className="floating-orb orb2"></div>
      <div className="floating-orb orb3"></div>
    </>
  );
} 