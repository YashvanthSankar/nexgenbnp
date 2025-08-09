import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Building Tomorrow, Today
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            NEXGEN Builders & Promoters — Delivering excellence in every brick.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Our Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 text-white border-2 border-white bg-transparent hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About NEXGEN</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With years of experience in construction and real estate development, 
            we bring innovative solutions and quality craftsmanship to every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-white">Quality Construction</h3>
            <p className="text-gray-300">Using the finest materials and latest construction techniques</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-white">Timely Delivery</h3>
            <p className="text-gray-300">Committed to completing projects on schedule</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-white">Customer Satisfaction</h3>
            <p className="text-gray-300">Building lasting relationships with our clients</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Residential Construction", 
              "Commercial Buildings", 
              "Real Estate Development", 
              "Interior Design"
            ].map((service, index) => (
              <div key={index} className="bg-black p-6 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-semibold mb-3 text-white">{service}</h3>
                <p className="text-gray-300 mb-4">Professional {service.toLowerCase()} services</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 font-medium"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
