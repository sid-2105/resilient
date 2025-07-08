'use client';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="bg-[#0a0a0a] text-white pt-20 px-4" id="contact">
      <div className="max-w-7xl mx-auto py-2 px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_10px_rgba(0,196,255,0.5)]">
            Let's Build Something Amazing
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to accelerate your digital transformation? Get in touch with our experts today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 py-16 items-center">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="flex  items-start  gap-5">
              <div className="bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] rounded-full p-3 shadow-[0_0_10px_rgba(0,196,255,0.3)]">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Phone</h4>
                <a
                  href="tel:+15551234567"
                  className="text-[#00C4FF] hover:text-[#FF00D4] transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] rounded-full p-3 shadow-[0_0_10px_rgba(0,196,255,0.3)]">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Email</h4>
                <a
                  href="mailto:info@resilientitservices.com"
                  className="text-[#00C4FF] hover:text-[#FF00D4] transition-colors"
                >
                  info@resilientitservices.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] rounded-full p-3 shadow-[0_0_10px_rgba(0,196,255,0.3)]">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-lg">Address</h4>
                <a
                  href="https://maps.app.goo.gl/Eq1cCRDMDHBFG9Qf9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00C4FF] hover:text-[#FF00D4] transition-colors"
                >
                  SR NO.60, 3 FL NO.1102, AUSTIN PARK, PUNE CITY, Pune, Maharashtra, India
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-[#1a1a1a] p-8 rounded-xl border border-[#00C4FF]/20 shadow-[0_0_15px_rgba(0,196,255,0.2)]">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#00C4FF]/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00C4FF] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#00C4FF]/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00C4FF] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#00C4FF]/50 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#00C4FF] focus:ring-opacity-50"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] hover:from-[#00a4dd] hover:to-[#dd00b8] py-3 text-white font-semibold rounded-md transition-colors shadow-[0_0_15px_rgba(0,196,255,0.5)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}