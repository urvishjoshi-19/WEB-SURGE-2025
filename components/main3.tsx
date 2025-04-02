"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

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

export default function NewsUpdates() {
  const [activeTab, setActiveTab] = useState("whatsNew")

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-[#003366] dark:text-white mb-6">News & Updates</h2>

      <Tabs defaultValue="whatsNew" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="whatsNew">What's New</TabsTrigger>
          <TabsTrigger value="tenders">Tenders</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>

        <div className="border rounded-lg overflow-hidden">
          <TabsContent value="whatsNew" className="m-0">
            <NewsTabContent items={newsData.whatsNew} />
          </TabsContent>

          <TabsContent value="tenders" className="m-0">
            <NewsTabContent items={newsData.tenders} />
          </TabsContent>

          <TabsContent value="recruitment" className="m-0">
            <NewsTabContent items={newsData.recruitment} />
          </TabsContent>

          <TabsContent value="events" className="m-0">
            <NewsTabContent items={newsData.events} />
          </TabsContent>

          <div className="p-4 border-t">
            <Button variant="outline" className="w-full" asChild>
              <Link href={`/${activeTab}`}>
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Tabs>
    </section>
  )
}

function NewsTabContent({ items }: { items: { id: number; date: string; title: string; link: string }[] }) {
  return (
    <ScrollArea className="h-[300px]">
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item.id} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <Link href={item.link} className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 sm:w-28">{item.date}</span>
              <span className="flex-1 text-[#003366] dark:text-white hover:text-[#0077cc] dark:hover:text-[#0077cc] transition-colors">
                {item.title}
              </span>
              <ChevronRight className="hidden sm:block h-4 w-4 text-gray-400" />
            </Link>
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}

