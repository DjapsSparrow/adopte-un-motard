"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

export type TransitionVariant =
  | "circle"
  | "square"
  | "triangle"
  | "diamond"
  | "hexagon"
  | "rectangle"
  | "star"

interface AnimatedThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
  variant?: TransitionVariant
  fromCenter?: boolean
}

function polygonCollapsed(cx: number, cy: number, vertexCount: number): string {
  const pairs = Array.from(
    { length: vertexCount },
    () => `${cx}px ${cy}px`
  ).join(", ")
  return `polygon(${pairs})`
}

function getThemeTransitionClipPaths(
  variant: TransitionVariant,
  cx: number,
  cy: number,
  maxRadius: number,
  viewportWidth: number,
  viewportHeight: number
): [string, string] {
  switch (variant) {
    case "circle":
      return [
        `circle(0px at ${cx}px ${cy}px)`,
        `circle(${maxRadius}px at ${cx}px ${cy}px)`,
      ]
    case "square": {
      const halfW = Math.max(cx, viewportWidth - cx)
      const halfH = Math.max(cy, viewportHeight - cy)
      const halfSide = Math.max(halfW, halfH) * 1.05
      const end = [
        `${cx - halfSide}px ${cy - halfSide}px`,
        `${cx + halfSide}px ${cy - halfSide}px`,
        `${cx + halfSide}px ${cy + halfSide}px`,
        `${cx - halfSide}px ${cy + halfSide}px`,
      ].join(", ")
      return [polygonCollapsed(cx, cy, 4), `polygon(${end})`]
    }
    default:
      return [
        `circle(0px at ${cx}px ${cy}px)`,
        `circle(${maxRadius}px at ${cx}px ${cy}px)`,
      ]
  }
}

export const AnimatedThemeToggler = ({
  className,
  duration = 500,
  variant = "circle",
  fromCenter = false,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isLight, setIsLight] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const updateTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"))
    }
    updateTheme()
    
    // Initial check from localStorage (Default to Light)
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.documentElement.classList.remove("light");
        setIsLight(false);
    } else {
        document.documentElement.classList.add("light");
        setIsLight(true);
    }

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    const viewportWidth = window.visualViewport?.width ?? window.innerWidth
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight

    let x: number, y: number
    if (fromCenter) {
      x = viewportWidth / 2
      y = viewportHeight / 2
    } else {
      const { top, left, width, height } = button.getBoundingClientRect()
      x = left + width / 2
      y = top + height / 2
    }

    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    )

    const applyTheme = () => {
      const nextIsLight = !isLight
      setIsLight(nextIsLight)
      if (nextIsLight) {
        document.documentElement.classList.add("light")
        localStorage.setItem("theme", "light")
      } else {
        document.documentElement.classList.remove("light")
        localStorage.setItem("theme", "dark")
      }
    }

    if (!document.startViewTransition) {
      applyTheme()
      return
    }

    const root = document.documentElement
    root.dataset.themeVt = "active"
    root.style.setProperty("--theme-toggle-vt-duration", `${duration}ms`)
    
    const cleanup = () => {
      delete root.dataset.themeVt
      root.style.removeProperty("--theme-toggle-vt-duration")
    }

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })
    
    transition.finished.finally(cleanup)

    transition.ready.then(() => {
      const clipPath = getThemeTransitionClipPaths(variant, x, y, maxRadius, viewportWidth, viewportHeight)
      document.documentElement.animate(
        { clipPath },
        {
          duration,
          easing: "ease-in-out",
          fill: "forwards",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    })
  }, [variant, fromCenter, duration, isLight])

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={className}
      {...props}
    >
      {isLight ? (
        <div className="relative group/icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-deep-charcoal opacity-70 group-hover/icon:opacity-100 transition-opacity">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v18" className="opacity-20" />
            <path d="M3 12h18" className="opacity-20" />
          </svg>
        </div>
      ) : (
        <div className="relative group/icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent drop-shadow-[0_0_10px_rgba(0,163,255,1)]">
            <circle cx="12" cy="12" r="9" className="fill-accent/20" />
            <circle cx="12" cy="12" r="3" className="fill-accent" />
            <line x1="12" y1="3" x2="12" y2="1" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          </svg>
        </div>
      )}
      <span className="sr-only">Mode Phare Allumé / Éteint</span>
    </button>
  )
}
