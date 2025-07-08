'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { LinkedinIcon } from 'lucide-react';
import HeroBanner from '@/components/Herobanner';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Founder & CEO',
    image: '/images/person1.jpg',
    bio: 'Passionate about low-code technologies, Siddharth leads innovation at Resilient IT Services with a focus on scalable and fast delivery.',
    linkedin: 'https://linkedin.com/in/siddharth',
  },
  {
    name: 'Neha Sharma',
    role: 'Head of Delivery',
    image: '/images/person2.jpg',
    bio: 'Expert in Mendix and client management, Neha ensures our projects are always on time and exceed expectations.',
    linkedin: 'https://linkedin.com/in/neha',
  },
  {
    name: 'Jay Cadogan',
    role: 'Senior Mendix Developer',
    image: '/images/person3.jpg',
    bio: 'Jay builds robust applications using Mendix and mentors junior developers on low-code best practices.',
    linkedin: 'https://linkedin.com/in/jaycadogan',
  },
  {
    name: 'Nina Morsa',
    role: 'UX/UI Designer',
    image: '/images/person4.jpg',
    bio: 'Nina creates clean and intuitive user experiences that enhance application usability across industries.',
    linkedin: 'https://linkedin.com/in/ninamorsa',
  },
];

const TeamPage = () => {
  return (
    <Layout>
      <main className="bg-[#0a0a0a] py-20 text-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_10px_rgba(0,196,255,0.5)]">
            Meet Our Team
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            Resilient IT Services is powered by a team of innovators, engineers, and designers passionate about building low-code solutions that drive impact.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mb-16">
          <img
            src="/images/fullteam.jpg"
            alt="Our Team"
            className="rounded-2xl shadow-[0_0_30px_rgba(0,196,255,0.4)]"
          />
          <div className="absolute inset-0 rounded-2xl border-4 border-[#00C4FF]/40 pointer-events-none" />
        </div>

        <HeroBanner
          backgroundImage="/images/team.jpg"
          title="Want to be part of our team?"
          buttonText="Explore Careers"
          onButtonClick={() => window.location.href = "/career"}
        />

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 px-8 max-w-8xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a]  rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(0,196,255,0.4)] p-8 text-center transition"
            >
              <div className=" w-64 h-64 mx-auto mb-6 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00C4FF]/30 to-[#FF00D4]/30 rounded-br-[120px] translate-x-4 translate-y-4 z-0 shadow-[0_0_15px_rgba(255,0,212,0.3)]" />
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  className="relative z-10 w-full h-full object-cover bg-[#0a0a0a] rounded-br-[120px] border-2 border-[#00C4FF]/50"
                />
              </div>
              <h3 className="font-semibold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_5px_rgba(0,196,255,0.3)]">
                {member.name}
              </h3>
              <p className="text-sm text-[#00C4FF] font-medium mt-2">{member.role}</p>
              <p className="text-gray-300 text-sm mt-4 leading-relaxed">{member.bio}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm text-[#00C4FF] hover:text-[#FF00D4] hover:underline transition"
                >
                  <LinkedinIcon className="inline-block mr-1 w-5 h-5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default TeamPage;