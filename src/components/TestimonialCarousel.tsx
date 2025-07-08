'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Emily Zhao",
    company: "Allianz Trade",
    quote: "Resilient IT helped us modernize our insurance portal. The team was professional, fast, and delivered measurable results.",
    image: "/images/person1.jpg",
  },
  {
    name: "Jeroen De Vries",
    company: "Zendeq",
    quote: "We doubled our conversion rate after implementing their low-code trading solution. Incredible speed and quality.",
    image: "/images/person2.jpg",
  },
  {
    name: "Li Wei",
    company: "Tencent",
    quote: "Their Kubernetes-native Mendix solution improved our release velocity by 60%. We’re extremely happy with the partnership.",
    image: "/images/person3.jpg",
  },
  {
    name: "Aditi Sharma",
    company: "Tech Innovators",
    quote: "The team at Resilient IT Services transformed our digital operations. Their expertise in low-code platforms is unmatched.",
    image: "/images/person4.jpg",
  },
  {
    name: "Carlos Mendez",
    company: "Global Logistics",
    quote: "Their low-code solutions streamlined our logistics processes, saving us time and resources. Highly recommend!",
    image: "/images/person1.jpg",
  },
  {
    name: "Sofia Petrova",
    company: "EduTech Solutions",
    quote: "Resilient IT Services delivered a robust low-code platform for our educational tools. Their support was exceptional.",
    image: "/images/person3.jpg",
  },
];

const itemsPerPage = 3;

export default function TestimonialCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  useEffect(() => {
    const timer = setInterval(() => nextPage(), 6000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = testimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-12 text-center bg-[#0a0a0a]">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * index }}
              className="bg-[#1a1a1a] border border-[#00C4FF]/20 shadow-md rounded-xl p-8 flex flex-col justify-between text-left hover:shadow-[0_0_20px_rgba(0,196,255,0.4)] transition-all"
            >
              <p className="text-sm italic text-gray-300 mb-6 leading-relaxed">
                “{testimonial.quote}”
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#00C4FF]/50 shadow-[0_0_10px_rgba(0,196,255,0.3)]"
                />
                <div>
                  <p className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_5px_rgba(0,196,255,0.3)]">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center gap-6 mt-12">
        <button
          onClick={prevPage}
          className="p-3 rounded-full bg-[#1a1a1a] border border-[#00C4FF]/50 hover:bg-gradient-to-r hover:from-[#00C4FF]/20 hover:to-[#FF00D4]/20 shadow-[0_0_10px_rgba(0,196,255,0.2)] transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-[#00C4FF]" />
        </button>
        <button
          onClick={nextPage}
          className="p-3 rounded-full bg-[#1a1a1a] border border-[#00C4FF]/50 hover:bg-gradient-to-r hover:from-[#00C4FF]/20 hover:to-[#FF00D4]/20 shadow-[0_0_10px_rgba(0,196,255,0.2)] transition-all"
        >
          <ChevronRight className="w-6 h-6 text-[#00C4FF]" />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              page === i
                ? 'bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] scale-125 shadow-[0_0_8px_rgba(0,196,255,0.5)]'
                : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}