'use client';
import React from 'react';
import ContactPage from './contact';
import Layout from '@/components/Layout';
import HeroHeader from '@/components/Heroheader';

const contactDetail = () => {
  return (
    <Layout>
      <HeroHeader
        heading="Consult the Experts"
      />
      <ContactPage />
      <div className="bg-[#0a0a0a] text-gray-100 font-orbitron py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_8px_rgba(0,196,255,0.3)]">
            Our Location
          </h2>
          <p className="mt-4 text-lg">
            Visit us at our office for a consultation or just to say hello!
          </p>
        </div>
      <div className="w-full mx-auto  flex justify-center items-center  ">
       
        <div className="w-[80vw] h-[450px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7562.058557750409!2d73.7501305!3d18.6177528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b994d7024003%3A0x66c636371410f931!2sAustin%20Park%20NXT!5e0!3m2!1sen!2sin!4v1751898176431!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-[0_0_20px_rgba(0,196,255,0.4)]"
          ></iframe>
          <div className="absolute inset-0 rounded-lg border-2 border-[#00C4FF]/40 pointer-events-none" />
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default contactDetail;