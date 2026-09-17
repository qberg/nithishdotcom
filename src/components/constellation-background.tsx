"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
};

const STAR_COUNT = 70;
const LINK_DISTANCE = 130;
const MOUSE_INFLUENCE = 28;

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

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (stars.length === 0) {
        stars = Array.from({ length: STAR_COUNT }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          z: 0.4 + Math.random() * 0.6,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
        }));
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      targetMouseX = event.clientX / width;
      targetMouseY = event.clientY / height;
    };

    const draw = () => {
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      const parallaxX = (mouseX - 0.5) * MOUSE_INFLUENCE;
      const parallaxY = (mouseY - 0.5) * MOUSE_INFLUENCE;

      ctx.clearRect(0, 0, width, height);

      for (const star of stars) {
        if (!reduceMotion) {
          star.x += star.vx * star.z;
          star.y += star.vy * star.z;

          if (star.x < -20) star.x = width + 20;
          if (star.x > width + 20) star.x = -20;
          if (star.y < -20) star.y = height + 20;
          if (star.y > height + 20) star.y = -20;
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
          const dx = ax - bx;
          const dy = ay - by;
          const dist = Math.hypot(dx, dy);

          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(180, 170, 220, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      for (const star of stars) {
        const x = star.x + parallaxX * star.z;
        const y = star.y + parallaxY * star.z;
        const radius = 1 + star.z * 1.4;
        ctx.beginPath();
        ctx.fillStyle = `rgba(210, 205, 235, ${0.35 + star.z * 0.4})`;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-70"
    />
  );
}
