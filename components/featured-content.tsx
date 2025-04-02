import Link from "next/link"
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

export default function FeaturedContent() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold text-[#003366] dark:text-white mb-6">Featured</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredItems.map((item) => (
          <Card key={item.title} className="group transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="mb-2 h-12 w-12 rounded-lg bg-[#0077cc] text-white flex items-center justify-center">
                <item.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-[#003366] dark:text-white">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="group-hover:bg-[#0077cc] group-hover:text-white transition-colors"
                asChild
              >
                <Link href={item.link}>
                  {item.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

