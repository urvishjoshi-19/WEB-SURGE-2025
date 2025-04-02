"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Shield, Info, X, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

// Mock security alerts data
const securityAlerts = [
  {
    id: 1,
    level: "low",
    title: "Routine Security Update",
    message: "Regular security patches have been applied to all systems.",
    timestamp: "2024-04-02T08:30:00Z",
  },
  {
    id: 2,
    level: "medium",
    title: "Increased Phishing Attempts",
    message: "Be vigilant of suspicious emails targeting defense personnel.",
    timestamp: "2024-04-02T10:15:00Z",
  },
  {
    id: 3,
    level: "high",
    title: "Critical Infrastructure Alert",
    message: "Enhanced security protocols activated for critical infrastructure protection.",
    timestamp: "2024-04-02T12:45:00Z",
  },
  {
    id: 4,
    level: "low",
    title: "Cybersecurity Awareness Training",
    message: "New training modules available for all personnel.",
    timestamp: "2024-04-02T14:20:00Z",
  },
  {
    id: 5,
    level: "medium",
    title: "Suspicious Network Activity",
    message: "Monitoring increased for potential unauthorized access attempts.",
    timestamp: "2024-04-02T16:10:00Z",
  },
]

export default function SecurityAlertBar() {
  const [currentThreatLevel, setCurrentThreatLevel] = useState<"low" | "medium" | "high">("low")
  const [currentAlert, setCurrentAlert] = useState(securityAlerts[0])
  const [showAlert, setShowAlert] = useState(true)
  const { toast } = useToast()

  // Function to get alert icon based on level
  const getAlertIcon = (level: string) => {
    switch (level) {
      case "high":
        return <AlertTriangle className="h-5 w-5 text-red-400" />
      case "medium":
        return <Bell className="h-5 w-5 text-amber-400" />
      case "low":
        return <Info className="h-5 w-5 text-blue-400" />
      default:
        return <Info className="h-5 w-5 text-blue-400" />
    }
  }

  // Function to get alert color based on level
  const getAlertColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      case "medium":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      case "low":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default:
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    }
  }

  // Function to get badge color based on level
  const getBadgeColor = (level: string) => {
    switch (level) {
      case "high":
        return "bg-red-500 hover:bg-red-600 text-white"
      case "medium":
        return "bg-amber-500 hover:bg-amber-600 text-white"
      case "low":
        return "bg-blue-500 hover:bg-blue-600 text-white"
      default:
        return "bg-blue-500 hover:bg-blue-600 text-white"
    }
  }

  // Simulate changing threat levels and alerts
  useEffect(() => {
    // Initial toast
    toast({
      title: "Security Alert System Active",
      description: "Monitoring for potential security threats in real-time.",
      variant: "default",
    })

    // Simulate changing alerts
    const alertInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * securityAlerts.length)
      const newAlert = securityAlerts[randomIndex]

      setCurrentAlert(newAlert)
      setCurrentThreatLevel(newAlert.level as "low" | "medium" | "high")

      // Show toast for medium and high alerts
      if (newAlert.level !== "low") {
        toast({
          title: newAlert.title,
          description: newAlert.message,
          variant: newAlert.level === "high" ? "destructive" : "default",
        })
      }
    }, 8000) // Change alert every 8 seconds

    return () => clearInterval(alertInterval)
  }, [toast])

  if (!showAlert) return null

  return (
    <motion.div
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 ${getAlertColor(currentThreatLevel)} backdrop-blur-md border rounded-lg shadow-lg overflow-hidden`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            {getAlertIcon(currentThreatLevel)}
            <h3 className="font-medium">Security Alert</h3>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getBadgeColor(currentThreatLevel)}>{currentThreatLevel.toUpperCase()} THREAT</Badge>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-white/70 hover:text-white hover:bg-white/10 -mr-2"
              onClick={() => setShowAlert(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentAlert.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-2">
              <h4 className="text-white font-medium">{currentAlert.title}</h4>
              <p className="text-white/80 text-sm">{currentAlert.message}</p>
            </div>
            <div className="flex justify-between items-center text-xs text-white/60">
              <span>{new Date(currentAlert.timestamp).toLocaleTimeString()}</span>
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>DRDO Security Division</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="h-1 w-full bg-white/10">
        <motion.div
          className={`h-full ${currentThreatLevel === "high" ? "bg-red-500" : currentThreatLevel === "medium" ? "bg-amber-500" : "bg-blue-500"}`}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />
      </div>
    </motion.div>
  )
}

