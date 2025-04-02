"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Rocket,
  Shield,
  Zap,
  Radar,
  Satellite,
  Cpu,
  ChevronDown,
  ChevronUp,
  Clock,
  Calendar,
  Users,
  Target,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

// Mock mission data
const missions = [
  {
    id: 1,
    name: "Project Astra",
    description: "Next-generation beyond visual range air-to-air missile system",
    status: "In Progress",
    progress: 78,
    category: "Missile Systems",
    icon: Rocket,
    priority: "High",
    startDate: "2022-06-15",
    endDate: "2024-12-30",
    lastUpdated: "2 hours ago",
    team: [
      { name: "Dr. Rajesh Kumar", role: "Project Lead" },
      { name: "Dr. Priya Singh", role: "Systems Engineer" },
      { name: "Dr. Vikram Mehta", role: "Propulsion Specialist" },
    ],
    milestones: [
      { name: "Design Phase", completed: true, date: "2022-09-01" },
      { name: "Prototype Development", completed: true, date: "2023-03-15" },
      { name: "Initial Testing", completed: true, date: "2023-08-20" },
      { name: "Field Trials", completed: false, date: "2024-02-10" },
      { name: "Final Integration", completed: false, date: "2024-07-05" },
      { name: "Deployment", completed: false, date: "2024-12-15" },
    ],
    updates: [
      { date: "2024-03-15", text: "Successfully completed third phase of propulsion testing" },
      { date: "2024-02-28", text: "Guidance system calibration achieved 98% accuracy in simulations" },
      { date: "2024-01-10", text: "New composite materials approved for airframe construction" },
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    name: "Quantum Secure Communications",
    description: "Developing quantum-resistant encryption for military communications",
    status: "On Track",
    progress: 62,
    category: "Cybersecurity",
    icon: Shield,
    priority: "Critical",
    startDate: "2023-01-10",
    endDate: "2025-06-30",
    lastUpdated: "5 hours ago",
    team: [
      { name: "Dr. Aisha Patel", role: "Quantum Computing Lead" },
      { name: "Dr. Sanjay Gupta", role: "Cryptography Expert" },
      { name: "Dr. Meera Nair", role: "Security Analyst" },
    ],
    milestones: [
      { name: "Algorithm Development", completed: true, date: "2023-05-20" },
      { name: "Quantum Key Distribution Prototype", completed: true, date: "2023-11-15" },
      { name: "Security Audit", completed: false, date: "2024-04-30" },
      { name: "Field Testing", completed: false, date: "2024-09-10" },
      { name: "Integration with Existing Systems", completed: false, date: "2025-02-15" },
    ],
    updates: [
      { date: "2024-03-10", text: "Quantum key distribution achieved 99.7% reliability in lab conditions" },
      { date: "2024-02-15", text: "New post-quantum cryptographic algorithm developed and validated" },
      { date: "2024-01-05", text: "Secured additional funding for expanded research scope" },
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    name: "Advanced Combat Suit",
    description: "Next-generation soldier protection system with integrated electronics",
    status: "Delayed",
    progress: 45,
    category: "Personal Protection",
    icon: Zap,
    priority: "Medium",
    startDate: "2022-11-05",
    endDate: "2024-10-15",
    lastUpdated: "1 day ago",
    team: [
      { name: "Dr. Arjun Sharma", role: "Materials Science Lead" },
      { name: "Dr. Lakshmi Rao", role: "Electronics Integration" },
      { name: "Dr. Nikhil Verma", role: "Ergonomics Specialist" },
    ],
    milestones: [
      { name: "Material Research", completed: true, date: "2023-02-28" },
      { name: "Prototype Design", completed: true, date: "2023-07-15" },
      { name: "Electronics Integration", completed: false, date: "2023-12-10" },
      { name: "Field Testing", completed: false, date: "2024-05-20" },
      { name: "Production Planning", completed: false, date: "2024-09-01" },
    ],
    updates: [
      { date: "2024-03-05", text: "Facing delays in electronics miniaturization, revised timeline being developed" },
      { date: "2024-02-10", text: "New carbon-fiber composite passed ballistic testing" },
      { date: "2024-01-20", text: "Power management system redesigned for 30% longer operational time" },
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    name: "Hypersonic Cruise Vehicle",
    description: "Developing Mach 8+ capable cruise vehicle with precision targeting",
    status: "In Progress",
    progress: 35,
    category: "Aerospace",
    icon: Radar,
    priority: "High",
    startDate: "2023-03-01",
    endDate: "2026-12-31",
    lastUpdated: "3 days ago",
    team: [
      { name: "Dr. Karthik Menon", role: "Aerodynamics Lead" },
      { name: "Dr. Sunita Desai", role: "Propulsion Engineer" },
      { name: "Dr. Rahul Kapoor", role: "Materials Specialist" },
    ],
    milestones: [
      { name: "Concept Design", completed: true, date: "2023-07-15" },
      { name: "Wind Tunnel Testing", completed: true, date: "2023-12-20" },
      { name: "Propulsion System Development", completed: false, date: "2024-06-30" },
      { name: "Guidance System Integration", completed: false, date: "2025-01-15" },
      { name: "Flight Testing", completed: false, date: "2025-08-10" },
    ],
    updates: [
      { date: "2024-02-28", text: "New heat-resistant alloy successfully tested at Mach 7 conditions" },
      { date: "2024-01-15", text: "Computational fluid dynamics models validated with wind tunnel data" },
      { date: "2023-12-05", text: "Secured international collaboration for propulsion technology" },
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    name: "Autonomous Underwater Vehicle",
    description: "AI-powered underwater reconnaissance and surveillance system",
    status: "On Track",
    progress: 68,
    category: "Naval Systems",
    icon: Satellite,
    priority: "Medium",
    startDate: "2022-09-10",
    endDate: "2024-08-15",
    lastUpdated: "12 hours ago",
    team: [
      { name: "Dr. Manoj Iyer", role: "Robotics Lead" },
      { name: "Dr. Ananya Sen", role: "AI Systems Engineer" },
      { name: "Dr. Deepak Nair", role: "Hydrodynamics Specialist" },
    ],
    milestones: [
      { name: "Platform Design", completed: true, date: "2022-12-15" },
      { name: "AI Algorithm Development", completed: true, date: "2023-04-20" },
      { name: "Prototype Construction", completed: true, date: "2023-09-10" },
      { name: "Shallow Water Testing", completed: true, date: "2024-01-15" },
      { name: "Deep Sea Trials", completed: false, date: "2024-05-30" },
    ],
    updates: [
      { date: "2024-03-12", text: "Autonomous navigation system achieved 95% accuracy in complex underwater terrain" },
      { date: "2024-02-20", text: "Battery life extended to 72 hours through new power management algorithms" },
      { date: "2024-01-25", text: "Acoustic stealth profile improved by 40% with new propulsion design" },
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    name: "Quantum Radar System",
    description: "Next-generation radar using quantum entanglement for stealth detection",
    status: "Early Stage",
    progress: 22,
    category: "Detection Systems",
    icon: Cpu,
    priority: "High",
    startDate: "2023-07-01",
    endDate: "2027-06-30",
    lastUpdated: "2 days ago",
    team: [
      { name: "Dr. Vivek Malhotra", role: "Quantum Physics Lead" },
      { name: "Dr. Neha Sharma", role: "Radar Systems Engineer" },
      { name: "Dr. Rajiv Khanna", role: "Signal Processing Expert" },
    ],
    milestones: [
      { name: "Theoretical Framework", completed: true, date: "2023-11-30" },
      { name: "Quantum Emitter Development", completed: false, date: "2024-06-15" },
      { name: "Receiver Technology", completed: false, date: "2025-01-20" },
      { name: "System Integration", completed: false, date: "2025-09-10" },
      { name: "Field Testing", completed: false, date: "2026-05-15" },
    ],
    updates: [
      { date: "2024-03-01", text: "Breakthrough in quantum entanglement preservation at operational distances" },
      { date: "2024-02-05", text: "New cryogenic system developed for quantum components" },
      { date: "2024-01-10", text: "Theoretical detection range extended by 300% in simulations" },
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
]

// Filter categories
const categories = [
  "All",
  "Missile Systems",
  "Cybersecurity",
  "Personal Protection",
  "Aerospace",
  "Naval Systems",
  "Detection Systems",
]

export default function LiveMissionDashboard() {
  const [expandedMission, setExpandedMission] = useState<number | null>(null)
  const [filter, setFilter] = useState("All")
  const [refreshing, setRefreshing] = useState(false)
  const [missionData, setMissionData] = useState(missions)

  // Function to toggle mission expansion
  const toggleMission = (id: number) => {
    setExpandedMission(expandedMission === id ? null : id)
  }

  // Function to filter missions
  const filteredMissions = filter === "All" ? missionData : missionData.filter((mission) => mission.category === filter)

  // Function to simulate refreshing data
  const refreshData = () => {
    setRefreshing(true)

    // Simulate API call delay
    setTimeout(() => {
      // Simulate random progress updates
      const updatedMissions = missionData.map((mission) => ({
        ...mission,
        progress: Math.min(100, mission.progress + Math.floor(Math.random() * 5)),
        lastUpdated: "Just now",
      }))

      setMissionData(updatedMissions)
      setRefreshing(false)
    }, 1500)
  }

  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500"
        >
          Live Mission Dashboard
        </motion.h2>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Tabs defaultValue="All" value={filter} onValueChange={setFilter} className="w-full sm:w-auto">
            <TabsList className="grid grid-cols-3 sm:grid-cols-7 h-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs py-2 px-3 data-[state=active]:bg-blue-500/20"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Button onClick={refreshData} disabled={refreshing} className="bg-blue-600 hover:bg-blue-700 text-white">
            {refreshing ? "Refreshing..." : "Refresh Data"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMissions.map((mission) => (
          <motion.div
            key={mission.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: mission.id * 0.1 }}
            layout
          >
            <Card
              className={cn(
                "h-full bg-white/5 backdrop-blur-md border-white/10 text-white overflow-hidden transition-all duration-300",
                expandedMission === mission.id ? "shadow-lg shadow-blue-500/20" : "",
              )}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "h-10 w-10 rounded-full flex items-center justify-center",
                        mission.status === "In Progress"
                          ? "bg-blue-500/20 text-blue-400"
                          : mission.status === "On Track"
                            ? "bg-green-500/20 text-green-400"
                            : mission.status === "Delayed"
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-purple-500/20 text-purple-400",
                      )}
                    >
                      <mission.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-white">{mission.name}</CardTitle>
                      <CardDescription className="text-white/70 text-xs">{mission.category}</CardDescription>
                    </div>
                  </div>

                  <Badge
                    className={cn(
                      "text-xs",
                      mission.status === "In Progress"
                        ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
                        : mission.status === "On Track"
                          ? "bg-green-500/20 text-green-400 hover:bg-green-500/30"
                          : mission.status === "Delayed"
                            ? "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30"
                            : "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30",
                    )}
                  >
                    {mission.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-white/70 text-sm mb-4">{mission.description}</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1 text-xs">
                      <span className="text-white/70">Progress</span>
                      <span className="text-white font-medium">{mission.progress}%</span>
                    </div>
                    <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={cn(
                          "absolute top-0 left-0 h-full rounded-full",
                          mission.progress < 30
                            ? "bg-purple-500"
                            : mission.progress < 70
                              ? "bg-blue-500"
                              : "bg-green-500",
                        )}
                        initial={{ width: 0 }}
                        animate={{ width: `${mission.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-white/70">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Updated: {mission.lastUpdated}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      <span>Priority: {mission.priority}</span>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedMission === mission.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-6 overflow-hidden"
                    >
                      <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                        <Image
                          src={mission.image || "/placeholder.svg"}
                          alt={mission.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-blue-400" />
                          Timeline
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-white/5 p-2 rounded-md">
                            <span className="text-white/70">Start Date:</span>
                            <div className="text-white">{new Date(mission.startDate).toLocaleDateString()}</div>
                          </div>
                          <div className="bg-white/5 p-2 rounded-md">
                            <span className="text-white/70">Target Completion:</span>
                            <div className="text-white">{new Date(mission.endDate).toLocaleDateString()}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-400" />
                          Team
                        </h4>
                        <div className="space-y-2">
                          {mission.team.map((member, index) => (
                            <div
                              key={index}
                              className="bg-white/5 p-2 rounded-md flex justify-between items-center text-xs"
                            >
                              <span className="text-white">{member.name}</span>
                              <span className="text-white/70">{member.role}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-2">Milestones</h4>
                        <div className="space-y-2">
                          {mission.milestones.map((milestone, index) => (
                            <div
                              key={index}
                              className="bg-white/5 p-2 rounded-md flex justify-between items-center text-xs"
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className={cn(
                                    "h-3 w-3 rounded-full",
                                    milestone.completed ? "bg-green-500" : "bg-white/20",
                                  )}
                                />
                                <span className={cn(milestone.completed ? "text-white" : "text-white/70")}>
                                  {milestone.name}
                                </span>
                              </div>
                              <span className="text-white/70">{new Date(milestone.date).toLocaleDateString()}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-white font-medium mb-2">Recent Updates</h4>
                        <div className="space-y-2">
                          {mission.updates.map((update, index) => (
                            <div key={index} className="bg-white/5 p-2 rounded-md text-xs">
                              <div className="text-blue-400 mb-1">{new Date(update.date).toLocaleDateString()}</div>
                              <p className="text-white/90">{update.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>

              <CardFooter>
                <Button
                  variant="ghost"
                  className="w-full text-blue-400 hover:text-white hover:bg-blue-500/20"
                  onClick={() => toggleMission(mission.id)}
                >
                  {expandedMission === mission.id ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>View Details</span>
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

