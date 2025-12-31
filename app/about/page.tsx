import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { AnimatedCounter } from "@/components/animated-counter";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium animate-fade-in-up">
            <span>Our Legacy</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Building foundations for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              future generations
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            With over two decades of excellence, NEXGEN has evolved from a family business into a leading construction authority, driven by innovation and integrity.
          </p>
        </div>
      </section>

      {/* Story & Stats Section */}
      <section className="py-20 border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                Two decades of excellence
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Founded in 2001, NEXGEN Builders & Promoters began with a singular vision: to revolutionize the construction industry through uncompromising quality and transparent practices.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                What started as a custom home builder has grown into a multi-disciplinary firm capable of executing complex commercial, industrial, and residential projects. Our journey is defined by the lasting relationships we&apos;ve built and the skylines we&apos;ve helped shape.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700 dark:text-gray-300">
                  &quot;We don&apos;t just build structures; we create environments where life happens and businesses thrive.&quot;
                </blockquote>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-500 mb-1">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-500 mb-1">
                  <AnimatedCounter end={23} />
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-500 mb-1">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-500 mb-1">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Expert Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Bento Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">Our Purpose</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Guiding principles that define our approach to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To deliver exceptional construction and development services that exceed client expectations while positively impacting our communities. We are committed to building lasting relationships through integrity, innovation, and superior craftsmanship.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the region&apos;s premier construction partner, recognized for our sustainable practices and forward-thinking approach. We envision a future where every structure we build enhances the lives of its inhabitants and endures for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 tracking-tight">The minds behind NEXGEN</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", initials: "RK", color: "bg-blue-500", desc: "Visionary leader with 25+ years of industry expertise." },
              { name: "Priya Sharma", role: "COO", initials: "PS", color: "bg-emerald-500", desc: "Operational excellence expert ensuring timely delivery." },
              { name: "Arjun Mehta", role: "Chief Engineer", initials: "AM", color: "bg-purple-500", desc: "Engineering mastermind behind complex structural solutions." }
            ].map((leader, i) => (
              <div key={i} className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700">
                <div className={`w-20 h-20 ${leader.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg transform group-hover:rotate-3 transition-all duration-300`}>
                  {leader.initials}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">{leader.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium text-center mb-4">{leader.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-center text-sm leading-relaxed">
                  {leader.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Quality", icon: "⭐", desc: "Uncompromising standards" },
              { title: "Integrity", icon: "🤝", desc: "Transparent relationships" },
              { title: "Innovation", icon: "💡", desc: "Forward-thinking solutions" },
              { title: "Sustainability", icon: "🌱", desc: "Responsible building" }
            ].map((value, i) => (
              <div key={i} className="bg-white dark:bg-black p-6 rounded-2xl border border-gray-100 dark:border-gray-800 text-center hover:border-blue-500/30 transition-colors duration-300">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{value.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Join us in building the future
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100">
                Start a Conversation
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-gray-200 dark:border-gray-800">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
