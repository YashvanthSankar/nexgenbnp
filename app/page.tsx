import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white bg-gradient-to-br from-blue-950 to-gray-900">
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Building Tomorrow, Today</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            NEXGEN Builders & Promoters — Delivering excellence in every brick.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">View Our Projects</Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 text-blue-800 border-white hover:bg-white hover:text-blue-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About NEXGEN</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With years of experience in construction and real estate development, 
            we bring innovative solutions and quality craftsmanship to every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Quality Construction</h3>
            <p className="text-gray-600">Using the finest materials and latest construction techniques</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Timely Delivery</h3>
            <p className="text-gray-600">Committed to completing projects on schedule</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Customer Satisfaction</h3>
            <p className="text-gray-600">Building lasting relationships with our clients</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Residential Construction", 
              "Commercial Buildings", 
              "Real Estate Development", 
              "Interior Design"
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{service}</h3>
                <p className="text-gray-600 mb-4">Professional {service.toLowerCase()} services</p>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
