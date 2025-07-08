'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  // Animation variants with type annotation
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' } },
    hover: {
      scale: 1.03,
      boxShadow: '0px 0px 12px rgba(0, 196, 255, 0.3)',
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative h-screen md:min-h-[60vh] w-full overflow-hidden group bg-gray-950 font-orbitron">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
        src="/videos/intro.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={textVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-100 text-shadow-[0_0_3px_#FF00D4]"
        >
          How <span className="text-gray-100">we</span>{' '}
          <span className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-shadow-[0_0_3px_#00C4FF]">work?</span>
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg sm:max-w-xl md:max-w-2xl mb-10 line-clamp-3 text-shadow-[0_0_3px_#FF00D4]"
        >
          We are a team of passionate professionals dedicated to delivering innovative solutions that drive success for
          our clients. Our approach combines creativity, technology, and strategy to create impactful results.
        </motion.p>
        <motion.a
          href="/aboutus"
          variants={buttonVariants}
          whileHover="hover"
          className="group inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-600 rounded-full font-semibold text-white text-base transition-all duration-300 hover:shadow-[0_0_8px_#00C4FF] focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Learn more about how we work"
        >
          Learn More
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:scale-110" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;