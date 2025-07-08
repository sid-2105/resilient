'use client';
import { useState } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import HeroHeader from '@/components/Heroheader';
import ClientMarquee from '@/components/Clientscroll';

const allProjects = [
  {
    title: 'Allianz Trade - Escalations',
    description: 'Insurance digital portal | Risk assessment | Multi-tenant | Singapore',
    image: '/images/education.jpg',
  },
  {
    title: 'Zendeq - Trading Platform',
    description: 'Sourcing and Lead Generation platform | Agile Software Development | SME',
    image: '/images/healthcare.jpg',
  },
  {
    title: 'Mendix - Tencent Platform',
    description: 'Deployed on Kubernetes using git pipelines | Reverse engineered integrations to mimic Sprintr, Mendix App Store, Mx New',
    image: '/images/retail.jpg',
  },
  {
    title: 'Fleet Management App',
    description: 'Vehicle tracking | Dashboard analytics | Enterprise mobility',
    image: '/images/finance.jpg',
  },
  {
    title: 'EduTrack LMS',
    description: 'E-learning portal | Assessment engine | Responsive UI | India',
    image: '/images/automobiles.jpg',
  },
  {
    title: 'FinanceBot AI',
    description: 'Automated financial reporting tool using LLMs | Fintech sector',
    image: '/images/logistics.jpg',
  },
];

const ITEMS_PER_PAGE = 3;

const ProjectsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);

  const paginatedProjects = allProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <Layout>
      <HeroHeader 
        heading="Our Projects" 
      />
      <ClientMarquee />
      <main className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Explore how Resilient IT Services delivers impact using low-code solutions across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {paginatedProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#1a1a1a] shadow-md rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,196,255,0.4)] transition"
            >
              <div className="h-52 w-full relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl border-b-2 border-[#00C4FF]/50"
                />
                <div className="absolute inset-0 rounded-t-xl border-2 border-[#00C4FF]/40 pointer-events-none" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_5px_rgba(0,196,255,0.3)]">
                  {project.title}
                </h3>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-16 gap-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-colors ${
              currentPage === 1
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] text-white hover:from-[#00a4dd] hover:to-[#dd00b8] shadow-[0_0_15px_rgba(0,196,255,0.5)]'
            }`}
          >
            ← Prev
          </button>
          <span className="text-lg font-semibold text-gray-300 bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_5px_rgba(0,196,255,0.3)]">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-colors ${
              currentPage === totalPages
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] text-white hover:from-[#00a4dd] hover:to-[#dd00b8] shadow-[0_0_15px_rgba(0,196,255,0.5)]'
            }`}
          >
            Next →
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default ProjectsPage;