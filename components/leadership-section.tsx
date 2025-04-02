"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"

const leaders = [
  {
    id: 1,
    name: "Dr. Samir V. Kamat",
    designation: "Secretary DDR&D and Chairman DRDO",
    bio: "Distinguished scientist with expertise in materials science and strategic technologies.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Dr. Y. Sreenivas Rao",
    designation: "Distinguished Scientist & Director General (HR)",
    bio: "Expert in human resource management and organizational development.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Dr. Sudhir Kamath",
    designation: "Distinguished Scientist & Director General (MED & CoS)",
    bio: "Specialist in microelectronic devices and computational systems.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Dr. Upendra Kumar Singh",
    designation: "Distinguished Scientist & Director General (NS & M)",
    bio: "Expert in naval systems and materials with extensive research experience.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Dr. B.K. Das",
    designation: "Distinguished Scientist & Director General (ACE)",
    bio: "Specialist in armament and combat engineering technologies.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function LeadershipSection() {
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
        <h2 className="text-2xl font-bold text-[#003366] dark:text-white">Leadership</h2>

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
        {leaders.map((leader) => (
          <Card key={leader.id} className="min-w-[280px] max-w-[280px] snap-start">
            <div className="relative h-[280px] w-full">
              <Image
                src={leader.image || "/placeholder.svg"}
                alt={leader.name}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-[#003366] dark:text-white">{leader.name}</CardTitle>
              <CardDescription className="text-sm">{leader.designation}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">{leader.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

