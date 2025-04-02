import Link from "next/link"
import { Book, Briefcase, FileText, Image, Info, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  {
    title: "Publications",
    icon: Book,
    href: "/publications",
  },
  {
    title: "Careers",
    icon: Briefcase,
    href: "/careers",
  },
  {
    title: "Media Gallery",
    icon: Image,
    href: "/media",
  },
  {
    title: "RTI",
    icon: FileText,
    href: "/rti",
  },
  {
    title: "About Us",
    icon: Info,
    href: "/about",
  },
  {
    title: "Contact",
    icon: Mail,
    href: "/contact",
  },
]

export default function QuickLinks() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-[#003366] dark:text-white mb-6">Quick Links</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {quickLinks.map((link) => (
          <Button
            key={link.title}
            variant="outline"
            className="h-auto flex-col py-6 hover:bg-[#f5f5f5] hover:text-[#0077cc] dark:hover:bg-gray-800"
            asChild
          >
            <Link href={link.href}>
              <link.icon className="h-6 w-6 mb-2" />
              <span>{link.title}</span>
            </Link>
          </Button>
        ))}
      </div>
    </section>
  )
}

