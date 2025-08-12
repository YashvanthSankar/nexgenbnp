import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Projects() {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects that showcase our commitment to quality, 
              innovation, and excellence in construction and development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Highlighting some of our most successful and impactful constructions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Project 1 - Luxury Residential Complex */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏙️</div>
                  <p className="text-blue-700 dark:text-blue-300 font-medium">Project Image Coming Soon</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    Residential Complex
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Completed 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skyline Luxury Residences</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  A premium 45-unit residential complex featuring modern amenities, sustainable design, 
                  and panoramic city views. This project exemplifies our commitment to luxury living 
                  with environmental consciousness.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">45</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Units</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Months</div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Energy-efficient building systems
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Premium finishes and smart home integration
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Rooftop garden and community spaces
                  </div>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
                  View Project Details
                </Button>
              </div>
            </div>

            {/* Project 2 - Commercial Office Building */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="h-64 bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <p className="text-emerald-700 dark:text-emerald-300 font-medium">Project Image Coming Soon</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-medium">
                    Commercial Building
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">Completed 2023</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">TechHub Corporate Center</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  A state-of-the-art 8-story office building designed for modern businesses. 
                  Features flexible workspaces, advanced technology infrastructure, and 
                  LEED Gold certification for sustainability.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">8</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Floors</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">18</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Months</div>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    LEED Gold certified green building
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced HVAC and security systems
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Flexible office spaces and conference facilities
                  </div>
                </div>
                <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300">
                  View Project Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Diverse expertise across multiple construction sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Projects */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Residential</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Custom homes, luxury estates, and residential complexes designed for modern living.
              </p>
              <div className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">15+ Completed Projects</div>
              <Button 
                variant="outline" 
                className="w-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Projects
              </Button>
            </div>

            {/* Commercial Projects */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Commercial</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Office buildings, retail spaces, and commercial developments for business success.
              </p>
              <div className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">12+ Completed Projects</div>
              <Button 
                variant="outline" 
                className="w-full border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                View Projects
              </Button>
            </div>

            {/* Industrial Projects */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-3xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Industrial</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Warehouses, manufacturing facilities, and industrial complexes built for efficiency.
              </p>
              <div className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">8+ Completed Projects</div>
              <Button 
                variant="outline" 
                className="w-full border-2 border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Recent Completions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Latest projects showcasing our continued excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏘️</div>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-xs font-medium">
                    Mixed-Use
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">2024</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Heritage Plaza</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Modern mixed-use development combining retail, office, and residential spaces in the heart of the city.
                </p>
                <Button size="sm" className="w-full bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏥</div>
                  <p className="text-teal-700 dark:text-teal-300 text-sm">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-2 py-1 rounded text-xs font-medium">
                    Healthcare
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">2024</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Medical Center</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  State-of-the-art medical facility with advanced infrastructure and patient-focused design.
                </p>
                <Button size="sm" className="w-full bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🏫</div>
                  <p className="text-indigo-700 dark:text-indigo-300 text-sm">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 px-2 py-1 rounded text-xs font-medium">
                    Educational
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">2023</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Innovation Campus</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Modern educational facility designed to foster creativity and collaborative learning environments.
                </p>
                <Button size="sm" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Project Statistics</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">Project Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Start Your Next Project
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Ready to bring your vision to life? Let's discuss how we can make your project our next success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 px-8 py-3"
            >
              Get Project Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-3"
            >
              View More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}