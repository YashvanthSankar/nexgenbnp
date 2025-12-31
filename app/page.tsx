import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { AnimatedCounter } from "@/components/animated-counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Hero Section - Clean & Professional */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-white dark:from-blue-950/20 dark:via-transparent dark:to-gray-950"></div>

        {/* Accent shapes - more subtle */}
        <div className="absolute top-32 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-[400px] h-[400px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center max-w-5xl px-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Trusted by 500+ clients across India</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Building
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 animate-gradient-shift">
              Excellence
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            NEXGEN Builders & Promoters delivers premium construction and real estate development with uncompromising quality and timeless design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium rounded-full shadow-lg shadow-gray-900/10 dark:shadow-white/10"
              >
                View Our Work
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium rounded-full"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimal & Clean */}
      <section className="py-20 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                <AnimatedCounter end={23} />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Experts</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Professional Layout */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-6 tracking-tight">
                Crafting spaces that inspire
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                With over two decades of excellence, NEXGEN has established itself as a leader in construction and real estate development. We combine innovative design, sustainable practices, and meticulous craftsmanship to deliver projects that exceed expectations.
              </p>
              <div className="flex gap-4">
                <Link href="/about">
                  <Button variant="outline" className="rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 h-48 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Quality First</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Premium materials & finishes</p>
                </div>
                <div className="bg-blue-600 rounded-2xl p-6 h-32 flex flex-col justify-end">
                  <h3 className="font-semibold text-white">On-Time Delivery</h3>
                  <p className="text-sm text-blue-100">Every project, every time</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-6 h-32 flex flex-col justify-end">
                  <h3 className="font-semibold text-white">Expert Team</h3>
                  <p className="text-sm text-gray-400">Skilled professionals</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 h-48 flex flex-col justify-end">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Trusted Partner</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">500+ satisfied clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 tracking-tight">
              What we do best
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏠", title: "Residential", desc: "Custom homes & villas built to perfection", color: "group-hover:bg-blue-600" },
              { icon: "🏢", title: "Commercial", desc: "Office spaces & retail complexes", color: "group-hover:bg-indigo-600" },
              { icon: "🏗️", title: "Development", desc: "Full-scale real estate projects", color: "group-hover:bg-violet-600" },
              { icon: "🎨", title: "Interiors", desc: "Elegant interior design solutions", color: "group-hover:bg-purple-600" }
            ].map((service, index) => (
              <Link href="/services" key={index}>
                <div className="group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 cursor-pointer h-full">
                  <div className={`w-14 h-14 mb-6 bg-gray-100 dark:bg-gray-700 ${service.color} rounded-xl flex items-center justify-center transition-colors duration-300`}>
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-6 flex items-center text-sm font-medium text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 tracking-tight">
                Recent projects
              </h2>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="rounded-full border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                View All Projects
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-30">🏙️</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mb-3">Residential</span>
                <h3 className="text-2xl font-bold text-white mb-2">Skyline Luxury Residences</h3>
                <p className="text-gray-300 text-sm">45-unit premium residential complex</p>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-6">
              <div className="group relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-30">🏢</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mb-2">Commercial</span>
                  <h3 className="text-xl font-bold text-white">TechHub Corporate Center</h3>
                </div>
              </div>
              <div className="group relative bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl opacity-30">🏥</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white mb-2">Healthcare</span>
                  <h3 className="text-xl font-bold text-white">Medical Excellence Center</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section - Clean & Professional */}
      <section className="py-24 bg-gray-900 dark:bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to build your vision?
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Contact us today for a free consultation and discover how NEXGEN can bring your project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 font-medium rounded-full"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 text-white border border-gray-700 bg-transparent hover:bg-gray-800 transition-all duration-300 font-medium rounded-full"
              >
                Call +91 80 1234 5678
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
