"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Maximize2, ZoomIn, ZoomOut, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Sample models data
const models = [
  {
    id: 1,
    name: "Agni-V Missile",
    category: "Missile Systems",
    description: "Intercontinental ballistic missile with a range of over 5,000 km",
    thumbnail: "/agni.jpg",
    details: {
      range: "5,000+ km",
      payload: "1,500 kg",
      propulsion: "Three-stage solid fueled",
      guidance: "Ring Laser Gyro-based Inertial Navigation System",
      length: "17.5 m",
      diameter: "2 m",
      weight: "50,000 kg",
      status: "Operational",
    },
    specifications:
      "The Agni-V is a three-stage solid fueled intercontinental ballistic missile developed by the Defence Research and Development Organisation (DRDO) of India. It has a range of more than 5,000 km and can carry a nuclear warhead of about 1.5 tons. The missile's canister-launch missile system provides it with operational flexibility, allowing it to be launched from various platforms.",
  },
  {
    id: 2,
    name: "LCA Tejas",
    category: "Aircraft",
    description: "Single-engine, delta wing, multirole light fighter aircraft",
    thumbnail: "/lca.jpg",
    details: {
      range: "3,000 km",
      payload: "3,500 kg",
      propulsion: "GE F404-IN20 turbofan engine",
      avionics: "Digital fly-by-wire control system",
      length: "13.2 m",
      wingspan: "8.2 m",
      weight: "6,500 kg (empty)",
      status: "Operational",
    },
    specifications:
      "The HAL Tejas is an Indian single-engine, delta wing, multirole light fighter designed by the Aeronautical Development Agency (ADA) and manufactured by Hindustan Aeronautics Limited (HAL) for the Indian Air Force and Indian Navy. It is the smallest and lightest in its class of contemporary supersonic combat aircraft.",
  },
  // Add other models similarly...
]

export default function ModelViewer() {
  const [activeModel, setActiveModel] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("specifications")

  // Scroll Functionality
  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 400
    const scrollContainer = document.getElementById("model-scroll-container")
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
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
          Key Products and Products for Export
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
        id="model-scroll-container"
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
      >
        {models.map((model, index) => (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="min-w-[280px] max-w-[280px] snap-start"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 text-white overflow-hidden cursor-pointer group perspective">
                  <motion.div
                    className="relative h-[200px] w-full overflow-hidden"
                    whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={model.thumbnail || "/placeholder.svg"}
                      alt={model.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-blue-500/80 text-white hover:bg-blue-500/90">{model.category}</Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20">
                        <Maximize2 className="h-3 w-3 mr-1" /> 3D View
                      </Badge>
                    </div>
                  </motion.div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold text-white mb-1">{model.name}</h3>
                    <p className="text-white/70 text-sm">{model.description}</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent
                className="bg-black/90 backdrop-blur-xl border-white/10 text-white max-w-5xl p-0 overflow-hidden"
                onOpenAutoFocus={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
                  <div className="relative bg-black/50 flex flex-col">
                    <DialogHeader className="p-4 border-b border-white/10">
                      <DialogTitle className="text-xl font-bold flex items-center gap-2">
                        <span>{model.name}</span>
                        <Badge className="bg-blue-500/80 text-white hover:bg-blue-500/90 ml-2">{model.category}</Badge>
                      </DialogTitle>
                    </DialogHeader>

                    <div className="flex-grow relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          variant="outline"
                          className="border-white/10 text-white hover:bg-white/10 hover:text-white"
                          onClick={() => setActiveModel(model.id)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-md overflow-y-auto">
                    <Tabs
                      defaultValue="specifications"
                      value={activeTab}
                      onValueChange={setActiveTab}
                      className="w-full"
                    >
                      <TabsList className="grid grid-cols-3 bg-transparent border-b border-white/10 p-0 h-auto rounded-none">
                        <TabsTrigger
                          value="specifications"
                          className="py-3 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none relative overflow-hidden data-[state=active]:text-white data-[state=inactive]:text-white/60 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all data-[state=active]:after:w-full data-[state=inactive]:after:w-0"
                        >
                          Specifications
                        </TabsTrigger>
                        <TabsTrigger
                          value="details"
                          className="py-3 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none relative overflow-hidden data-[state=active]:text-white data-[state=inactive]:text-white/60 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-blue-500 after:transition-all data-[state=active]:after:w-full data-[state=inactive]:after:w-0"
                        >
                          Technical Details
                        </TabsTrigger>
                      </TabsList>

                      <div className="p-6">
                        <TabsContent value="specifications" className="m-0">
                          <div className="space-y-4">
                            <div className="flex items-start gap-2">
                              <Info className="h-5 w-5 text-blue-400 mt-0.5" />
                              <div>
                                <h4 className="text-lg font-medium text-white mb-2">Overview</h4>
                                <p className="text-white/80">{model.specifications}</p>
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        <TabsContent value="details" className="m-0">
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(model.details).map(([key, value]) => (
                              <div key={key} className="bg-white/5 p-3 rounded-lg">
                                <div className="text-white/60 text-sm capitalize mb-1">{key}</div>
                                <div className="text-white font-medium">{value}</div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-white/70 mb-4">
          Explore DRDO's cutting-edge defense technologies
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Full Gallery</Button>
      </div>
    </section>
  )
}
