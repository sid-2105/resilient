'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const jobs = [
  {
    title: 'Mendix Developer',
    location: 'Remote / India',
    experience: '3+ years',
    type: 'Full-time',
    description:
      'We are looking for a skilled Mendix Developer to help us build low-code solutions for clients across various industries.',
  },
  {
    title: 'React Frontend Engineer',
    location: 'Remote / Hybrid',
    experience: '2+ years',
    type: 'Contract / Freelance',
    description:
      'Join our team to develop beautiful and interactive user interfaces using React and Tailwind for enterprise-grade applications.',
  },
  {
    title: 'Low-Code Consultant',
    location: 'Bangalore, India',
    experience: '5+ years',
    type: 'Full-time',
    description:
      'Looking for professionals with experience in platforms like OutSystems, Caspio, or Mendix to advise and deliver digital transformation solutions.',
  },
];

const CareerPage = () => {
  return (
    <Layout>
      <main className="bg-[#0a0a0a] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_10px_rgba(0,196,255,0.5)]">
              Join Resilient IT Services
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
              Be part of a passionate team delivering low-code innovation with Mendix, OutSystems, and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(0,196,255,0.4)] transition-all p-8 flex flex-col justify-between border border-[#00C4FF]/20"
              >
                <div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_5px_rgba(0,196,255,0.3)] mb-2">
                    {job.title}
                  </h3>
                  <div className="text-sm text-gray-400 mb-4">
                    {job.location} · {job.type} · {job.experience}
                  </div>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{job.description}</p>
                </div>
                <a
                  href="mailto:info@resilientitservices.com"
                  className="text-sm text-[#00C4FF] font-medium hover:text-[#FF00D4] hover:underline transition"
                >
                  Send Us Resume →
                </a>
              </div>
            ))}
          </div>

          {/* Section: Why work with us */}
          <section className="mt-24 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/team.jpg"
                alt="Team"
                className="rounded-xl shadow-[0_0_20px_rgba(0,196,255,0.4)]"
              />
              <div className="absolute inset-0 rounded-xl border-2 border-[#00C4FF]/40 pointer-events-none" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_8px_rgba(0,196,255,0.3)] mb-4">
                Why work with us?
              </h2>
              <ul className="space-y-4 text-gray-300 list-disc list-inside">
                <li>Collaborate with certified Mendix & low-code experts</li>
                <li>Get hands-on experience with cutting-edge technologies</li>
                <li>Flexible working hours and hybrid opportunities</li>
                <li>Continuous learning and upskilling support</li>
                <li>Friendly and inclusive team culture</li>
              </ul>
            </div>
          </section>

          {/* Section: CTA */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_8px_rgba(0,196,255,0.3)] mb-4">
              Didn’t find a role that fits?
            </h3>
            <p className="text-gray-300 mb-6">
              We’re always open to new talent. Send us your resume, and we’ll get in touch!
            </p>
            <a
              href="mailto:info@resilientitservices.com"
              className="inline-block bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-[#00a4dd] hover:to-[#dd00b8] transition-colors shadow-[0_0_15px_rgba(0,196,255,0.5)]"
            >
              Contact HR
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default CareerPage;