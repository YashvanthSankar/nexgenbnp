import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-gray-900 dark:text-white bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-900 transition-all duration-500 overflow-hidden">
        {/* Professional overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10 dark:from-gray-900/60 dark:via-transparent dark:to-gray-800/30"></div>
        
        {/* Floating elements for both modes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 dark:from-gray-700/20 dark:to-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-pink-200/20 dark:from-gray-800/15 dark:to-gray-700/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-200/25 to-blue-200/25 dark:from-gray-600/20 dark:to-gray-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-white dark:to-gray-100 bg-clip-text text-transparent">
              Building Tomorrow,
            </span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">
              Today
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            NEXGEN Builders & Promoters — Delivering excellence in every brick with innovative design and superior craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-white dark:to-gray-100 text-white dark:text-black hover:from-blue-700 hover:to-purple-700 dark:hover:from-gray-100 dark:hover:to-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold"
            >
              View Our Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-white bg-white/70 dark:bg-transparent backdrop-blur-sm hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto bg-white dark:bg-black transition-colors duration-300">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About NEXGEN</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With years of experience in construction and real estate development, 
            we bring innovative solutions and quality craftsmanship to every project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative text-center p-8 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Simple icon circle */}
            <div className="mx-auto w-16 h-16 mb-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Quality Construction</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Using the finest materials and latest construction techniques to build structures that stand the test of time</p>
          </div>
          
          <div className="group relative text-center p-8 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Simple icon circle */}
            <div className="mx-auto w-16 h-16 mb-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Timely Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Committed to completing projects on schedule with efficient project management and dedicated teams</p>
          </div>
          
          <div className="group relative text-center p-8 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Simple icon circle */}
            <div className="mx-auto w-16 h-16 mb-6 bg-purple-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Customer Satisfaction</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Building lasting relationships with our clients through exceptional service and attention to detail</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 dark:bg-black transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Residential Construction Card */}
            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Simple icon */}
              <div className="w-12 h-12 mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Residential Construction
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                Custom homes and residential projects built with precision and attention to detail
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-transparent hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 font-medium"
              >
                Learn More
              </Button>
            </div>

            {/* Commercial Buildings Card */}
            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Simple icon */}
              <div className="w-12 h-12 mb-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Commercial Buildings
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                Office buildings, retail spaces and commercial complexes designed for success
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-transparent hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 font-medium"
              >
                Learn More
              </Button>
            </div>

            {/* Real Estate Development Card */}
            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Simple icon */}
              <div className="w-12 h-12 mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏗️</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Real Estate Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                Full-scale development projects from planning to completion and market delivery
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-2 border-purple-500 text-purple-600 dark:text-purple-400 bg-transparent hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white transition-all duration-300 font-medium"
              >
                Learn More
              </Button>
            </div>

            {/* Interior Design Card */}
            <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-100 dark:border-gray-700 hover:border-orange-200 dark:hover:border-orange-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Simple icon */}
              <div className="w-12 h-12 mb-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Interior Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-sm">
                Beautiful and functional interior spaces that reflect your style and needs
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full border-2 border-orange-500 text-orange-600 dark:text-orange-400 bg-transparent hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
