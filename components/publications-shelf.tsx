"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useMobile } from "@/hooks/use-mobile"

const featuredPublication = {
  title: "Defence Science Journal - Volume 74, Issue 1",
  date: "March 2024",
  description:
    "Special issue on Advanced Materials for Defence Applications featuring research papers on composite materials, nanomaterials, and high-temperature alloys.",
  image: "/placeholder.svg?height=400&width=300",
  link: "#",
}

const recentPublications = [
  {
    id: 1,
    title: "DRDO Technology Focus - Radar Systems",
    date: "February 2024",
    description: "Overview of recent advancements in radar technology for defence applications.",
    image: "/placeholder.svg?height=100&width=80",
    link: "#",
  },
  {
    id: 2,
    title: "DRDO Monograph on Missile Guidance Systems",
    date: "January 2024",
    description: "Comprehensive study on various missile guidance technologies and their applications.",
    image: "/placeholder.svg?height=100&width=80",
    link: "#",
  },
  {
    id: 3,
    title: "Defence Science Journal - Volume 73, Issue 6",
    date: "December 2023",
    description: "Research papers on cybersecurity, artificial intelligence, and quantum computing in defence.",
    image: "/placeholder.svg?height=100&width=80",
    link: "#",
  },
  {
    id: 4,
    title: "DRDO Newsletter - Q4 2023",
    date: "December 2023",
    description: "Quarterly update on DRDO activities, achievements, and events.",
    image: "/placeholder.svg?height=100&width=80",
    link: "#",
  },
]

export default function PublicationsShelf() {
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const shelfRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const scroll = (direction: "left" | "right") => {
    if (shelfRef.current) {
      const { current } = shelfRef
      const scrollAmount = isMobile ? 200 : 300

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
          Latest Publications
        </motion.h2>

        <div className="flex items-center gap-2">
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "200px", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/5 border-white/10 text-white h-9"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search className="h-4 w-4" />
          </Button>

          <div className="hidden sm:flex gap-2">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden cursor-pointer group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative h-[200px] md:h-auto md:w-1/3 overflow-hidden">
                  <Image
                    src={featuredPublication.image || "/placeholder.svg"}
                    alt={featuredPublication.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {featuredPublication.title}
                  </h3>
                  <p className="text-sm text-blue-400 mb-4">{featuredPublication.date}</p>
                  <p className="text-white/70 flex-grow">{featuredPublication.description}</p>
                  <div className="mt-4">
                    <span className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                      Read Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">{featuredPublication.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-6 flex flex-col md:flex-row gap-6">
              <div className="relative h-[300px] md:h-[400px] w-full md:w-1/3">
                <Image
                  src={featuredPublication.image || "/placeholder.svg"}
                  alt={featuredPublication.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-blue-400 mb-4">{featuredPublication.date}</p>
                <p className="text-white/80 mb-6">
                  {featuredPublication.description}
                  <br />
                  <br />
                  This special issue features contributions from leading researchers in the field of advanced materials
                  for defence applications. The papers cover a wide range of topics including high-temperature alloys
                  for aerospace applications, composite materials for ballistic protection, and nanomaterials for
                  stealth technology.
                </p>
                <Button asChild>
                  <Link href={featuredPublication.link} target="_blank">
                    Download PDF <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div>
          <div ref={shelfRef} className="flex flex-col gap-4 h-[400px] overflow-y-auto scrollbar-hide pr-2">
            {recentPublications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.div
                      className="flex gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="relative h-24 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={publication.image || "/placeholder.svg"}
                          alt={publication.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white group-hover:text-blue-300 transition-colors mb-1">
                          {publication.title}
                        </h3>
                        <p className="text-sm text-blue-400 mb-1">{publication.date}</p>
                        <p className="text-sm text-white/70 line-clamp-2">{publication.description}</p>
                      </div>
                    </motion.div>
                  </DialogTrigger>
                  <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-white">{publication.title}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-blue-400 mb-4">{publication.date}</p>
                      <p className="text-white/80 mb-6">{publication.description}</p>
                      <Button asChild>
                        <Link href={publication.link} target="_blank">
                          Download PDF <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <Button
              variant="outline"
              className="w-full border-white/10 text-white hover:bg-white/10 hover:text-white group"
              asChild
            >
              <Link href="/publications">
                View All Publications
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

