import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-3 px-4">
        <ol className="flex space-x-2 text-sm text-gray-700">
          <li>
            <a href="/" className="text-blue-600 hover:underline">Home</a>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li className="text-gray-500">Careers</li>
        </ol>
      </nav>

      <div
  className="relative w-full h-64 bg-cover bg-center"
  style={{ backgroundImage: "url('/42.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for opacity */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold">Careers at DRDO</h1>
  </div>
</div>


      {/* Main Content */}
      <main className="flex-grow px-4 md:px-20 py-12 bg-white space-y-12">

        {/* Careers Overview */}
        <section>
          <h2 className="text-3xl font-bold text-[#003366] mb-4">Career Opportunities</h2>
          <p className="text-[#333333] text-lg mb-4">
            DRDO offers challenging and exciting career opportunities in research, technical, and administrative domains. Join us to be part of India's premier defence research organization.
          </p>
        </section>

        {/* Career Categories */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CareerCard title="Running Contests for Students" description="Explore current contests and innovation challenges for students." />
          <CareerCard title="Scientist Recruitment" description="Join as a Scientist through RAC. Check the latest recruitment notifications." link="https://rac.gov.in" />
          <CareerCard title="Other Recruitment" description="Find opportunities across various technical and support roles within DRDO." />
          <CareerCard title="Scientists" description="Innovative R&D roles for talented scientists and engineers." />
          <CareerCard title="Technical Staff" description="Support defence R&D with hands-on technical expertise." />
          <CareerCard title="Admin & Allied" description="Roles in administration, HR, finance, and more." />
          <CareerCard title="Research Fellows" description="Opportunities for Junior Research Fellows (JRF) and Research Associates (RA)." />
          <CareerCard title="Recruitment Rules" description="Understand the recruitment rules and eligibility norms for DRDO positions." />
        </section>

        {/* Search for Career */}
        <section>
          <h3 className="text-2xl font-semibold text-[#003366] mb-3">Search for Career</h3>
          <div className="flex gap-2 max-w-md">
            <Input placeholder="Search job title, category..." />
            <Button>Search</Button>
          </div>
        </section>

        {/* Current Openings Table */}
        <section>
          <h3 className="text-2xl font-semibold text-[#003366] mb-6">Current Openings</h3>
          <div className="overflow-x-auto border rounded-lg w-full">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#003366] text-white">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Last Date</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Link/Documents</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Publish Date</th>
                </tr>
              </thead>
              <tbody className="bg-white text-[#333333]">
                {jobOpenings.map((job, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{job.title}</td>
                    <td className="px-4 py-2">{job.lastDate}</td>
                    <td className="px-4 py-2">{job.category}</td>
                    <td className="px-4 py-2">
                      <a href={job.link} target="_blank" className="text-blue-600 hover:underline">
                        View
                      </a>
                    </td>
                    <td className="px-4 py-2">{job.status}</td>
                    <td className="px-4 py-2">{job.publishDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Card for Career Categories
function CareerCard({ title, description, link }: { title: string; description: string; link?: string }) {
  return (
<Card className="p-4 hover:shadow-md transition bg-white text-[#333333]">
<div className="flex flex-col justify-between h-full space-y-2">
        <h4 className="text-xl font-semibold text-[#003366]">{title}</h4>
        <p className="text-[#333333] text-sm">{description}</p>
        {link && (
          <a href={link} target="_blank" className="text-blue-600 text-sm hover:underline">
            Visit
          </a>
        )}
      </div>
    </Card>
  );
}

// Example data (now with 10 job openings)
const jobOpenings = [
  {
    title: "Junior Research Fellow (JRF) - Electronics",
    lastDate: "25-Apr-2025",
    category: "JRF",
    link: "/pdfs/jrf-electronics.pdf",
    status: "Open",
    publishDate: "01-Apr-2025",
  },
  {
    title: "RA Position in Materials Science",
    lastDate: "20-Apr-2025",
    category: "RA",
    link: "/pdfs/ra-materials.pdf",
    status: "Open",
    publishDate: "29-Mar-2025",
  },
  {
    title: "Admin Assistant Recruitment",
    lastDate: "10-May-2025",
    category: "Admin & Allied",
    link: "/pdfs/admin-assistant.pdf",
    status: "Open",
    publishDate: "28-Mar-2025",
  },
  {
    title: "Scientist – Aerospace Engineering",
    lastDate: "15-May-2025",
    category: "Scientists",
    link: "/pdfs/scientist-aerospace.pdf",
    status: "Open",
    publishDate: "25-Mar-2025",
  },
  {
    title: "Scientist – Mechanical Engineering",
    lastDate: "18-May-2025",
    category: "Scientists",
    link: "/pdfs/scientist-mechanical.pdf",
    status: "Open",
    publishDate: "23-Mar-2025",
  },
  {
    title: "Research Fellow – AI & Robotics",
    lastDate: "30-Apr-2025",
    category: "Research Fellow",
    link: "/pdfs/research-fellow-ai.pdf",
    status: "Open",
    publishDate: "15-Mar-2025",
  },
  {
    title: "Technical Officer – IT Systems",
    lastDate: "22-Apr-2025",
    category: "Technical Staff",
    link: "/pdfs/technical-officer-it.pdf",
    status: "Open",
    publishDate: "12-Mar-2025",
  },
  {
    title: "Junior Engineer – Electrical",
    lastDate: "5-May-2025",
    category: "Technical Staff",
    link: "/pdfs/junior-engineer-electrical.pdf",
    status: "Open",
    publishDate: "10-Mar-2025",
  },
  {
    title: "Admin Officer – HR",
    lastDate: "20-Apr-2025",
    category: "Admin & Allied",
    link: "/pdfs/admin-officer-hr.pdf",
    status: "Open",
    publishDate: "18-Mar-2025",
  },
  {
    title: "Scientist – Cybersecurity",
    lastDate: "15-Jun-2025",
    category: "Scientists",
    link: "/pdfs/scientist-cybersecurity.pdf",
    status: "Open",
    publishDate: "5-Mar-2025",
  },
];
