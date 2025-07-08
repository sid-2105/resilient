'use client';
import React from 'react';
import Image from 'next/image';

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick: () => void;
  className?: string;
  titleClassName?: string;
  buttonClassName?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  onButtonClick,
  className = '',
  titleClassName = '',
  buttonClassName = '',
}) => {
  return (
    <div
      className={`relative flex items-center justify-center h-[350px] md:h-[400px] text-center overflow-hidden  text-white bg-gradient-to-r from-[#00C4FF]/20 to-[#FF00D4]/20 border-y-2 border-[#00C4FF]/50 shadow-[0_0_25px_rgba(0,196,255,0.3)]  ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[#0a0a0a] opacity-60"></div>
      <div className="relative z-10 max-w-3xl px-4">
        <h1
          className={`text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_10px_rgba(0,196,255,0.5)] ${titleClassName}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl mt-4 text-gray-300 leading-relaxed">
            {subtitle}
          </p>
        )}
        <button
          onClick={onButtonClick}
          className={`mt-8 px-8 py-3 bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] hover:from-[#00a4dd] hover:to-[#dd00b8] text-white rounded-full text-lg font-semibold transition-colors shadow-[0_0_15px_rgba(0,196,255,0.5)] ${buttonClassName}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;