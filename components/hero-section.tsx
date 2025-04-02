"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/41.jpg",
    title: "Advancing Defence Technology",
    description: "DRDO is working at the cutting edge of technology to safeguard India's sovereignty",
    tag: "Featured",
  },
  {
    id: 2,
    image: "/42.jpg",
    title: "Indigenous Development",
    description: "Building self-reliance in critical defence technologies and systems",
    tag: "Latest",
  },
  {
    id: 3,
    image: "/43.jpg",
    title: "Research Excellence",
    description: "Pioneering research in advanced defence technologies and systems",
    tag: "Research",
  },
  {
    id: 4,
    image: "/44.jpg",
    title: "Strategic Partnerships",
    description: "Collaborating with industry and academia to strengthen defence capabilities",
    tag: "Collaboration",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 700)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity }}
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden"
    >
      {slides.map((slide, index) => (
        <AnimatePresence key={slide.id}>
          {index === currentSlide && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <motion.div style={{ y }} className="absolute inset-0">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-blue-500/80 backdrop-blur-sm text-white rounded-full">
                    {slide.tag}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-3 text-white drop-shadow-md">{slide.title}</h2>
                  <p className="text-sm md:text-lg text-white/90 max-w-2xl">{slide.description}</p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10 rounded-full h-10 w-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50 z-10 rounded-full h-10 w-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-1/2 max-w-xs">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear", repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        </div>
        <div className="flex justify-center mt-2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentSlide ? "bg-blue-500 scale-125" : "bg-white/50",
              )}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setCurrentSlide(index)
                setTimeout(() => setIsAnimating(false), 700)
              }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

