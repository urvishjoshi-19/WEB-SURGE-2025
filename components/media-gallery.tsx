"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, ChevronRight, Play, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

// Sample data
const photos = [
  { id: 1, src: "/22.jpg", alt: "DRDO Exhibition" },
  { id: 2, src: "/23.jpg", alt: "Missile Test" },
  { id: 3, src: "/24.jpg", alt: "Laboratory Research" },
  { id: 4, src: "/25.jpg", alt: "Aircraft Testing" },
  { id: 5, src: "/26.jpg", alt: "Technology Demonstration" },
  { id: 6, src: "/27.jpg", alt: "Award Ceremony" },
]

const videos = [
  { id: 1, thumbnail: "/81.mp4", title: "DRDO Technology Showcase 2024" },
  { id: 2, thumbnail: "/82.mp4", title: "Missile Test Launch" },
  { id: 3, thumbnail: "/83.mp4", title: "Advanced Combat Vehicle Demonstration" },
  { id: 4, thumbnail: "/81.mp4", title: "Aerospace Technology Overview" },
]

const pressReleases = [
  { id: 1, date: "20 Mar 2024", title: "DRDO Successfully Tests New Long-Range Missile" },
  { id: 2, date: "15 Mar 2024", title: "DRDO Signs MoU with Foreign Defence Research Agency" },
  { id: 3, date: "10 Mar 2024", title: "Indigenous Anti-Tank Guided Missile Completes Final User Trials" },
  { id: 4, date: "05 Mar 2024", title: "DRDO Develops New Lightweight Body Armor for Armed Forces" },
  { id: 5, date: "01 Mar 2024", title: "DRDO Chairman Inaugurates New Research Facility" },
]

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState("photos")
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [newsTickerPaused, setNewsTickerPaused] = useState(false)

  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 mb-8"
      >
        Media Gallery
      </motion.h2>

      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
        <Tabs defaultValue="photos" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 bg-transparent border-b border-white/10 p-0 h-auto">
            {["photos", "videos", "pressReleases"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={cn(
                  "py-3 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none relative overflow-hidden",
                  "data-[state=active]:text-white data-[state=inactive]:text-white/60",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all",
                  "data-[state=active]:after:w-full data-[state=inactive]:after:w-0",
                )}
              >
                {tab === "photos" && "Photos"}
                {tab === "videos" && "Videos"}
                {tab === "pressReleases" && "Press Releases"}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="p-6">
            <TabsContent value="photos" className="m-0">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.div
                          className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
                          whileHover={{ scale: 1.02, rotate: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src={photo.src || "/placeholder.svg"}
                            alt={photo.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                            <p className="text-white text-sm font-medium">{photo.alt}</p>
                          </div>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-4xl p-2">
                        <div className="relative h-[80vh]">
                          <Image
                            src={photo.src || "/placeholder.svg"}
                            alt={photo.alt}
                            fill
                            className="object-contain"
                          />
                          <Button
  variant="ghost"
  size="icon"
  className="absolute top-2 right-2 text-white hover:bg-white/10 rounded-full"
  onClick={() => {
    const closeButton = document.querySelector('[data-state="open"] button[aria-label="Close"]') as HTMLButtonElement;
    closeButton?.click();  // Now TypeScript knows this is a button and it has the 'click' method
  }}
>
  <X className="h-5 w-5" />
</Button>

                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/10 hover:text-white group"
                  asChild
                >
                  <Link href="/media/photos">
                    View All Photos
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="videos" className="m-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {videos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <motion.div
                          className="group relative rounded-lg overflow-hidden cursor-pointer"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <div className="relative aspect-video">
                            <Image
                              src={video.thumbnail || "/placeholder.svg"}
                              alt={video.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                              <motion.div
                                className="h-16 w-16 rounded-full bg-blue-500/80 flex items-center justify-center"
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                              >
                                <Play className="h-8 w-8 text-white ml-1" />
                              </motion.div>
                            </div>
                          </div>
                          <h3 className="mt-2 font-medium text-white group-hover:text-blue-300 transition-colors">
                            {video.title}
                          </h3>
                        </motion.div>
                      </DialogTrigger>
                      <DialogContent className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-4xl">
                        <div className="aspect-video relative bg-black/50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Play className="h-16 w-16 text-white/50 mx-auto mb-4" />
                            <p className="text-white/70">Video player would load here</p>
                            <h3 className="text-xl font-bold mt-2">{video.title}</h3>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/10 hover:text-white group"
                  asChild
                >
                  <Link href="/media/videos">
                    View All Videos
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="pressReleases" className="m-0">
              <div className="border border-white/10 rounded-lg divide-y divide-white/10">
                {pressReleases.map((press, index) => (
                  <motion.div
                    key={press.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link href="#" className="flex items-start gap-4 p-4 hover:bg-white/5 transition-colors group">
                      <div className="flex items-center text-blue-400 min-w-[100px]">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{press.date}</span>
                      </div>
                      <h3 className="flex-1 text-white group-hover:text-blue-300 transition-colors">{press.title}</h3>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/10 hover:text-white group"
                  asChild
                >
                  <Link href="/media/press-releases">
                    View All Press Releases
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <div
        className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 overflow-hidden relative"
        onMouseEnter={() => setNewsTickerPaused(true)}
        onMouseLeave={() => setNewsTickerPaused(false)}
      >
        <div className="flex items-center">
          <div className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded mr-3">LATEST</div>
          <div className="overflow-hidden flex-1">
            <motion.div
              animate={{
                x: newsTickerPaused ? 0 : "-100%",
                transition: {
                  x: {
                    duration: 20,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                  },
                },
              }}
              className="flex whitespace-nowrap"
            >
              {pressReleases.map((press) => (
                <span key={press.id} className="inline-block mr-8 text-white">
                  {press.title}
                </span>
              ))}
              {pressReleases.map((press) => (
                <span key={`repeat-${press.id}`} className="inline-block mr-8 text-white">
                  {press.title}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

