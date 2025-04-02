"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { Award, Building, Calendar, FileText } from "lucide-react"
import { useInView } from "react-intersection-observer"

const statistics = [
  {
    icon: Building,
    value: 52,
    label: "DRDO Labs",
    suffix: "+",
  },
  {
    icon: FileText,
    value: 1800,
    label: "Patents Filed",
    suffix: "+",
  },
  {
    icon: Award,
    value: 450,
    label: "Technologies Transferred",
    suffix: "+",
  },
  {
    icon: Calendar,
    value: 65,
    label: "Years of Service",
    suffix: "",
  },
]

export default function StatisticsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-12 bg-[#f5f5f5] dark:bg-gray-800 rounded-lg my-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              animate={inView}
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
  animate,
}: {
  icon: React.ElementType
  value: number
  label: string
  suffix: string
  animate: boolean
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
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 h-16 w-16 rounded-full bg-[#0077cc] text-white flex items-center justify-center">
        <Icon className="h-8 w-8" />
      </div>
      <div className="text-4xl font-bold text-[#003366] dark:text-white mb-2">
        {animate ? count : 0}
        {suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  )
}

