"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, FlaskRoundIcon as Flask, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredItems = [
  {
    title: "DRDO Labs",
    description:
      "Explore our network of specialized laboratories working on cutting-edge defence technologies across the country.",
    icon: Flask,
    buttonText: "Explore",
    link: "/labs",
  },
  {
    title: "Products & Services",
    description: "Discover the wide range of defence systems, technologies and solutions developed by DRDO.",
    icon: Shield,
    buttonText: "View",
    link: "/products",
  },
  {
    title: "Technology Transfer",
    description:
      "Learn about our technology transfer process and how industry can partner with DRDO for commercialization.",
    icon: Zap,
    buttonText: "Learn More",
    link: "/technology-transfer",
  },
]

export default function SpotlightSections() {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500 mb-8"
      >
        Spotlight Sections
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group h-full bg-white/5 backdrop-blur-md dark:bg-white/5 border-white/10 text-white overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-2 relative">
                <motion.div
                  className="mb-2 h-12 w-12 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <item.icon className="h-6 w-6 relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-blue-500/30"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                      scale: 1.5,
                      opacity: 1,
                      transition: {
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                        repeatType: "reverse",
                      },
                    }}
                    style={{ borderRadius: "50%" }}
                  />
                </motion.div>
                <CardTitle className="text-white">{item.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-white/70">{item.description}</CardDescription>
              </CardContent>

              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-white hover:bg-blue-500/20 group/button"
                  asChild
                >
                  <Link href={item.link}>
                    {item.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

