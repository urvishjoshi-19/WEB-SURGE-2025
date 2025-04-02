"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin, Phone, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/90 to-[#000c19]/90 backdrop-blur-sm" />

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-blue-500/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Top Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About DRDO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                About DRDO
              </span>
            </h3>
            <div className="relative h-24 w-full mb-4 rounded-lg overflow-hidden">
  <Image
    src="/drdo_logo_0.png"
    alt="DRDO Overview"
    width={402}          // Set the width of the image
    height={95}          // Set the height of the image
    className="object-cover" // Ensures the image covers the container while maintaining aspect ratio
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
      <Play className="h-8 w-8" />
    </Button>
  </div>
</div>

            <p className="text-white/70 text-sm mb-4">
              Defence Research and Development Organisation (DRDO) is India's premier R&D organisation dedicated to
              developing defence technologies and systems to enhance national security.
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon href="https://twitter.com" icon={Twitter} />
              <SocialIcon href="https://facebook.com" icon={Facebook} />
              <SocialIcon href="https://youtube.com" icon={Youtube} />
              <SocialIcon href="https://linkedin.com" icon={Linkedin} />
              <SocialIcon href="https://instagram.com" icon={Instagram} />
            </div>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Important Links
              </span>
            </h3>
            <div className="space-y-1">
              {[
                { label: "Sitemap", href: "/sitemap" },
                { label: "Right to Information", href: "/rti" },
                { label: "Website Policies", href: "/policies" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Help", href: "/help" },
              ].map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-white/70 hover:text-blue-400 transition-colors group flex items-center"
                  >
                    <motion.span
                      className="inline-block w-1 h-1 bg-blue-500 rounded-full mr-2"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                    />
                    {link.label}
                    <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Contact Us
              </span>
            </h3>
            <address className="not-italic text-sm text-white/70 space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                  <MapPin className="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <p>DRDO Bhawan</p>
                  <p>Rajaji Marg, New Delhi - 110011</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Phone className="h-4 w-4 text-blue-400" />
                </div>
                <p>+91-11-23010101</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-full">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <p>director@drdo.gov.in</p>
              </div>
            </address>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Newsletter
              </span>
            </h3>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to our newsletter to receive updates on DRDO activities and achievements.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <AnimatePresence>
                {isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-blue-500/20 text-blue-300 p-3 rounded-lg text-center"
                  >
                    Thank you for subscribing!
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2"
                  >
                    <Input
                      type="email"
                      placeholder="Your email address"
                      className="bg-white/5 border-white/10 text-white focus:border-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Subscribe
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <motion.div
                className="relative h-10 w-10"
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/logo.png"
                  alt="Government of India Emblem"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <div className="text-xs text-white/60">
                <p>© {new Date().getFullYear()} DRDO. All Rights Reserved.</p>
                <div className="flex items-center gap-1">
                  <span>Last Updated:</span>
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {new Date().toLocaleDateString()}
                  </motion.span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <TooltipProvider>
                {[
                  { label: "Website Policies", href: "/policies" },
                  { label: "Disclaimer", href: "/disclaimer" },
                  { label: "Accessibility", href: "/accessibility" },
                  { label: "Help", href: "/help" },
                ].map((link) => (
                  <Tooltip key={link.label}>
                    <TooltipTrigger asChild>
                      <Link href={link.href} className="text-xs text-white/60 hover:text-blue-400 transition-colors">
                        {link.label}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-black/80 backdrop-blur-md border-white/10 text-white">
                      <p>View {link.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center h-8 w-8 rounded-full bg-white/5 text-white/70 hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
      >
        <Icon className="h-4 w-4" />
        <span className="sr-only">Social Media</span>
      </Link>
    </motion.div>
  )
}

function Play({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}

