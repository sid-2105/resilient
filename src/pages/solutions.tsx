'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, RefreshCw, Target } from 'lucide-react';
import HeroHeader from '@/components/Heroheader';
import Layout from '@/components/Layout';
import HeroBanner from '@/components/Herobanner';

const SolutionsPage = () => {
  return (
    <Layout>
      <HeroHeader heading="Our solutions"></HeroHeader>
      <main className="bg-gray-950 text-gray-100 font-orbitron">
        {/* 🔹 Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-6 text-shadow-[0_0_3px_#FF00D4]">Why Mendix low-code?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-lg">
              <p>
                With <Link href="/low-code-enablement" className="text-blue-400 underline hover:text-shadow-[0_0_3px_#00C4FF]">Mendix low-code</Link>, we quickly build flexible and scalable applications.
                Because you can use existing components, you don’t have to code each element, which drastically shortens time to market and reduces errors.
              </p>
              <p>
                Thanks to our extensive Mendix expertise, we immediately see how this low-code platform can meet your needs and help you get value from your application fast.
              </p>
              <p>
                We chose Mendix because it’s a reliable and feature-rich platform. In fact, <Link href="https://www.gartner.com" className="text-blue-400 underline hover:text-shadow-[0_0_3px_#00C4FF]">Gartner</Link> has named Mendix a global leader in low-code platforms for eight years in a row.
              </p>
            </div>

            {/* Right Image */}
            <div>
              <Image
                src="/images/team.jpg"
                width={600}
                height={400}
                alt="Our Team"
                className="rounded-2xl shadow-md w-full hover:drop-shadow-[0_0_8px_#00C4FF]"
              />
            </div>
          </div>
        </section>

        {/* 🔹 Features Grid */}
        <section className="bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-950 rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform border border-blue-500/30">
                <ShieldCheck className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-lg text-shadow-[0_0_3px_#FF00D4]">Official Mendix Certified Experts</h4>
              </div>
              <div className="bg-gray-950 rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform border border-blue-500/30">
                <RefreshCw className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h4 className="font-semibold text-lg text-shadow-[0_0_3px_#FF00D4]">Flexible and scalable software solutions</h4>
              </div>
              <div className="bg-gray-950 rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-transform border border-blue-500/30">
                <Target className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-lg text-shadow-[0_0_3px_#FF00D4]">Rapid results and short time to market</h4>
              </div>
            </div>
          </div>
        </section>

        {/* 🔹 Use Case Section */}
        <section className="mx-auto py-20 space-y-20">
          {/* Item 1 */}
          <div className="grid md:grid-cols-2 mx-auto max-w-7xl px-6 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-4 text-shadow-[0_0_3px_#FF00D4]">Workflow automation & digitalisation</h3>
              <p className="mb-4 text-gray-300">
                Want your processes to run smoother, smarter, and faster? We build workflows in new applications or on top of core systems like SAP, PLM, Teamcenter, AFAS, Exact, IBM Maximo, Oracle, and various TMS solutions.
              </p>
              <p className="text-gray-300">
                By digitizing and automating processes, you improve information flow, reduce routine tasks, and gain better insight into process data.
              </p>
            </div>
            <Image
              src="/images/auto.jpg"
              width={600}
              height={400}
              alt="Workflow Automation"
              className="rounded-2xl shadow-lg hover:drop-shadow-[0_0_8px_#00C4FF]"
            />
          </div>

          <HeroBanner 
            backgroundImage="/images/person4.jpg"
            title="Want to see how Mendix low-code can help your business?"
            buttonText="Get your free consultation"
            onButtonClick={() => window.location.href = "/#contact"}
          />

          {/* Item 2 */}
          <div className="grid md:grid-cols-2 mx-auto gap-12 max-w-7xl px-6 items-center" id='expert-review'>
            <Image
              src="/images/experts.jpg"
              width={600}
              height={400}
              alt="Mendix Expert Scan"
              className="rounded-2xl shadow-lg order-2 md:order-1 hover:drop-shadow-[0_0_8px_#00C4FF]"
            />
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4 text-shadow-[0_0_3px_#FF00D4]">Mendix Expert Scan</h3>
              <p className="text-gray-300">
                Is your Mendix application landscape well-built, secure, up to date, and future-ready? Our experts perform a deep dive into your Mendix applications to identify performance issues, scalability gaps, and security concerns. Get actionable recommendations for improvement.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default SolutionsPage;