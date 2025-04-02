"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useMobile } from "@/hooks/use-mobile"

const achievements = [
  {
    id: 1,
    title: "Agni-V Missile",
    description:
      "Successfully developed and tested the Agni-V intercontinental ballistic missile with a range of over 5,000 km.",
      image: "/agni.jpg",
      year: "2021",
  },
  {
    id: 2,
    title: "LCA Tejas",
    description:
      "Indigenous development of Light Combat Aircraft (LCA) Tejas, a 4.5 generation multirole fighter aircraft.",
      image: "/lca.jpg",
      year: "2019",
  },
  {
    id: 3,
    title: "AEW&C System",
    description:
      "Development of Airborne Early Warning and Control System providing surveillance and command capabilities.",
      image: "/awc.jpg",
      year: "2017",
  },
  {
    id: 4,
    title: "Arjun Main Battle Tank",
    description: "Indigenous design and development of Arjun MBT with advanced protection, firepower and mobility.",
    image: "/arjun.jpg",
    year: "2014",
  },
  {
    id: 5,
    title: "BrahMos Missile",
    description:
      "Joint development of supersonic cruise missile with a speed of Mach 2.8-3.0 and precision strike capability.",
      image: "/brahmos.jpg",
      year: "2010",
  },
  {
    id: 6,
    title: "ASTRA Missile",
    description: "Beyond Visual Range Air-to-Air Missile (BVRAAM) with active radar terminal guidance.",
    image: "/astra.jpg",
    year: "2008",
  },
]

export default function AchievementsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const [showTimeline, setShowTimeline] = useState(false)

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
          Key Achievements
        </motion.h2>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="border-white/10 text-white hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="border-white/10 text-white hover:bg-white/10 hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-white/10 text-white hover:bg-white/10 hover:text-white ml-2"
              >
                View Timeline
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-4xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Achievements Timeline
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6 relative">
                <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-blue-500/30" />
                <div className="space-y-8">
                  {achievements
                    .sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
                    .map((achievement, index) => (
                      <motion.div
                        key={achievement.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="relative">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white z-10 relative">
                            <Clock className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
                            <span className="text-blue-400 font-mono">{achievement.year}</span>
                          </div>
                          <p className="text-white/70 mt-2">{achievement.description}</p>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.id} achievement={achievement} index={index} />
        ))}
      </div>
    </section>
  )
}

function AchievementCard({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[0]
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[300px] max-w-[300px] snap-start"
    >
      <motion.div
        className="bg-white/5 backdrop-blur-md dark:bg-white/5 border border-white/10 rounded-lg overflow-hidden h-full"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <div className="relative h-[180px] w-full overflow-hidden">
          <Image
            src={achievement.image || "/placeholder.svg"}
            alt={achievement.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
            {achievement.year}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
          <p className="text-white/70 text-sm">{achievement.description}</p>
          <div className="mt-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-blue-400 hover:text-white hover:bg-blue-500/20 p-0 h-auto"
              asChild
            >
              <Link href="#">
                Learn more <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

