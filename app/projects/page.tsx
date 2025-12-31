import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { AnimatedCounter } from "@/components/animated-counter";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Hero Section - Enterprise Style */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl animate-float-slow"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium animate-fade-in-up">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>Our Portfolio</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A legacy of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 animate-gradient-shift">
              excellence built
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore our diverse portfolio showcasing innovation, quality, and our commitment to superior construction standards across residential and commercial sectors.
          </p>
        </div>
      </section>

      {/* Featured Projects - Bento Style */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Large Card 1 */}
            <div className="group relative bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden min-h-[500px] flex items-end p-8 md:p-12 hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"></div>
              {/* Placeholder Image BG */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 transition-transform duration-700 group-hover:scale-105">
                <span className="text-8xl opacity-10">🏙️</span>
              </div>

              <div className="relative z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white mb-4">
                  Residential Complex
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Skyline Residences</h3>
                <p className="text-gray-300 mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  45-unit luxury complex featuring sustainable design, rooftop gardens, and smart home automation.
                </p>
                <button className="flex items-center text-white font-medium group-hover:gap-2 transition-all">
                  View Case Study <span className="text-emerald-400">→</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              {/* Card 2 */}
              <div className="group relative bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden flex-1 p-8 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <span className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-3xl group-hover:scale-110 transition-transform">🏢</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">2023</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">TechHub Corp Center</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">8-story LEED Gold certified office building.</p>
                  <div className="flex gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <span>120,000 sq ft</span>
                    <span>•</span>
                    <span>18 Months</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-gray-100 dark:bg-gray-900 rounded-3xl overflow-hidden flex-1 p-8 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <span className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-3xl group-hover:scale-110 transition-transform">🏥</span>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">2024</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">City Medical Center</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Advanced healthcare facility with specialized units.</p>
                  <div className="flex gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <span>45,000 sq ft</span>
                    <span>•</span>
                    <span>24 Months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Row 2 */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Innovation Campus", type: "Educational", icon: "🏫", color: "indigo" },
              { title: "Metro Warehouse", type: "Industrial", icon: "🏭", color: "purple" },
              { title: "Grand Plaza", type: "Mixed-Use", icon: "🏬", color: "orange" }
            ].map((project, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className={`w-12 h-12 bg-${project.color}-100 dark:bg-${project.color}-900/20 rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {project.icon}
                </div>
                <p className={`text-xs font-bold text-${project.color}-600 dark:text-${project.color}-400 mb-1`}>{project.type}</p>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 group">
                  View Case Study <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Projects Completed", value: 50, suffix: "+" },
              { label: "Square Feet Built", value: 2, suffix: "M+" },
              { label: "Cities Covered", value: 12, suffix: "" },
              { label: "Awards Won", value: 8, suffix: "" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">Browse by Sector</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["All Projects", "Residential", "Commercial", "Industrial", "Healthcare", "Educational", "Hospitality"].map((cat, i) => (
              <button key={i} className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${i === 0 ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Enterprise Style */}
      <section className="py-24 bg-gray-900 dark:bg-black relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Have a vision in mind?</h2>
          <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
            See how our diverse portfolio experience can add value to your next development. Let&apos;s discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 py-6 bg-white text-gray-900 hover:bg-gray-100 font-medium text-base">
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6 border-white/20 text-white hover:bg-white/10 font-medium text-base">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}