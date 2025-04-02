"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Award, Microscope, BookOpen, Lightbulb, Mail, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { useMobile } from "@/hooks/use-mobile"

// Sample scientists data
const scientists = [
  {
    id: 1,
    name: "Dr. Avinash Chander",
    title: "Former Director General, DRDO",
    image: "/66.jpeg",
    expertise: ["Missile Systems", "Aerospace Engineering", "Defense Technology"],
    contributions: [
      "Led the development of Agni series of missiles",
      "Pioneered India's long-range missile program",
      "Developed advanced navigation systems for precision strikes",
    ],
    awards: ["Padma Shri", "DRDO Scientist of the Year", "National Systems Gold Medal"],
    publications: 42,
    patents: 8,
    quote: "Innovation in defense technology is the cornerstone of national security and sovereignty.",
    bio: "Dr. Avinash Chander is a renowned aerospace engineer who served as the Director General of DRDO and Scientific Advisor to the Defense Minister. His pioneering work in missile technology has significantly enhanced India's strategic capabilities.",
  },
  {
    id: 2,
    name: "Dr. Tessy Thomas",
    title: "Director General, Aeronautical Systems",
    image: "/67.jpeg",
    expertise: ["Missile Guidance Systems", "Ballistic Missiles", "Project Management"],
    contributions: [
      "Project Director for Agni-IV missile system",
      "Key contributor to Agni-V ICBM development",
      "Advanced guidance system innovations",
    ],
    awards: [
      "DRDO Performance Excellence Award",
      "Lal Bahadur Shastri National Award",
      "Sir Mokshagundam Visvesvaraya Award",
    ],
    publications: 38,
    patents: 5,
    quote: "The beauty of science is that it knows no gender. It's about innovation, perseverance, and excellence.",
    bio: "Known as the 'Missile Woman of India', Dr. Tessy Thomas has made significant contributions to India's missile development programs. She is the first woman scientist to head a missile project in India.",
  },
  {
    id: 3,
    name: "Dr. G. Satheesh Reddy",
    title: "Scientific Advisor to Defense Minister",
    image: "/68.jpg",
    expertise: ["Navigation Systems", "Avionics", "Missile Technology"],
    contributions: [
      "Development of indigenous navigation systems",
      "Advanced seeker technology for precision strikes",
      "Miniaturization of avionics for missile systems",
    ],
    awards: ["Padma Bhushan", "IEEE Pioneer Award", "National Design Award"],
    publications: 45,
    patents: 12,
    quote: "Self-reliance in defense technology is not just an aspiration but a necessity for national security.",
    bio: "Dr. G. Satheesh Reddy is a distinguished scientist known for his contributions to avionics and navigation systems. His work has been instrumental in enhancing the precision and reliability of India's missile systems.",
  },
  {
    id: 4,
    name: "Dr. Shanti Swarup Bhatnagar",
    title: "Founding Director, CSIR",
    image: "/69.jpeg",
    expertise: ["Physical Chemistry", "Defense Research Organization", "Scientific Leadership"],
    contributions: [
      "Established foundation for defense research in India",
      "Pioneered magneto-chemistry research",
      "Developed scientific infrastructure for national defense",
    ],
    awards: ["Knighthood (British Empire)", "Fellow of Royal Society", "Padma Bhushan"],
    publications: 60,
    patents: 7,
    quote: "Science and technology are the real wealth of a nation, more valuable than material resources.",
    bio: "Dr. Shanti Swarup Bhatnagar was a visionary scientist who laid the foundation for scientific research in independent India. His contributions to defense science established the framework for what would later become DRDO.",
  },
  {
    id: 5,
    name: "Dr. Rohini Godbole",
    title: "Theoretical Physicist",
    image: "/34.jpg",
    expertise: ["Particle Physics", "Quantum Mechanics", "High-Energy Physics"],
    contributions: [
      "Quantum chromodynamics research with defense applications",
      "Advanced computational models for particle interactions",
      "Theoretical frameworks for next-gen defense technologies",
    ],
    awards: ["Padma Shri", "J.C. Bose Fellowship", "TWAS Prize in Physics"],
    publications: 72,
    patents: 3,
    quote: "Fundamental research today becomes the applied technology of tomorrow.",
    bio: "Dr. Rohini Godbole is an internationally renowned theoretical physicist whose work in particle physics has applications in advanced defense technologies. Her research bridges the gap between theoretical physics and practical applications.",
  },
  {
    id: 6,
    name: "Dr. Vijay Kumar Saraswat",
    title: "Former Director General, DRDO",
    image: "/35.jpg",
    expertise: ["Propulsion Systems", "Missile Technology", "Defense R&D Management"],
    contributions: [
      "Led development of India's anti-ballistic missile system",
      "Pioneered liquid propulsion technology for missiles",
      "Established advanced defense research facilities",
    ],
    awards: ["Padma Bhushan", "Padma Shri", "DRDO Lifetime Achievement Award"],
    publications: 55,
    patents: 10,
    quote: "Indigenous technology development is the key to strategic autonomy and national security.",
    bio: "Dr. Vijay Kumar Saraswat is a distinguished scientist who has made significant contributions to India's missile and defense technology programs. As the former Director General of DRDO, he spearheaded several critical projects that enhanced India's strategic capabilities.",
  },
  {
    id: 7,
    name: "Dr. Aditi Pant",
    title: "Oceanographer & Polar Scientist",
    image: "/32.jpg",
    expertise: ["Marine Biology", "Polar Research", "Underwater Defense Systems"],
    contributions: [
      "Pioneered underwater acoustic research for submarine detection",
      "Developed marine ecosystem monitoring for naval security",
      "Advanced oceanographic research with defense applications",
    ],
    awards: ["Antarctic Award", "National Science Award", "Ocean Science Leadership Award"],
    publications: 48,
    patents: 6,
    quote: "The oceans hold secrets that are crucial for both scientific advancement and national security.",
    bio: "Dr. Aditi Pant is a pioneering oceanographer whose research has significant applications in underwater defense systems. Her work has contributed to India's capabilities in submarine detection and naval security.",
  },
  {
    id: 8,
    name: "Dr. A.P.J. Abdul Kalam",
    title: "Former President of India & DRDO Scientist",
    image: "/a.jpeg",
    expertise: ["Aerospace Engineering", "Missile Technology", "Scientific Leadership"],
    contributions: [
      "Led India's first satellite launch vehicle program",
      "Spearheaded the Integrated Guided Missile Development Program",
      "Pioneered indigenous defense technology development",
    ],
    awards: ["Bharat Ratna", "Padma Vibhushan", "Padma Bhushan"],
    publications: 68,
    patents: 9,
    quote: "Dreams are not what you see in sleep, they are the things that don't let you sleep.",
    bio: "Dr. A.P.J. Abdul Kalam was a visionary scientist who played a pivotal role in developing India's missile and nuclear programs. Known as the 'Missile Man of India', his contributions to defense technology and scientific research are unparalleled.",
  },
]

export default function MeetTheScientists() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()
  const [activeScientist, setActiveScientist] = useState<number | null>(null)

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
          Meet the Scientists
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
        {scientists.map((scientist, index) => (
          <HoverCard key={scientist.id} openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[280px] max-w-[280px] snap-start cursor-pointer"
                onClick={() => setActiveScientist(scientist.id === activeScientist ? null : scientist.id)}
              >
                <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 text-white overflow-hidden group perspective">
                  <div className="relative transform-gpu transition-all duration-700 preserve-3d h-[450px] w-full group-hover:rotate-y-180">
                    {/* Front of card */}
                    <CardContent className="p-0 absolute inset-0 backface-hidden">
                      <div className="relative h-[320px] w-full overflow-hidden">
                        <Image
                          src={scientist.image || "/placeholder.svg"}
                          alt={scientist.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-1">{scientist.name}</h3>
                        <p className="text-blue-400 text-sm">{scientist.title}</p>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {scientist.expertise.slice(0, 2).map((skill, i) => (
                            <Badge key={i} className="bg-white/10 text-white hover:bg-white/20 text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {scientist.expertise.length > 2 && (
                            <Badge className="bg-white/10 text-white hover:bg-white/20 text-xs">
                              +{scientist.expertise.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>

                    {/* Back of card */}
                    <CardContent className="p-6 absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-md flex flex-col">
                      <h3 className="text-lg font-bold text-white mb-1">{scientist.name}</h3>
                      <p className="text-blue-300 text-sm mb-4">{scientist.title}</p>

                      <div className="space-y-4 flex-grow">
                        <div>
                          <h4 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-blue-300" />
                            Key Contributions
                          </h4>
                          <ul className="text-white/80 text-xs space-y-1">
                            {scientist.contributions.map((contribution, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-blue-300 mt-1">•</span>
                                <span>{contribution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                            <Award className="h-4 w-4 text-blue-300" />
                            Awards
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {scientist.awards.map((award, i) => (
                              <Badge key={i} className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 text-xs">
                                {award}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 text-xs">
                          <div className="flex items-center gap-1 text-white/80">
                            <BookOpen className="h-3 w-3 text-blue-300" />
                            <span>{scientist.publications} Publications</span>
                          </div>
                          <div className="flex items-center gap-1 text-white/80">
                            <Microscope className="h-3 w-3 text-blue-300" />
                            <span>{scientist.patents} Patents</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-white/90 text-xs italic">"{scientist.quote}"</p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 bg-black/90 backdrop-blur-xl border-white/10 text-white">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{scientist.name}</h4>
                  <p className="text-sm text-blue-400">{scientist.title}</p>
                </div>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4">
                <p className="text-sm text-white/80">{scientist.bio}</p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="flex gap-2">
                  {scientist.expertise.slice(0, 2).map((skill, i) => (
                    <Badge key={i} className="bg-white/10 text-white hover:bg-white/20 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-white hover:bg-blue-500/20 h-8 px-2"
                >
                  <span className="text-xs">Full Profile</span>
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>

      <AnimatePresence>
        {activeScientist && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6"
          >
            {scientists
              .filter((scientist) => scientist.id === activeScientist)
              .map((scientist) => (
                <div key={scientist.id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden">
                    <Image
                      src={scientist.image || "/placeholder.svg"}
                      alt={scientist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{scientist.name}</h3>
                      <p className="text-blue-400">{scientist.title}</p>
                    </div>

                    <p className="text-white/80">{scientist.bio}</p>

                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-blue-400" />
                        Key Contributions
                      </h4>
                      <ul className="text-white/80 space-y-2">
                        {scientist.contributions.map((contribution, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-400" />
                        Awards & Recognition
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {scientist.awards.map((award, i) => (
                          <Badge key={i} className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                            {award}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex items-center gap-2 text-white/80">
                        <BookOpen className="h-5 w-5 text-blue-400" />
                        <span>{scientist.publications} Publications</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/80">
                        <Microscope className="h-5 w-5 text-blue-400" />
                        <span>{scientist.patents} Patents</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/90 italic">"{scientist.quote}"</p>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Scientist</Button>
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// Add this to your globals.css
// .perspective { perspective: 1000px; }
// .preserve-3d { transform-style: preserve-3d; }
// .backface-hidden { backface-visibility: hidden; }
// .rotate-y-180 { transform: rotateY(180deg); }

