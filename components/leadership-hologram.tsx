"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

const leaders = [
  {
    id: 1,
    name: "Dr. Samir V. Kamat",
    designation: "Secretary DDR&D and Chairman DRDO",
    bio: "Distinguished scientist with expertise in materials science and strategic technologies.",
    image: "/36.jpg",
  },
  {
    id: 2,
    name: "Dr. Y. Sreenivas Rao",
    designation: "Distinguished Scientist & Director General (HR)",
    bio: "Expert in human resource management and organizational development.",
    image: "/32.jpg",
  },
  {
    id: 3,
    name: "Dr. Sudhir Kamath",
    designation: "Distinguished Scientist & Director General (MED & CoS)",
    bio: "Specialist in microelectronic devices and computational systems.",
    image: "/33.jpg",
  },
  {
    id: 4,
    name: "Dr. Upendra Kumar Singh",
    designation: "Distinguished Scientist & Director General (NS & M)",
    bio: "Expert in naval systems and materials with extensive research experience.",
    image: "/34.jpg",
  },
  {
    id: 5,
    name: "Dr. B.K. Das",
    designation: "Distinguished Scientist & Director General (ACE)",
    bio: "Specialist in armament and combat engineering technologies.",
    image: "/35.jpg",
  },
]

export default function LeadershipHologram() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
          Leadership
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
        {leaders.map((leader, index) => (
          <LeaderCard
            key={leader.id}
            leader={leader}
            index={index}
            isHovered={hoveredId === leader.id}
            onHover={() => setHoveredId(leader.id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </section>
  )
}

function LeaderCard({
  leader,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  leader: (typeof leaders)[0]
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-w-[280px] max-w-[280px] snap-start"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden h-full relative"
        animate={{
          y: isHovered ? -5 : 0,
          boxShadow: isHovered ? "0 10px 30px -10px rgba(0, 100, 255, 0.3)" : "0 0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative h-[280px] w-full overflow-hidden">
          <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />

          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <Button variant="outline" size="sm" className="w-full border-white/20 text-white hover:bg-white/10">
                      View Profile <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="absolute inset-0 border-4 border-transparent"
            animate={{
              borderColor: isHovered ? "rgba(59, 130, 246, 0.3)" : "rgba(255, 255, 255, 0)",
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.div
            className="absolute top-2 right-2 bg-blue-500/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              transition: { duration: 0.2 },
            }}
          >
            ID: DRDO-{leader.id}
          </motion.div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold text-white mb-1">{leader.name}</h3>
          <p className="text-blue-400 text-sm mb-2">{leader.designation}</p>
          <p className="text-white/70 text-sm">{leader.bio}</p>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </motion.div>
  )
}

