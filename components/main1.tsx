"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Plus, Calendar, Bell, Users, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

// Sample data
const newsData = {
  whatsNew: [
    { id: 1, date: "15 Mar 2024", title: "DRDO successfully tests new missile defence system", link: "#" },
    { id: 2, date: "10 Mar 2024", title: "Indigenous Anti-Tank Guided Missile completes final user trials", link: "#" },
    { id: 3, date: "05 Mar 2024", title: "DRDO signs MoU with IIT Delhi for collaborative research", link: "#" },
    { id: 4, date: "28 Feb 2024", title: "New radar system developed for border surveillance", link: "#" },
    { id: 5, date: "20 Feb 2024", title: "DRDO showcases latest technologies at DefExpo 2024", link: "#" },
    { id: 6, date: "15 Feb 2024", title: "Advanced materials laboratory inaugurated in Pune", link: "#" },
  ],
  tenders: [
    { id: 1, date: "18 Mar 2024", title: "Supply of specialized electronic components for radar systems", link: "#" },
    { id: 2, date: "16 Mar 2024", title: "Construction of advanced testing facility at DRDL", link: "#" },
    { id: 3, date: "12 Mar 2024", title: "Procurement of high-precision measurement equipment", link: "#" },
    { id: 4, date: "08 Mar 2024", title: "Annual maintenance contract for computing infrastructure", link: "#" },
    { id: 5, date: "05 Mar 2024", title: "Supply and installation of environmental test chambers", link: "#" },
  ],
  recruitment: [
    { id: 1, date: "20 Mar 2024", title: "Recruitment of Scientists 'B' in various disciplines", link: "#" },
    { id: 2, date: "15 Mar 2024", title: "Walk-in interview for Research Associates", link: "#" },
    { id: 3, date: "10 Mar 2024", title: "Recruitment of Technical Officers and Assistants", link: "#" },
    { id: 4, date: "05 Mar 2024", title: "Junior Research Fellowship positions in multiple laboratories", link: "#" },
    { id: 5, date: "01 Mar 2024", title: "Apprenticeship training program applications open", link: "#" },
  ],
  events: [
    { id: 1, date: "25 Mar 2024", title: "International Conference on Defence Electronics", link: "#" },
    { id: 2, date: "20 Mar 2024", title: "Workshop on Artificial Intelligence in Defence", link: "#" },
    { id: 3, date: "15 Mar 2024", title: "DRDO Young Scientists Conference 2024", link: "#" },
    { id: 4, date: "10 Mar 2024", title: "Industry-Academia Partnership Summit", link: "#" },
    { id: 5, date: "05 Mar 2024", title: "National Technology Day celebrations", link: "#" },
  ],
}

const tabs = [
  { id: "whatsNew", label: "What's New", icon: Bell },
  { id: "tenders", label: "Tenders", icon: Plus },
  { id: "recruitment", label: "Recruitment", icon: Users },
  { id: "events", label: "Events", icon: CalendarIcon },
]

export default function InformationDashboard() {
  const [activeTab, setActiveTab] = useState("whatsNew")

  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 mb-8"
      >
        Information Dashboard
      </motion.h2>

      <div className="bg-white/5 backdrop-blur-md dark:bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-xl">
        <div className="grid grid-cols-4 border-b border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                "flex items-center justify-center gap-2 py-4 text-sm md:text-base font-medium transition-all relative overflow-hidden",
                activeTab === tab.id ? "text-white" : "text-white/60 hover:text-white/80",
              )}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="h-4 w-4" />
              <span className="hidden md:inline">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                  layoutId="activeTabIndicator"
                />
              )}
            </button>
          ))}
        </div>

        <div className="p-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ScrollArea className="h-[350px] md:h-[400px]">
                <ul className="divide-y divide-white/10">
                  {newsData[activeTab as keyof typeof newsData].map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group"
                    >
                      <Link
                        href={item.link}
                        className="flex flex-col sm:flex-row sm:items-center gap-2 p-4 hover:bg-white/5 transition-colors relative overflow-hidden"
                      >
                        <span className="text-sm font-medium text-blue-400 dark:text-blue-300 sm:w-28 flex items-center gap-1">
                          <Calendar className="h-3 w-3 flex-shrink-0" />
                          {item.date}
                        </span>
                        <span className="flex-1 text-white group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </span>
                        <ChevronRight className="hidden sm:block h-4 w-4 text-white/40 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />

                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] bg-blue-500/30"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </ScrollArea>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-4 border-t border-white/10 flex justify-end">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 group" asChild>
            <Link href={`/${activeTab}`}>
              View All
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

