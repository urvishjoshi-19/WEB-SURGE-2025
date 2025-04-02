"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Rocket, Zap, Brain, Sparkles } from "lucide-react"

// Career opportunities data
const careerOpportunities = [
  {
    id: 1,
    title: "Scientist 'B' - Aerospace Engineering",
    category: "Research & Development",
    description: "Join our team developing next-generation aerospace technologies for defense applications.",
    requirements: [
      "Ph.D. or M.Tech in Aerospace Engineering",
      "Experience in computational fluid dynamics",
      "Knowledge of advanced materials",
    ],
    icon: Rocket,
  },
  {
    id: 2,
    title: "Technical Officer - Electronics & Communication",
    category: "Technical",
    description: "Support cutting-edge research in radar and communication systems for defense platforms.",
    requirements: [
      "B.Tech in Electronics & Communication",
      "Experience with RF systems",
      "Knowledge of signal processing",
    ],
    icon: Zap,
  },
  {
    id: 3,
    title: "Research Associate - Artificial Intelligence",
    category: "Research & Development",
    description: "Work on AI applications for autonomous systems and defense intelligence.",
    requirements: [
      "M.Tech/Ph.D. in Computer Science",
      "Experience in machine learning",
      "Knowledge of neural networks",
    ],
    icon: Brain,
  },
  {
    id: 4,
    title: "Scientist 'C' - Materials Science",
    category: "Research & Development",
    description:
      "Lead research in advanced materials for defense applications including armor and stealth technologies.",
    requirements: [
      "Ph.D. in Materials Science",
      "Experience with composite materials",
      "Knowledge of material characterization techniques",
    ],
    icon: Sparkles,
  },
]

export default function JoinDrdoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  return (
    <section ref={containerRef} className="py-16 relative overflow-hidden">
      {/* Background video/animation effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm -z-10" />
  
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
  
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-500/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}