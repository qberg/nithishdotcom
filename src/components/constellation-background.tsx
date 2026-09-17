"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
};

const STAR_COUNT = 95;
const LINK_DISTANCE = 150;
const MOUSE_INFLUENCE = 36;

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
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.35 + Math.random() * 0.65,
        // Slow ambient drift
        vx: (Math.random() - 0.5) * 0.035,
        vy: (Math.random() - 0.5) * 0.035,
      }));
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
      mouseX += (targetMouseX - mouseX) * 0.025;
      mouseY += (targetMouseY - mouseY) * 0.025;

      const parallaxX = (mouseX - 0.5) * MOUSE_INFLUENCE;
      const parallaxY = (mouseY - 0.5) * MOUSE_INFLUENCE;

      ctx.clearRect(0, 0, width, height);

      if (!reduceMotion) {
        for (const star of stars) {
          star.x += star.vx * star.z;
          star.y += star.vy * star.z;

          if (star.x < -30) star.x = width + 30;
          if (star.x > width + 30) star.x = -30;
          if (star.y < -30) star.y = height + 30;
          if (star.y > height + 30) star.y = -30;
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
            const alpha = (1 - dist / LINK_DISTANCE) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(186, 176, 230, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      for (const star of stars) {
        const x = star.x + parallaxX * star.z;
        const y = star.y + parallaxY * star.z;
        const radius = 1.2 + star.z * 1.8;

        ctx.beginPath();
        ctx.fillStyle = `rgba(225, 220, 245, ${0.45 + star.z * 0.45})`;
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
