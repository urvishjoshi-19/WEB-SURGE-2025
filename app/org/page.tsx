import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-100 py-3 px-4">
        <ol className="flex space-x-2 text-sm text-gray-700">
          <li>
            <a href="/" className="text-blue-600 hover:underline">
              Home
            </a>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>
            <a href="/organisation" className="text-blue-600 hover:underline">
              Organisation
            </a>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li className="text-gray-500">DRDO Organisation Chart</li>
        </ol>
      </nav>

      <div
  className="relative w-full h-64 bg-cover bg-center"
  style={{ backgroundImage: "url('/43.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for opacity */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold">DRDO Organisational Chart</h1>
  </div>
</div>
    

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-20 py-10 bg-white">
        <section className="mb-12">
          {/* Organisation Chart Image */}
          <div className="flex justify-center">
            <img
              src="/org.jpeg"
              alt="DRDO Organisation Chart"
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </main>

    </div>
  );
}
