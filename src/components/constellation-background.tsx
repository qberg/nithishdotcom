"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  /** How often this star gently changes direction */
  wander: number;
  angle: number;
  speed: number;
};

const STAR_COUNT = 70;
const LINK_DISTANCE = 120;
const MOUSE_INFLUENCE = 22;

export default function ConstellationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let animationId = 0;
    let mouseX = 0.5;
    let mouseY = 0.5;
    let targetMouseX = 0.5;
    let targetMouseY = 0.5;

    const createStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.012 + Math.random() * 0.028;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.35 + Math.random() * 0.65,
          angle,
          speed,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          wander: 0.004 + Math.random() * 0.012,
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (stars.length === 0) {
        createStars();
      } else {
        for (const star of stars) {
          star.x = Math.min(Math.max(star.x, 0), width);
          star.y = Math.min(Math.max(star.y, 0), height);
        }
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!width || !height) return;
      targetMouseX = event.clientX / width;
      targetMouseY = event.clientY / height;
    };

    const drawFrame = () => {
      mouseX += (targetMouseX - mouseX) * 0.02;
      mouseY += (targetMouseY - mouseY) * 0.02;

      const parallaxX = (mouseX - 0.5) * MOUSE_INFLUENCE;
      const parallaxY = (mouseY - 0.5) * MOUSE_INFLUENCE;

      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        for (const star of stars) {
          // Independent wandering: each star slowly steers on its own path
          star.angle += (Math.random() - 0.5) * star.wander * 2;
          star.speed += (Math.random() - 0.5) * 0.0008;
          star.speed = Math.min(0.045, Math.max(0.008, star.speed));
          star.vx = Math.cos(star.angle) * star.speed * star.z;
          star.vy = Math.sin(star.angle) * star.speed * star.z;

          star.x += star.vx;
          star.y += star.vy;

          // Soft wrap so roaming feels continuous
          if (star.x < -40) star.x = width + 40;
          if (star.x > width + 40) star.x = -40;
          if (star.y < -40) star.y = height + 40;
          if (star.y > height + 40) star.y = -40;
        }
      }

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const a = stars[i];
          const b = stars[j];
          const ax = a.x + parallaxX * a.z;
          const ay = a.y + parallaxY * a.z;
          const bx = b.x + parallaxX * b.z;
          const by = b.y + parallaxY * b.z;
          const dist = Math.hypot(ax - bx, ay - by);

          if (dist < LINK_DISTANCE) {
            // ~half previous line intensity
            const alpha = (1 - dist / LINK_DISTANCE) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(186, 176, 230, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      for (const star of stars) {
        const x = star.x + parallaxX * star.z;
        const y = star.y + parallaxY * star.z;
        const radius = 1 + star.z * 1.35;
        // ~half previous dot intensity
        ctx.beginPath();
        ctx.fillStyle = `rgba(225, 220, 245, ${0.22 + star.z * 0.22})`;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      drawFrame();
      if (!reduceMotion) {
        animationId = window.requestAnimationFrame(loop);
      }
    };

    resize();
    loop();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
