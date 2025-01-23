'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
  topics: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Building a Modern Portfolio with Next.js",
    description: "A deep dive into creating a performant and beautiful portfolio website using Next.js, Tailwind CSS, and Framer Motion.",
    date: "2024-03-20",
    readTime: "5 min read",
    link: "/blog/building-modern-portfolio",
    topics: ["Next.js", "React", "Web Development"]
  },
  {
    title: "My Journey as a Full Stack Developer",
    description: "Sharing my experiences, challenges, and lessons learned while becoming a full stack developer.",
    date: "2024-03-15",
    readTime: "8 min read",
    link: "/blog/fullstack-journey",
    topics: ["Career", "Development", "Learning"]
  }
];

export default function Blog() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Blog & Thoughts</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 rounded-lg p-6 hover:bg-zinc-800 transition-colors"
            >
              <Link href={post.link} className="block">
                <div className="flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-zinc-400 mb-4 flex-grow">{post.description}</p>
                  <div className="flex items-center justify-between text-sm text-zinc-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {post.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
