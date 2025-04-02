import Link from "next/link"
import {
  FolderKanban,
  Building2,
  Network,
  ShieldCheck,
  Landmark,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const glanceLinks = [
  {
    title: "Technology Clusters",
    icon: FolderKanban,
    href: "/technology",
  },
  
  {
    title: "Laboratories & Establishments",
    icon: Building2,
    href: "/laboratories",
  },
  {
    title: "Corporate Clusters",
    icon: ShieldCheck,
    href: "/corporate-clusters",
  },
  {
    title: "Corporate Directorates",
    icon: Landmark,
    href: "/corporate-directorates",
  },
  {
    title: "DER & IPR",
    icon: FileText,
    href: "/der-ipr",
  },
  {
    title: "Innovation Clusters",
    icon: FolderKanban,
    href: "/technology",
  },
]

export default function AtAGlance() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-[#003366] dark:text-white mb-6">At a Glance</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {glanceLinks.map((link) => (
          <Button
            key={link.title}
            variant="outline"
            className="h-auto flex-col py-6 hover:bg-[#f5f5f5] hover:text-[#0077cc] dark:hover:bg-gray-800 text-center"
            asChild
          >
            <Link href={link.href}>
              <link.icon className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium">{link.title}</span>
            </Link>
          </Button>
        ))}
      </div>
    </section>
  )
}
