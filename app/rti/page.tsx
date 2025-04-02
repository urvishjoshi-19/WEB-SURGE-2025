import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">

<div
  className="relative w-full h-64 bg-cover bg-center"
  style={{ backgroundImage: "url('/44.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for opacity */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold">RTI Cell</h1>
  </div>
</div>


      {/* Main Content */}
      <main className="flex-grow px-4 md:px-20 py-10 bg-white space-y-12">

        {/* Overview Section */}
        <section>
          <h2 className="text-3xl font-bold text-[#003366] mb-4">RTI Cell Overview</h2>
          <p className="text-[#333333] mb-4 text-lg">
            DRDO is placed in the Second Schedule of the RTI Act, 2005, and is therefore exempt from disclosure of information under Section 24(1) of the Act, except in cases relating to allegations of corruption and human rights violations.
          </p>
          <p className="text-[#333333] text-lg">
            <strong>RTI Statistics for 2023–2024:</strong>
          </p>
          <ul className="list-disc pl-6 text-[#333333] text-base space-y-1 mt-2">
            <li>RTI Applications Received: 320</li>
            <li>RTI Applications Disposed of: 315</li>
            <li>First Appeals Handled: 40</li>
            <li>Second Appeals Handled: 12</li>
            <li>Parliamentary Questions Addressed: 55</li>
          </ul>
        </section>

        {/* Guidelines & Resources */}
        <section>
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">Guidelines and Resources</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <ResourceItem
              title="How To Submit RTI Application (Hindi)"
              link="/pdfs/submit-rti-hindi.pdf"
            />
            <ResourceItem
              title="Public Authorities Under DRDO"
              link="/pdfs/public-authorities-drdo.pdf"
            />
            <ResourceItem
              title="RTI Act, 2005 (Hindi & English)"
              link="/pdfs/rti-act-2005.pdf"
            />
            <ResourceItem
              title="Exemption under RTI Act, 2005"
              link="/pdfs/exemption-rti.pdf"
            />
            <ResourceItem
              title="Guidelines for Information Seekers"
              link="/pdfs/info-guidelines.pdf"
            />
            <ResourceItem
              title="Frequently Asked Questions on RTI"
              link="/pdfs/rti-faq.pdf"
            />
            <ResourceItem
              title="Suo Motu Disclosures u/s 4(1)(b)"
              link="/pdfs/suo-motu-disclosure.pdf"
            />
            <ResourceItem
              title="Important Decisions / Orders"
              link="/pdfs/rti-decisions-orders.pdf"
            />
          </div>
        </section>
      </main>

    </div>
  );
}

// Reusable Resource Component
function ResourceItem({ title, link }: { title: string; link: string }) {
  return (
    <div className="p-4 border rounded-xl bg-[#f9fafb] hover:shadow transition duration-200">
      <div className="flex items-center justify-between">
        <h3 className="text-[#003366] font-medium">{title}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="flex gap-2">
            <DownloadIcon className="w-4 h-4" />
            PDF
          </Button>
        </a>
      </div>
    </div>
  );
}
