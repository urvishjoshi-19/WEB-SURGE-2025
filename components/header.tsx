"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  Search,
  ChevronDown,
  X,
  Sun,
  Moon,
  Globe,
  Zap,
  Shield,
  Rocket,
  FlaskRoundIcon as Flask,
  FileText,
  Camera,
  Share2,
  Phone,
  ArrowUpRight,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const TopNavItems = [
  { label: "A-", action: "decreaseFontSize" },
  { label: "A", action: "resetFontSize" },
  { label: "A+", action: "increaseFontSize" },
]

const MainNavItems = [
  {
    label: "Home",
    href: "/",
    icon: Zap,
    submenu: [],
  },
  {
    label: "About DRDO",
    href: "/about",
    icon: Shield,
    submenu: [""],
  },
  {
    label: "Organisation",
    href: "/org",
    icon: Flask,
    submenu: [
      "Organisation Chart",
    ],
  },

  {
    label: "Careers",
    href: "/careers",
    icon: ArrowUpRight,
    submenu: [""],
  },
  {
    label: "RTI",
    href: "/rti",
    icon: FileText,
    submenu: [""],
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: Phone,
    submenu: ["Headquarters", "DRDO Labs", "Feedback", "RTI"],
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()
  const isMobile = useMobile()
  const [scrolled, setScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (activeSubmenu) setActiveSubmenu(null)
  }

  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
    if (!searchOpen) {
      setTimeout(() => {
        document.getElementById("search-input")?.focus()
      }, 100)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 bg-gray-800 backdrop-blur-sm text-white", // Always dark grey and blurry background
      )}
    >
      {/* Top Navigation Bar */}
      <div className="bg-gradient-to-r from-[#001f3f] to-[#003366] dark:from-[#001f3f]/90 dark:to-[#003366]/90 backdrop-blur-sm text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
  <Link href="/" className="flex items-center gap-2 group">
    <motion.div
      className="relative overflow-hidden rounded-lg"
      whileHover={{ scale: 1 }} 
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Image
        src="/logo.png"
        alt="DRDO Logo"
        width={48}  // Set logo width to match container width (adjust as needed)
        height={40} // Set logo height to approximately the height of the navigation bar
        className="object-contain transition-all duration-300 group-hover:brightness-125"
      />
    </motion.div>
    <span className="font-bold text-lg md:text-xl hidden sm:inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-white group-hover:to-blue-300 transition-all duration-300">
      DRDO
    </span>
  </Link>
</div>

          <div className="flex items-center gap-2 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="hidden md:block"
            >
              <Link
                href="#main"
                className="text-xs md:text-sm hover:text-blue-300 transition-colors px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm hover:bg-white/20"
              >
                Skip to main content - Developed by Urvish & Sanika
              </Link>
            </motion.div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 backdrop-blur-sm rounded-full"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  <span className="text-xs md:text-sm">English</span>
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <DropdownMenuItem className="hover:bg-white/20 focus:bg-white/20">English</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-white/20 focus:bg-white/20">हिंदी</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full p-1">
              {TopNavItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 rounded-full h-7 w-7 p-0"
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="relative">
              <AnimatePresence>
                {searchOpen ? (
                  <motion.div
                    initial={{ width: 40, opacity: 0 }}
                    animate={{ width: isMobile ? 200 : 300, opacity: 1 }}
                    exit={{ width: 40, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-full overflow-hidden"
                  >
                    <input
                      id="search-input"
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-transparent border-none outline-none text-white px-4 py-1 w-full text-sm"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20 rounded-full"
                      onClick={toggleSearch}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10 backdrop-blur-sm rounded-full"
                      onClick={toggleSearch}
                    >
                      <Search className="h-4 w-4" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 backdrop-blur-sm rounded-full"
                >
                  {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              
                <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-white/20 focus:bg-white/20">
                  <Moon className="h-4 w-4 mr-2" /> Dark
                </DropdownMenuItem>
               
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/5 backdrop-blur-md dark:bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="hidden lg:flex">
              <ul className="flex">
                {MainNavItems.map((item) => (
                  <li key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center px-4 py-3 text-white group-hover:text-blue-300 transition-colors relative"
                    >
                      <span className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                        {item.submenu.length > 0 && <ChevronDown className="h-3 w-3" />}
                      </span>
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-blue-400 rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </Link>

                    {item.submenu.length > 0 && (
                      <motion.div
                        className="absolute left-0 top-full w-64 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-lg hidden group-hover:block z-50 overflow-hidden"
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        transition={{ type: "spring", stiffness: 500, damping: 30, delay: 0.1 }}
                      >
                        <ul className="py-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem}>
                              <Link
                                href="#"
                                className="block px-4 py-2 text-white hover:bg-white/20 hover:text-blue-300 transition-colors"
                              >
                                {subItem}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="fixed left-0 top-0 h-full w-[80%] max-w-sm bg-gradient-to-br from-[#001f3f] to-[#003366] backdrop-blur-md shadow-xl overflow-y-auto"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-white/20">
                <span className="font-bold text-lg text-white">Menu</span>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-white hover:bg-white/20">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="p-4">
                <ul className="space-y-1">
                  {MainNavItems.map((item) => (
                    <li key={item.label}>
                      {item.submenu.length > 0 ? (
                        <div>
                          <button
                            className="flex justify-between items-center w-full px-4 py-3 text-left text-white hover:bg-white/10 rounded-lg transition-colors"
                            onClick={() => toggleSubmenu(item.label)}
                          >
                            <span className="flex items-center gap-2">
                              <item.icon className="h-5 w-5" />
                              {item.label}
                            </span>
                            <motion.div
                              animate={{ rotate: activeSubmenu === item.label ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-4 w-4" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {activeSubmenu === item.label && (
                              <motion.ul
                                className="pl-4 mt-1 space-y-1 border-l-2 border-blue-400/30"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {item.submenu.map((subItem) => (
                                  <motion.li
                                    key={subItem}
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Link
                                      href="#"
                                      className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                      onClick={toggleMobileMenu}
                                    >
                                      {subItem}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          <item.icon className="h-5 w-5" />
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
