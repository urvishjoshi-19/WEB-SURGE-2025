"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Award, Building, Calendar, FileText } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const statistics = [
  {
    icon: Building,
    value: 52,
    label: "DRDO Labs",
    suffix: "+",
    tooltip: "Research laboratories across India working on various defence technologies",
  },
  {
    icon: FileText,
    value: 1800,
    label: "Patents Filed",
    suffix: "+",
    tooltip: "Intellectual property rights secured for indigenous defence technologies",
  },
  {
    icon: Award,
    value: 450,
    label: "Technologies Transferred",
    suffix: "+",
    tooltip: "Defence technologies transferred to industry partners for production",
  },
  {
    icon: Calendar,
    value: 65,
    label: "Years of Service",
    suffix: "",
    tooltip: "Decades of dedication to strengthening India's defence capabilities",
  },
]

export default function AnimatedStatistics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm rounded-2xl" />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-blue-500/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 mb-12 text-center"
        >
          DRDO by the Numbers
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              tooltip={stat.tooltip}
              animate={inView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({
  icon: Icon,
  value,
  label,
  suffix,
  tooltip,
  animate,
  index,
}: {
  icon: React.ElementType
  value: number
  label: string
  suffix: string
  tooltip: string
  animate: boolean
  index: number
}) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const animationDuration = 2000 // ms
  const frameDuration = 1000 / 60 // 60fps
  const totalFrames = Math.round(animationDuration / frameDuration)

  useEffect(() => {
    if (animate) {
      let frame = 0

      const counter = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        const easeOutQuad = 1 - (1 - progress) * (1 - progress)
        countRef.current = Math.floor(easeOutQuad * value)
        setCount(countRef.current)

        if (frame === totalFrames) {
          clearInterval(counter)
        }
      }, frameDuration)

      return () => clearInterval(counter)
    }
  }, [animate, value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              className="mb-6 h-20 w-20 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center relative cursor-help"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Icon className="h-10 w-10" />
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" }}
                animate={{
                  boxShadow: animate ? "0 0 0 10px rgba(59, 130, 246, 0)" : "0 0 0 0 rgba(59, 130, 246, 0)",
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  repeatType: "reverse",
                }}
              />
            </motion.div>
          </TooltipTrigger>
          <TooltipContent className="bg-black/80 backdrop-blur-md border-white/10 text-white">
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <motion.div
        className="text-5xl font-bold text-white mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
      >
        {animate ? count : 0}
        {suffix}
      </motion.div>

      <div className="text-white/70 font-medium">{label}</div>
    </motion.div>
  )
}

