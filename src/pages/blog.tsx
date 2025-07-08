'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import HeroHeader from '@/components/Heroheader';

const blogs = [
  {
    title: 'Follow the money | Heel Holland Digitaliseert',
    subtitle: 'Digital transformation can feel like climbing a mountain...',
    author: 'Eric Weijers',
    date: 'July 4, 2025',
    image: '/images/blog.jpg',
    avatar: '/images/person1.jpg',
    badgeText: 'HEEL HOLLAND',
    badgeHighlight: 'DIGITALISEERT',
    badgeSub: 'Follow the money',
  },
  {
    title: 'Mendix Expert Jay Cadogan joins Blue green Solutions',
    subtitle: 'Mendix Developer Jay Cadogan joins our Blue Green team.',
    author: 'Nina Morsa',
    date: 'July 4, 2025',
    image: '/images/blog.jpg',
    avatar: '/images/person2.jpg',
  },
  {
    title: 'The spot on the horizon',
    subtitle:
      'When companies go digital, they usually skip one crucial step: defining a strategy...',
    author: 'Eric Weijers',
    date: 'June 18, 2025',
    image: '/images/blog.jpg',
    avatar: '/images/person3.jpg',
    badgeText: 'HEEL HOLLAND',
    badgeHighlight: 'DIGITALISEERT',
    badgeSub: 'The spot on the horizon',
  },
];

const BlogPage = () => {
  return (
    <Layout>
      <HeroHeader
        heading="Blogs & Updates"
      />
      <main className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a] rounded-2xl shadow-md hover:shadow-[0_0_20px_rgba(0,196,255,0.4)] transition overflow-hidden border border-[#00C4FF]/20"
              >
                {/* Blog Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl border-b-2 border-[#00C4FF]/50"
                  />
                  <div className="absolute inset-0 rounded-t-2xl border-2 border-[#00C4FF]/40 pointer-events-none" />
                  {/* Optional Banner Text */}
                  {blog.badgeText && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent">
                      <div className="absolute inset-0 bg-opacity-30 flex flex-col justify-center px-4">
                        <h3 className="text-white font-bold text-lg uppercase">
                          {blog.badgeText}{' '}
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4]">
                            {blog.badgeHighlight}
                          </span>
                        </h3>
                        <p className="text-white text-xl font-semibold bg-clip-text bg-gradient-to-r from-[#00C4FF] to-[#FF00D4]">
                          {blog.badgeSub}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#00C4FF] to-[#FF00D4] drop-shadow-[0_0_5px_rgba(0,196,255,0.3)]">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 mb-4 leading-relaxed">{blog.subtitle}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <img
                      src={blog.avatar}
                      alt={blog.author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#00C4FF]/50"
                    />
                    <span>{blog.author}</span>
                    <span>|</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogPage;