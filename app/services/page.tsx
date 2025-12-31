import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium animate-fade-in-up">
            <span>Expertise & Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive services for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              every stage of growth
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From concept to completion, we offer end-to-end development services tailored to meet your unique needs and exceed expectations.
          </p>
        </div>
      </section>

      {/* Main Services - Detailed Cards */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-12">
            {/* Residential */}
            <div className="group bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-2/5">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Residential Construction</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    We create homes that reflect your lifestyle. Whether it&apos;s a custom luxury estate or a family residence, our focus is on craftsmanship, comfort, and character.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                    Discuss Your Home
                  </Button>
                </div>
                <div className="w-full md:w-3/5 grid sm:grid-cols-2 gap-4">
                  {[
                    "Custom Home Design", "Luxury Villas", "Home Additions",
                    "Smart Home Integration", "Sustainable Building", "Renovations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-gray-800 group-hover:border-blue-100 dark:group-hover:border-blue-900/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Commercial */}
            <div className="group bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="w-full md:w-2/5">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-3xl">🏢</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Commercial Projects</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                    Functionality meets aesthetic appeal. We build commercial spaces that enhance productivity, reflect brand identity, and drive business success.
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8">
                    View Commercial Work
                  </Button>
                </div>
                <div className="w-full md:w-3/5 grid sm:grid-cols-2 gap-4">
                  {[
                    "Corporate Offices", "Retail Centers", "Industrial Facilities",
                    "Healthcare Units", "Warehousing", "Mixed-Use Spaces"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-gray-800 group-hover:border-emerald-100 dark:group-hover:border-emerald-900/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Grid */}
      <section className="py-24 bg-white dark:bg-black border-t border-gray-100 dark:border-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Specialized Capabilities</h2>
            <p className="text-gray-600 dark:text-gray-400">Beyond the build, we offer holistic project support</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Real Estate Development", icon: "🏗️", color: "purple", desc: "End-to-end project lifecycle management from land acquisition to market delivery." },
              { title: "Interior Design", icon: "🎨", color: "orange", desc: "Creating immersive interior environments that blend style with supreme functionality." },
              { title: "Project Management", icon: "📋", color: "teal", desc: "Rigorous budget control, timeline scheduling, and quality assurance." },
              { title: "Consulting", icon: "💡", color: "indigo", desc: "Feasibility studies, cost estimation, and strategic construction advice." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link href="/contact" className={`text-sm font-semibold text-${service.color}-600 dark:text-${service.color}-400 hover:underline`}>
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Simple Steps */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">Our Workflow</h2>
            <p className="text-gray-600 dark:text-gray-400">Structured for efficiency and transparency</p>
          </div>

          <div className="relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Consult", desc: "Vision & requirements" },
                { step: "02", title: "Design", desc: "Planning & permits" },
                { step: "03", title: "Build", desc: "Construction phase" },
                { step: "04", title: "Deliver", desc: "Handover & support" }
              ].map((process, i) => (
                <div key={i} className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{process.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Ready to optimize your project?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Schedule a free consultation to discuss your specific needs and how we can help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full px-10 bg-blue-600 hover:bg-blue-700 text-white">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
