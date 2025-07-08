'use client';
import Image from 'next/image';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/Herobanner';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ClientMarquee from '@/components/Clientscroll';

const caseStudies = [
  {
    title: 'Digital Insurance Portal for Allianz Trade',
    client: 'Allianz Trade',
    industry: 'Insurance',
    image: '/images/education.jpg',
    summary:
      'We built a multi-tenant, scalable insurance portal for risk assessment and escalation tracking, reducing processing time by 45%.',
    location: 'Singapore',
  },
  {
    title: 'Low-Code Trading System for Zendeq',
    client: 'Zendeq',
    industry: 'Supply Chain / Logistics',
    image: '/images/automobiles.jpg',
    summary:
      'Developed a low-code lead generation platform to manage trading operations, resulting in 2x sales conversion rate.',
    location: 'Netherlands',
  },
  {
    title: 'Kubernetes-Based DevOps Platform for Tencent',
    client: 'Tencent',
    industry: 'Technology',
    image: '/images/logistics.jpg',
    summary:
      'Reverse engineered Mendix tools and deployed on Kubernetes with CI/CD, accelerating release cycles by 60%.',
    location: 'China',
  },
];

const CaseStudiesPage = () => {
  return (
    <Layout>
      <main className="bg-[#0a0a0a] py-20">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_10px_rgba(0,196,255,0.5)]">
            Case Studies
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Explore how we help clients solve real business challenges using low-code solutions.
          </p>
        </div>

        <ClientMarquee />
        <div className="grid md:grid-cols-3 sm:grid-cols-1 py-16 px-4 gap-12 max-w-6xl mx-auto">
          {caseStudies.map((cs, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-[#00C4FF]/20 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(0,196,255,0.4)] transition overflow-hidden"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl border-b-2 border-[#00C4FF]/50"
                />
                <div className="absolute inset-0 rounded-t-xl border-2 border-[#00C4FF]/40 pointer-events-none" />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_5px_rgba(0,196,255,0.3)] mb-1">
                  {cs.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  <strong>Client:</strong> {cs.client} | <strong>Industry:</strong> {cs.industry}
                </p>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cs.summary}</p>
                <span className="inline-block text-xs text-white bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] px-4 py-2 rounded-full shadow-[0_0_10px_rgba(0,196,255,0.3)]">
                  {cs.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <HeroBanner
        backgroundImage="/images/team.jpg"
        title="Transforming Businesses with Low-Code Solutions"
        buttonText="Consult Today"
        onButtonClick={() => window.location.href = "/career"}
     
      />

      <section className="bg-[#1a1a1a]  py-16">
        <div className="max-w-6xl mx-auto text-center  mb-10">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_8px_rgba(0,196,255,0.3)]">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 mt-2">
            Trusted by global enterprises for their mission-critical solutions.
          </p>
        </div>
        <TestimonialCarousel />
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;