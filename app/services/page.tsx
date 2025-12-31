import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function Services() {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer comprehensive construction and development services
              tailored to meet your unique needs and exceed your expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Residential Construction */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Residential Construction</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Create your dream home with our custom residential construction services. From luxury estates to
                cozy family homes, we bring your vision to life with meticulous attention to detail.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom home design and construction
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Home renovations and additions
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Energy-efficient building solutions
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Smart home technology integration
                </div>
              </div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
                Learn More
              </Button>
            </div>

            {/* Commercial Construction */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Commercial Buildings</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Build for success with our commercial construction expertise. We specialize in creating functional,
                attractive spaces that enhance productivity and reflect your brand identity.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Office buildings and corporate headquarters
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Retail spaces and shopping centers
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Industrial and warehouse facilities
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Healthcare and educational facilities
                </div>
              </div>
              <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beyond construction, we offer comprehensive services to support every aspect of your project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Real Estate Development */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Real Estate Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                End-to-end development solutions from land acquisition to project completion and market delivery.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                <li>• Site selection and feasibility studies</li>
                <li>• Project planning and design</li>
                <li>• Construction management</li>
                <li>• Marketing and sales support</li>
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Interior Design */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mb-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Interior Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Transform your spaces with our professional interior design services that blend functionality with aesthetics.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                <li>• Space planning and layout design</li>
                <li>• Material and finish selection</li>
                <li>• Custom furniture and fixtures</li>
                <li>• Lighting and color consultation</li>
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-2 border-orange-500 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Project Management */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mb-4 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Project Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Professional project management services ensuring your project stays on time, on budget, and on quality.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                <li>• Timeline planning and scheduling</li>
                <li>• Budget management and cost control</li>
                <li>• Quality assurance and inspections</li>
                <li>• Vendor and contractor coordination</li>
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-2 border-teal-500 text-teal-600 dark:text-teal-400 hover:bg-teal-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Consulting */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Construction Consulting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                Expert consulting services to help you make informed decisions throughout your construction journey.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-4">
                <li>• Technical feasibility assessments</li>
                <li>• Cost estimation and budgeting</li>
                <li>• Building code compliance review</li>
                <li>• Value engineering solutions</li>
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="w-full border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from initial consultation to final handover.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Consultation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Initial meeting to understand your vision, requirements, and budget parameters.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Design & Planning</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Detailed design development, permit acquisition, and comprehensive project planning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Construction</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Professional construction execution with regular updates and quality checkpoints.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Completion</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Final inspections, handover, and ongoing support to ensure your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Contact us today to discuss your project and discover how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 px-8 py-3"
            >
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-3"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
