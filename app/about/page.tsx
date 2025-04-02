import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
     

      {/* Inner Banner */}
      <div
  className="relative w-full h-64 bg-cover bg-center"
  style={{ backgroundImage: "url('/41.jpg')" }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for opacity */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold">About DRDO</h1>
  </div>
</div>


      {/* Main Content */}
      <main className="flex-grow px-4 md:px-20 py-10 bg-white">
        {/* About DRDO Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">About DRDO</h2>
          <p className="text-[#333333] text-lg mb-4">
            The Defence Research and Development Organisation (DRDO) serves as the research and
            development wing of the Ministry of Defence, Government of India. With a commitment to
            fostering innovation, DRDO plays a pivotal role in ensuring national security through
            technological advancements.
          </p>
          <p className="text-[#333333] text-lg mb-4">
            <strong>Mission:</strong> Achieving self-reliance in critical defense technologies and
            systems, while empowering India to design, develop, and produce world-class defense
            equipment.
          </p>
          <p className="text-[#333333] text-lg mb-4">
            <strong>Vision:</strong> To make India self-reliant in defense technology and systems by
            indigenously developing state-of-the-art weapons and equipment.
          </p>

          <div className="mt-6 space-y-3">
            <h3 className="font-semibold text-xl text-[#003366]">Key Highlights:</h3>
            <ul className="list-disc pl-6 text-[#333333] text-base space-y-1">
              <li>Over 50 laboratories across India</li>
              <li>Innovations in missiles, drones, radar systems, and more</li>
              <li>Collaborations with leading academic institutions</li>
              <li>Driving indigenous defense production under 'Atmanirbhar Bharat'</li>
            </ul>
          </div>
        </section>

        {/* Vision and Mission */}
        <section className="bg-gradient-to-r from-[#f8f9fa] to-[#e6f2ff] rounded-xl p-6 mb-12">
          <div className="mb-6">
            <h3 className="text-2xl italic font-semibold text-[#0077cc] mb-2">Vision</h3>
            <p className="text-[#333333] text-lg">
              Empowering India with state-of-the-art defense technologies through innovation,
              collaboration, and dedication.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#003366] mb-2">Mission</h3>
            <ul className="pl-6 list-disc text-[#333333] text-base space-y-1">
              <li>Design and develop defense systems aligned with national needs</li>
              <li>Promote indigenous production and reduce import dependence</li>
              <li>Leverage cutting-edge research for military applications</li>
              <li>Collaborate with academia and industry for innovation</li>
            </ul>
          </div>
        </section>

        {/* Connect with Us */}
        <section className="text-center mt-10">
          <h3 className="text-xl font-semibold text-[#003366] mb-4">Connect with Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/DRDO.India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-2xl"
            >
              
            </a>
            <a
              href="https://twitter.com/DRDO_India"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 transition-colors duration-300 text-2xl"
            >
              
            </a>
            <a
              href="https://www.instagram.com/drdo_india/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-2xl"
            >
             
            </a>
          </div>
        </section>
      </main>

 
    </div>
  );
}
