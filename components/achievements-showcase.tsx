"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"

const achievements = [
  {
    id: 1,
    title: "Agni-V Missile",
    description:
      "Successfully developed and tested the Agni-V intercontinental ballistic missile with a range of over 5,000 km.",
    image: "/agni.jpg",
  },
  {
    id: 2,
    title: "LCA Tejas",
    description:
      "Indigenous development of Light Combat Aircraft (LCA) Tejas, a 4.5 generation multirole fighter aircraft.",
    image: "/lca.jpg",
  },
  {
    id: 3,
    title: "AEW&C System",
    description:
      "Development of Airborne Early Warning and Control System providing surveillance and command capabilities.",
    image: "/awc.jpg",
  },
  {
    id: 4,
    title: "Arjun Main Battle Tank",
    description: "Indigenous design and development of Arjun MBT with advanced protection, firepower and mobility.",
    image: "/arjun.jpg",
  },
  {
    id: 5,
    title: "BrahMos Missile",
    description:
      "Joint development of supersonic cruise missile with a speed of Mach 2.8-3.0 and precision strike capability.",
    image: "/brahmos.jpg",
  },
  {
    id: 6,
    title: "ASTRA",
    description: "Beyond Visual Range Air-to-Air Missile (BVRAAM) with active radar terminal guidance.",
    image: "/astra.jpg",
  },
]

export default function AchievementsShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

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
    <section className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#003366] dark:text-white">Key Achievements</h2>

        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Scroll left">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Scroll right">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {achievements.map((achievement) => (
          <Card key={achievement.id} className="min-w-[300px] max-w-[300px] snap-start">
            <div className="relative h-[180px] w-full">
              <Image
                src={achievement.image || "/placeholder.svg"}
                alt={achievement.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-[#003366] dark:text-white">{achievement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-300">{achievement.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {achievements.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${index === 0 ? "bg-[#0077cc]" : "bg-gray-300 dark:bg-gray-700"}`}
          />
        ))}
      </div>
    </section>
  )
}

