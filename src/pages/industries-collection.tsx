'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

type Industry = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const industries: Industry[] = [
  {
    title: 'Healthcare',
    description: 'Improving patient outcomes through modern digital solutions and data-driven care.',
    image: '/industries/healthcare.jpg',
    link: '/industries#healthcare',
  },
  {
    title: 'Automobiles',
    description: 'Driving innovation with connected vehicle technologies and smart manufacturing.',
    image: '/industries/automobiles.jpg',
    link: '/industries#automobiles',
  },
  {
    title: 'Finance',
    description: 'Enabling secure, fast, and user-friendly digital finance platforms for modern banking.',
    image: '/industries/finance.jpg',
    link: '/industries#finance',
  },
  {
    title: 'Retail & E-commerce',
    description: 'Delivering seamless shopping experiences with intelligent supply chain and omnichannel tech.',
    image: '/industries/retail.jpg',
    link: '/industries#retail',
  },
  {
    title: 'Logistics',
    description: 'Optimizing operations with real-time tracking, route planning, and smart warehouses.',
    image: '/industries/logistics.jpg',
    link: '/industries#logistics',
  },
  {
    title: 'Education',
    description: 'Empowering learners and educators with intuitive, remote-first learning experiences.',
    image: '/industries/education.jpg',
    link: '/industries#education',
  },
];

// Animation Variants
const cardVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeInOut' },
  }),
};

const textVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

const IndustriesSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gray-950 font-orbitron">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-shadow-[0_0_3px_#00C4FF]"
          >
            Industries We Serve
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-shadow-[0_0_3px_#FF00D4]"
          >
            We empower diverse industries with innovative IT solutions, leveraging AI-driven automation, low-code platforms, and strategic consulting to drive efficiency and transformation.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {industries.map((item, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              variants={cardVariants}
              className="relative h-[460px] rounded-xl overflow-hidden border border-blue-500/30 shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103 group-hover:brightness-90"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 text-gray-100 z-10">
                <motion.h3
                  custom={0}
                  initial="initial"
                  animate="visible"
                  variants={textVariants}
                  className="text-lg font-semibold text-shadow-[0_0_3px_#FF00D4]"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  custom={1}
                  initial="initial"
                  animate="visible"
                  variants={textVariants}
                  className="text-sm mt-2 line-clamp-3 text-shadow-[0_0_3px_#FF00D4]"
                >
                  {item.description}
                </motion.p>
                <motion.a
                  href={item.link}
                  variants={buttonVariants}
                  whileHover="hover"
                  className="group inline-flex items-center mt-4 text-sm font-medium bg-gradient-to-r from-blue-600 to-pink-600 rounded-full px-4 py-2 text-white transition-all duration-300 hover:shadow-[0_0_8px_#00C4FF] focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`Read more about ${item.title}`}
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:scale-110" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;