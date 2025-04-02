import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const featuredPublication = {
  title: "Defence Science Journal - Volume 74, Issue 1",
  date: "March 2024",
  description:
    "Special issue on Advanced Materials for Defence Applications featuring research papers on composite materials, nanomaterials, and high-temperature alloys.",
  image: "/69.jpeg",
  link: "#",
}

const recentPublications = [
  {
    id: 1,
    title: "DRDO Technology Focus - Radar Systems",
    date: "February 2024",
    description: "Overview of recent advancements in radar technology for defence applications.",
    image: "/drdotech.jpeg",
    link: "#",
  },
  {
    id: 2,
    title: "DRDO Monograph on Missile Guidance Systems",
    date: "January 2024",
    description: "Comprehensive study on various missile guidance technologies and their applications.",
    image: "/drdomono.jpeg",
    link: "#",
  },
  {
    id: 3,
    title: "Defence Science Journal - Volume 73, Issue 6",
    date: "December 2023",
    description: "Research papers on cybersecurity, artificial intelligence, and quantum computing in defence.",
    image: "/drdo3.jpeg",
    link: "#",
  },
  {
    id: 4,
    title: "DRDO Newsletter - Q4 2023",
    date: "December 2023",
    description: "Quarterly update on DRDO activities, achievements, and events.",
    image: "/drdo4.jpg",
    link: "#",
  },
]

export default function LatestPublications() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-[#003366] dark:text-white mb-6">Latest Publications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Publication Card */}
        <Card className="md:col-span-1">
          <div className="flex flex-col h-full">
            <div className="relative w-full h-56">
              <Image
                src={featuredPublication.image || "/placeholder.svg"}
                alt={featuredPublication.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-[#003366] dark:text-white">
                {featuredPublication.title}
              </CardTitle>
              <CardDescription>{featuredPublication.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 dark:text-gray-300">
                {featuredPublication.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={featuredPublication.link}>
                  Read Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </div>
        </Card>

        {/* Recent Publications List */}
        <div className="space-y-4">
          {recentPublications.map((publication) => (
            <div
              key={publication.id}
              className="flex gap-4 p-4 border rounded-lg hover:shadow-sm transition-shadow"
            >
              <div className="flex-shrink-0">
                <Image
                  src={publication.image || "/placeholder.svg"}
                  alt={publication.title}
                  width={64}
                  height={80}
                  className="object-cover rounded"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-[#003366] dark:text-white mb-1">
                  <Link href={publication.link} className="hover:text-[#0077cc] transition-colors">
                    {publication.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{publication.date}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {publication.description}
                </p>
              </div>
            </div>
          ))}

          <Button variant="outline" className="w-full" asChild>
            <Link href="/publications">
              View All Publications
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
