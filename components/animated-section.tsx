"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  threshold?: number
  delay?: number
  animation?: "fade-up" | "fade-in" | "slide-in-right" | "slide-in-left"
}

export function AnimatedSection({
  children,
  className,
  id,
  threshold = 0.2,
  delay = 0,
  animation = "fade-up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    switch (animation) {
      case "fade-up":
        return "animate-[fade-in_0.6s_ease-out,slide-in-up_0.6s_ease-out]"
      case "fade-in":
        return "animate-fade-in"
      case "slide-in-right":
        return "animate-slide-in-right"
      case "slide-in-left":
        return "animate-slide-in-left"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        getAnimationClass(),
        isVisible ? "" : animation === "fade-up" ? "translate-y-10" : "",
        `transition-all duration-700 ease-out`,
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
