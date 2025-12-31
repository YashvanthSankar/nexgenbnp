import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium animate-fade-in-up">
            <span>Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Let's build something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              extraordinary together
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to start your next construction project? Our team is here to guide you from concept to completion.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="john@example.com" />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Project Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-600">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Industrial</option>
                      <option>Renovation</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-black focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg font-medium shadow-lg hover:shadow-blue-500/25">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="grid gap-6">
                <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      123 Construction Avenue<br />
                      Business District, Bangalore - 560001
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      +91 80 1234 5678 (Office)<br />
                      +91 98765 43210 (Sales)
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      info@nexgenbuilders.com<br />
                      projects@nexgenbuilders.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl h-64 w-full flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Bangalore&zoom=13&size=600x300&key=YOUR_KEY')] opacity-20 bg-center bg-cover mix-blend-overlay"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-white dark:bg-black rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-3xl">🗺️</span>
                  </div>
                  <p className="text-sm font-medium text-gray-500">Interactive Map Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              "What is your typical project timeline?",
              "Do you handle permits and regulatory approvals?",
              "What is your pricing structure?",
              "Do you provide post-construction support?"
            ].map((q, i) => (
              <div key={i} className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{q}</h3>
                  <span className="text-gray-400 group-hover:text-blue-500 transition-colors">+</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
