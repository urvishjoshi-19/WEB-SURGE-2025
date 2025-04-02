"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useMobile } from "@/hooks/use-mobile"

// Timeline data
const timelineEvents = [
  {
    id: 1,
    year: 1958,
    title: "DRDO Established",
    description:
      "Defence Research and Development Organisation (DRDO) was formed by combining the Technical Development Establishment and the Directorate of Technical Development and Production with the Defence Science Organisation.",
    image: "/drdoest.jpg",
    category: "Organization",
    details:
      "The DRDO was formed to enhance India's indigenous defense capabilities and reduce dependency on foreign technology. It began with just 10 laboratories focused on basic research and development.",
  },
  {
    id: 2,
    year: 1972,
    title: "Project Devil",
    description: "Initiated India's first missile program to develop short-range surface-to-air missiles.",
    image: "/devil.jpg",
    category: "Missile Systems",
    details:
      "Project Devil was India's first attempt to develop indigenous missile technology. The project laid the groundwork for future missile development programs and helped build technical expertise among Indian scientists.",
  },
  {
    id: 3,
    year: 1983,
    title: "Integrated Guided Missile Development Program",
    description: "Launched under the leadership of Dr. A.P.J. Abdul Kalam to develop a range of indigenous missiles.",
    image: "/igdmp.jpeg",
    category: "Missile Systems",
    details:
      "The IGMDP included the development of five missile systems: Prithvi (short-range surface-to-surface), Agni (ballistic missile), Trishul (short-range surface-to-air), Akash (medium-range surface-to-air), and Nag (anti-tank).",
  },
  {
    id: 4,
    year: 1988,
    title: "First Prithvi Missile Test",
    description: "Successfully tested India's first indigenously developed ballistic missile with a range of 150 km.",
    image: "/prith.jpg",
    category: "Missile Systems",
    details:
      "The successful test of the Prithvi missile marked a significant milestone in India's defense capabilities. It demonstrated the country's ability to develop complex weapon systems independently.",
  },
  {
    id: 5,
    year: 1989,
    title: "Light Combat Aircraft Program",
    description: "Initiated the development of India's indigenous fighter aircraft, later named Tejas.",
    image: "/lca.jpg",
    category: "Aeronautical Systems",
    details:
      "The LCA program was launched to replace the aging MiG-21 fighters. It involved the development of advanced technologies including fly-by-wire controls, composite structures, and digital avionics.",
  },
  {
    id: 6,
    year: 1998,
    title: "Pokhran-II Nuclear Tests",
    description:
      "DRDO played a crucial role in India's nuclear tests, demonstrating the country's nuclear capabilities.",
    image: "/pokhran.jpeg",
    category: "Strategic Systems",
    details:
      "DRDO scientists contributed significantly to the successful execution of Pokhran-II, which included five nuclear tests. The tests established India as a nuclear power and demonstrated the organization's capabilities in nuclear technology.",
  },
  {
    id: 7,
    year: 2001,
    title: "Arjun Main Battle Tank",
    description:
      "India's first indigenously designed and developed main battle tank entered service with the Indian Army.",
    image: "/arjun.jpg",
    category: "Land Systems",
    details:
      "The Arjun MBT represented a major achievement in indigenous defense production. It featured advanced armor protection, a powerful engine, and a 120mm main gun with computerized fire control system.",
  },
  {
    id: 8,
    year: 2007,
    title: "BrahMos Supersonic Cruise Missile",
    description: "Developed in collaboration with Russia, BrahMos became the world's fastest cruise missile.",
    image: "/brahmos.jpg",
    category: "Missile Systems",
    details:
      "BrahMos, with a speed of Mach 2.8-3.0, represented a significant technological achievement. The missile can be launched from submarines, ships, aircraft, or land, making it a versatile weapon system.",
  },
  {
    id: 9,
    year: 2010,
    title: "Agni-V ICBM",
    description: "Successfully tested India's first intercontinental ballistic missile with a range of over 5,000 km.",
    image: "/agni.jpg",
    category: "Strategic Systems",
    details:
      "The Agni-V ICBM significantly enhanced India's strategic deterrence capabilities. The missile features advanced technologies including composite rocket motors, navigation systems, and re-entry vehicle design.",
  },
  {
    id: 10,
    year: 2016,
    title: "LCA Tejas Induction",
    description:
      "The indigenously developed Light Combat Aircraft Tejas was officially inducted into the Indian Air Force.",
    image: "/lca.jpg",
    category: "Aeronautical Systems",
    details:
      "The induction of Tejas marked the culmination of a three-decade development program. The aircraft features advanced avionics, a glass cockpit, and composite materials that reduce weight and increase maneuverability.",
  },
  {
    id: 11,
    year: 2019,
    title: "Mission Shakti",
    description:
      "Successfully conducted India's first Anti-Satellite (ASAT) missile test, demonstrating capability to intercept satellites in low Earth orbit.",
    image: "/shakti.jpeg",
    category: "Space Technology",
    details:
      "Mission Shakti made India the fourth country after the US, Russia, and China to demonstrate ASAT capabilities. The test used a modified anti-ballistic missile to intercept a satellite at an altitude of approximately 300 km.",
  },
  {
    id: 12,
    year: 2021,
    title: "Advanced Hypersonic Wind Tunnel",
    description: "Inaugurated state-of-the-art hypersonic wind tunnel for testing future aerospace vehicles.",
    image: "/wind.jpeg",
    category: "Research Infrastructure",
    details:
      "The hypersonic wind tunnel facility enables testing of vehicles and systems at speeds of Mach 5 to Mach 12. This infrastructure is crucial for the development of hypersonic cruise missiles and future aerospace vehicles.",
  },
  {
    id: 13,
    year: 2023,
    title: "Quantum Technology Research",
    description:
      "Established dedicated quantum technology laboratory for defense applications in secure communications and computing.",
    image: "/qtech.jpeg",
    category: "Emerging Technologies",
    details:
      "The quantum technology initiative focuses on developing quantum key distribution systems, quantum sensors, and quantum computing applications for defense. These technologies will provide unprecedented capabilities in secure communications and computational power.",
  },
]

export default function DrdoTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [activeYear, setActiveYear] = useState<number>(timelineEvents[timelineEvents.length - 1].year)
  const isMobile = useMobile()

  const { scrollXProgress } = useScroll({
    container: timelineRef,
    offset: ["start end", "end start"],
  })

  const scroll = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const { current } = timelineRef
      const scrollAmount = isMobile ? 300 : 500

      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  // Update active year based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current
        const scrollPercentage = scrollLeft / (scrollWidth - clientWidth)

        // Calculate which event is most visible
        const eventIndex = Math.min(Math.floor(scrollPercentage * timelineEvents.length), timelineEvents.length - 1)

        setActiveYear(timelineEvents[eventIndex].year)
      }
    }

    const timelineElement = timelineRef.current
    if (timelineElement) {
      timelineElement.addEventListener("scroll", handleScroll)
      return () => timelineElement.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section className="py-12 relative overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 backdrop-blur-sm rounded-2xl -z-10" />

      <div className="flex justify-between items-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500"
        >
          DRDO Timeline
        </motion.h2>

        <div className="flex items-center gap-4">
          <motion.div
            className="text-4xl font-bold text-white text-glow hidden md:block"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {activeYear}
          </motion.div>

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
      </div>

      <div className="mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />
        <div
          ref={timelineRef}
          className="flex overflow-x-auto scrollbar-hide py-8 relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`min-w-[300px] ${index === 0 ? "ml-[50%]" : index === timelineEvents.length - 1 ? "mr-[50%]" : ""}`}
            >
              <div className="relative px-4">
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 ${activeYear === event.year ? "bg-blue-500 border-blue-300 shadow-glow" : "bg-white/20 border-white/40"}`}
                />

                <Dialog>
                  <DialogTrigger asChild>
                    <Card
                      className={`mt-8 bg-white/5 backdrop-blur-md border-white/10 text-white overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10 ${activeYear === event.year ? "border-blue-500/50" : ""}`}
                    >
                      <div className="relative h-[150px] w-full overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-2 left-2">
                          <Badge className="bg-blue-500/80 text-white hover:bg-blue-500/90">{event.year}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                        <p className="text-white/70 text-sm line-clamp-2">{event.description}</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-4xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                        <Badge className="bg-blue-500 text-white hover:bg-blue-600 text-base py-1 px-3">
                          {event.year}
                        </Badge>
                        <span>{event.title}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative h-[300px] rounded-lg overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <Badge className="bg-white/10 text-white hover:bg-white/20">{event.category}</Badge>
                        <p className="text-white/90">{event.description}</p>
                        <p className="text-white/80">{event.details}</p>
                        <Button
                          variant="outline"
                          className="border-white/10 text-white hover:bg-white/10 hover:text-white mt-4"
                        >
                          Learn More <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="text-center mt-2">
                  <span
                    className={`text-sm font-medium ${activeYear === event.year ? "text-blue-400" : "text-white/60"}`}
                  >
                    {event.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <AnimatePresence>
          {timelineEvents
            .filter((event) => event.year === activeYear)
            .map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-blue-500 text-white hover:bg-blue-600">{event.year}</Badge>
                  <h3 className="text-xl font-bold text-white">{event.title}</h3>
                </div>
                <p className="text-white/80">{event.description}</p>
                <p className="text-white/70 mt-4">{event.details}</p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

