"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface CanvasTextProps {
  text: string;
  colors?: string[];
  animationDuration?: number;
  lineGap?: number;
  backgroundClassName?: string;
  className?: string;
}

export const CanvasText: React.FC<CanvasTextProps> = ({
  text,
  colors = ["#06b6d4", "#3b82f6", "#6366f1"],
  animationDuration = 10,
  lineGap = 4,
  backgroundClassName,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const updateSize = useCallback(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, []);

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [updateSize]);

  useEffect(() => {
    if (!canvasRef.current || size.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let startTime: number;

    const render = (time: number) => {
      if (!startTime) startTime = time;
      const progress = ((time - startTime) / (animationDuration * 1000)) % 1;

      ctx.clearRect(0, 0, size.width, size.height);

      const lineCount = Math.ceil(size.height / lineGap);

      for (let i = 0; i < lineCount; i++) {
        const y = i * lineGap;
        const colorIndex = Math.floor((progress + i / lineCount) * colors.length) % colors.length;
        ctx.strokeStyle = colors[colorIndex];
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(size.width, y);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, [size, colors, animationDuration, lineGap]);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block overflow-hidden rounded-lg px-3 py-1", backgroundClassName, className)}
    >
      <canvas
        ref={canvasRef}
        width={size.width}
        height={size.height}
        className="pointer-events-none absolute inset-0 mix-blend-overlay"
      />
      <span className="relative z-10">{text}</span>
    </div>
  );
};
