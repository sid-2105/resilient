'use client';
import React from 'react';

interface HeroHeaderProps {
  heading: string;
  backgroundImageUrl?: string;
  className?: string;
  headingClassName?: string;
}

export default function HeroHeader({
  heading,
  backgroundImageUrl = '/heroimg.jpg',
  className = '',
  headingClassName = '',
}: HeroHeaderProps) {
  return (
    <div
      className={`w-full h-[250px] md:h-[300px] flex items-center justify-center bg-center bg-cover bg-no-repeat relative  bg-gradient-to-r from-[#00C4FF]/20 to-[#FF00D4]/20 border-b-2 border-[#00C4FF]/50 shadow-[0_0_25px_rgba(0,196,255,0.3)] ${className}`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.6), rgba(10,10,10,0.7)), url(${backgroundImageUrl})`,
      }}
    >
      <h1
        className={`text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_10px_rgba(0,196,255,0.5)] ${headingClassName}`}
      >
        {heading}
      </h1>
    </div>
  );
}