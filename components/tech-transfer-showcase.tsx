"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Building, Calendar, ArrowRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useMobile } from "@/hooks/use-mobile"

// Sample tech transfer data
const techTransfers = [
  {
    id: 1,
    name: "Advanced Composite Materials",
    category: "Materials Technology",
    description: "High-performance composite materials for aerospace and defense applications",
    image: "/placeholder.svg?height=300&width=400",
    transferredTo: ["Hindustan Aeronautics Limited", "Tata Advanced Materials", "Larsen & Toubro Defence"],
    transferDate: "2023-09-15",
    applications: ["Aircraft structural components", "Ballistic protection systems", "Radome construction"],
    benefits: [
      "50% weight reduction compared to traditional materials",
      "Enhanced strength-to-weight ratio",
      "Improved resistance to environmental degradation",
      "Reduced radar signature",
    ],
    impact:
      "The transfer of advanced composite materials technology has enabled Indian defense manufacturers to produce lighter, stronger components for various platforms, enhancing performance while reducing fuel consumption and increasing payload capacity.",
  },
  {
    id: 2,
    name: "Electro-Optical Fire Control System",
    category: "Electronics & Optics",
    description: "Precision targeting and fire control system for armored vehicles",
    image: "/placeholder.svg?height=300&width=400",
    transferredTo: ["Bharat Electronics Limited", "Mahindra Defence Systems"],
    transferDate: "2023-05-22",
    applications: ["Main battle tanks", "Infantry combat vehicles", "Artillery systems"],
    benefits: [
      "Day/night operation capability",
      "Automatic target tracking",
      "Integrated ballistic computer",
      "Laser rangefinder with 5km range",
    ],
    impact:
      "This technology transfer has significantly enhanced the combat effectiveness of Indian-made armored vehicles, providing them with state-of-the-art targeting capabilities comparable to global standards.",
  },
  {
    id: 3,
    name: "Autonomous Navigation System",
    category: "Artificial Intelligence",
    description: "AI-powered navigation system for unmanned vehicles",
    image: "/placeholder.svg?height=300&width=400",
    transferredTo: ["Tata Elxsi", "Dynamatic Technologies", "Adani Defence"],
    transferDate: "2023-11-30",
    applications: ["Unmanned ground vehicles", "Autonomous underwater vehicles", "Drone swarm coordination"],
    benefits: [
      "GPS-denied navigation capability",
      "Real-time obstacle avoidance",
      "Terrain adaptation algorithms",
      "Multi-vehicle coordination",
    ],
    impact:
      "The transfer of autonomous navigation technology has accelerated India's capabilities in unmanned systems, enabling the development of various platforms that can operate in contested environments without human intervention.",
  },
  {
    id: 4,
    name: "Battlefield Management System",
    category: "Command & Control",
    description: "Integrated command and control system for battlefield coordination",
    image: "/placeholder.svg?height=300&width=400",
    transferredTo: ["Bharat Electronics Limited", "Tata Power SED", "Alpha Design Technologies"],
    transferDate: "2022-08-10",
    applications: ["Tactical headquarters", "Armored vehicle integration", "Infantry command posts"],
    benefits: [
      "Real-time situational awareness",
      "Secure communications network",
      "Automated resource allocation",
      "Integrated intelligence feeds",
    ],
    impact:
      "This technology has transformed battlefield coordination for Indian armed forces, providing commanders with comprehensive situational awareness and enabling faster, more informed decision-making in complex operational environments.",
  },
  {
    id: 5,
    name: "High-Energy Laser Technology",
    category: "Directed Energy",
    description: "Compact high-energy laser systems for counter-drone and close-in defense",
    image: "/placeholder.svg?height=300&width=400",
    transferredTo: ["Bharat Electronics Limited", "Kalyani Group"],
    transferDate: "2023-02-18",
    applications: ["Counter-drone systems", "Close-in weapon systems", "Border security"],
    benefits: [
      "Precision engagement capability",
      "Low cost per engagement",
      "Minimal collateral damage",
      "Rapid target neutralization",
    ],
    impact:
      "The transfer of high-energy laser technology has provided Indian defense forces with cost-effective counter-measures against emerging threats like drone swarms, while also establishing India as a player in the directed energy weapons domain.",
  },
  {
    id: 6,
    name: "Quantum Encryption System",
    category: "Cybersecurity",
    description: "Quantum-resistant encryption for secure military communications",
    image: "/placeholder.svg?height=300&width=400",
    transferredTo: ["Data Patterns India", "Bharat Electronics Limited", "Tech Mahindra"],
    transferDate: "2023-07-05",
    applications: ["Secure command networks", "Diplomatic communications", "Critical infrastructure protection"],
    benefits: [
      "Quantum-resistant algorithms",
      "Real-time encryption key generation",
      "Tamper-evident communication channels",
      "Post-quantum security",
    ],
    impact:
      "This technology transfer has strengthened India's cybersecurity posture, ensuring that military and strategic communications remain secure even against advanced quantum computing-based attacks.",
  },
]

export default function TechTransferShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const [selectedTech, setSelectedTech] = useState<number | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = isMobile ? 300 : 400

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500"
        >
          Technology Transfer Showcase
        </motion.h2>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="border-white/10 text-white hover:bg-white/10 hover:text-white h-9 w-9"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="border-white/10 text-white hover:bg-white/10 hover:text-white h-9 w-9"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {techTransfers.map((tech, index) => (
          <HoverCard key={tech.id} openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[300px] max-w-[300px] snap-start"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 text-white overflow-hidden cursor-pointer group">
                      <div className="relative">
                        <div className="relative h-[180px] w-full overflow-hidden">
                          <Image
                            src={tech.image || "/placeholder.svg"}
                            alt={tech.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        </div>

                        {/* Holographic effect overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                          <div className="absolute inset-0">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute h-full w-1 bg-blue-400/10"
                                style={{ left: `${i * 25}%` }}
                                animate={{
                                  opacity: [0.1, 0.3, 0.1],
                                  height: ["0%", "100%", "0%"],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatType: "loop",
                                }}
                              />
                            ))}
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute top-0 h-1 w-full bg-blue-400/10"
                                style={{ top: `${i * 25}%` }}
                                animate={{
                                  opacity: [0.1, 0.3, 0.1],
                                  width: ["0%", "100%", "0%"],
                                }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  repeatType: "loop",
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        <div className="absolute top-2 right-2">
                          <Badge className="bg-blue-500/80 text-white hover:bg-blue-500/90">{tech.category}</Badge>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                          {tech.name}
                        </h3>
                        <p className="text-white/70 text-sm mb-3">{tech.description}</p>
                        <div className="flex justify-between items-center text-xs text-white/60">
                          <div className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            <span>{tech.transferredTo.length} Partners</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(tech.transferDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                        <Zap className="h-6 w-6 text-blue-400" />
                        <span>{tech.name}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="relative h-[250px] rounded-lg overflow-hidden mb-4">
                          <Image src={tech.image || "/placeholder.svg"} alt={tech.name} fill className="object-cover" />
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                              <Building className="h-4 w-4 text-blue-400" />
                              Technology Partners
                            </h4>
                            <div className="space-y-2">
                              {tech.transferredTo.map((partner, index) => (
                                <div key={index} className="bg-white/5 p-2 rounded-md text-white/80 text-sm">
                                  {partner}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-blue-400" />
                              Transfer Date
                            </h4>
                            <div className="bg-white/5 p-2 rounded-md text-white/80 text-sm">
                              {new Date(tech.transferDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <Badge className="bg-blue-500/80 text-white hover:bg-blue-500/90">{tech.category}</Badge>

                        <p className="text-white/90">{tech.description}</p>

                        <div>
                          <h4 className="text-white font-medium mb-2">Applications</h4>
                          <ul className="space-y-1">
                            {tech.applications.map((app, index) => (
                              <li key={index} className="flex items-start gap-2 text-white/80">
                                <span className="text-blue-400">•</span>
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-medium mb-2">Key Benefits</h4>
                          <ul className="space-y-1">
                            {tech.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start gap-2 text-white/80">
                                <span className="text-blue-400">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-medium mb-2">Strategic Impact</h4>
                          <p className="text-white/80">{tech.impact}</p>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Request Technology Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-black/90 backdrop-blur-xl border-white/10 text-white">
              <div className="space-y-2">
                <Badge className="bg-blue-500/80 text-white hover:bg-blue-500/90">{tech.category}</Badge>
                <h4 className="text-lg font-semibold">{tech.name}</h4>
                <p className="text-sm text-white/80">{tech.description}</p>
                <div className="pt-2 flex justify-between items-center text-xs text-white/60">
                  <div className="flex items-center gap-1">
                    <Building className="h-3 w-3" />
                    <span>{tech.transferredTo.length} Partners</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-400 hover:text-white hover:bg-blue-500/20 h-8 px-2"
                  >
                    <span className="text-xs">View Details</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </section>
  )
}

