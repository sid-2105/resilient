import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const ProofSection: React.FC = () => {
  // Scalable company data array
  const companies = [
    { name: 'Dubai Municipality', logo: '/clients/dubai.png' },
    { name: 'Springer Nature', logo: '/clients/springer.png' },
    { name: 'KASP Securities', logo: '/clients/kasp.png' },
    { name: 'Royal IHC', logo: '/clients/ihc.png' },
    { name: 'WeatherFord', logo: '/clients/weather.png' },
    { name: 'Trane Technologies', logo: '/clients/trane.png' },
  ];

  // Stats array
  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '99.9%', label: 'Uptime Guaranteed' },
    { number: '24/7', label: 'Support Available' },
    { number: '10+', label: 'Years Experience' },
  ];

  const [hoveredCompany, setHoveredCompany] = useState<number | null>(null);

  return (
    <section className="relative py-20 overflow-hidden bg-gray-950 font-orbitron">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-[url('/patterns/stars.png')] bg-repeat animate-twinkle opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,196,255,0.05)_50%,transparent_100%)] animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent text-shadow-[0_0_3px_#00C4FF]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-shadow-[0_0_3px_#FF00D4]">
            Our proven track record and partnerships with top companies showcase our commitment to excellence.
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="relative group flex justify-center items-center p-5 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-blue-500/30 transition-all duration-300 hover:scale-105 hover:bg-gray-900/80 hover:shadow-[0_0_8px_#00C4FF]"
              onMouseEnter={() => setHoveredCompany(index)}
              onMouseLeave={() => setHoveredCompany(null)}
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={100}
                height={50}
                className="object-contain transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-md"
              />
              {/* Tooltip on Hover */}
              {hoveredCompany === index && (
                <div className="absolute -top-10 bg-gray-900 text-white text-sm px-3 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-shadow-[0_0_3px_#FF00D4]">
                  {company.name}
                </div>
              )}
              {/* Hover Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/60 backdrop-blur-sm rounded-xl border border-blue-500/30 transition-all duration-300 hover:bg-gray-900/80 hover:shadow-[0_0_8px_#00C4FF]"
            >
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-5 h-5 text-pink-400 mr-2" />
                <h3 className="text-3xl font-bold text-blue-400 text-shadow-[0_0_3px_#00C4FF]">{stat.number}</h3>
              </div>
              <p className="text-gray-300 text-base text-shadow-[0_0_3px_#FF00D4]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.15;
          }
        }
        @keyframes pulse-slow {
          0% {
            background-position: 50% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 50% 50%;
          }
        }
        .animate-twinkle {
          animation: twinkle 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          background-size: 200% 200%;
          animation: pulse-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProofSection;