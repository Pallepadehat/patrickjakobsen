'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "./components/social-icons";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  image: string;
}

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hej", lang: "Danish" },
  { text: "Bonjour", lang: "French" },
  { text: "Hola", lang: "Spanish" },
  { text: "Ciao", lang: "Italian" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "Hallo", lang: "German" },
];

const techStack = {
  "Languages": [
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "Lua", icon: "/icons/lua.svg" },
    { name: "Swift", icon: "/icons/swift.svg" },
  ],
  "Frontend": [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Vue", icon: "/icons/vue.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  ],
  "Backend": [
    { name: "NestJS", icon: "/icons/nestjs.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
  ],
  "Mobile": [
    { name: "React Native", icon: "/icons/react.svg" },
    { name: "SwiftUI", icon: "/icons/swift.svg" },
  ],
  "Tools": [
    { name: "Vite", icon: "/icons/vite.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
  ],
};

const projects: Project[] = [];

const timeline: TimelineItem[] = [
  {
    title: "Full Stack Developer Student",
    company: "Ordbogen A/S",
    period: "2024 - Present",
    description: "Working on developing and maintaining web applications using modern technologies. Learning and implementing best practices in software development while contributing to large-scale applications.",
    technologies: ["TypeScript", "JavaScript", "Vue3", "PHP", "Laravel", "Git", "Flutter", "React Native"]
  },
  {
    title: "Programming Technician Student with specialization in Programming",
    company: "ZBC Ringsted",
    period: "2022 - 2027",
    description: "Studying as a Data Technician with specialization in Programming (Datatekniker med speciale i programmering). Learning comprehensive software development, from fundamental programming concepts to advanced system architecture.",
    technologies: [
      "Software Development",
      "System Architecture",
      "Database Management",
      "Network Programming",
      "Web Development",
      "Mobile Development"
    ]
  },
  {
    title: "Sales Assistant",
    company: "Føtex, Salling Group",
    period: "2022 - 2024",
    description: "Versatile role handling multiple departments including customer service, checkout operations, bakery, and bottle recycling. Developed strong multitasking abilities while maintaining high service standards and ensuring efficient operations across different store sections.",
    technologies: [
      "Customer Service",
      "Cash Handling",
      "Bakery Operations",
      "Recycling Management",
      "Team Collaboration",
      "Problem Solving"
    ]
  }
];

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden" ref={targetRef}>
      <div className="bg-grid fixed inset-0" />

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center"
        style={{ opacity, scale, y }}
      >
        <div className="hero-gradient absolute inset-0 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 space-y-12 text-center"
        >
          {/* Greeting and Name */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="floating px-4 sm:px-6 md:px-8"
          >
            <div className="h-16 mb-4">
              <motion.p
                key={currentGreeting}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl sm:text-3xl text-gray-400"
              >
                {greetings[currentGreeting].text}
              </motion.p>
            </div>
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight"
            >
              <span className="text-gradient">I&apos;m Patrick Jakobsen</span>
            </motion.h1>
          </motion.div>

          {/* About Me Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto space-y-6 px-4 sm:px-6 md:px-8"
          >
            <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-medium">
              Full Stack Developer Student at Ordbogen A/S
            </motion.p>
            <motion.p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I&apos;m an 18-year-old developer based in Denmark, passionate about creating modern,
              user-friendly applications using cutting-edge technologies. My journey in full-stack
              development spans across web, mobile, and backend technologies.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-6"
          >
            <Link
              href="https://github.com/pallepadehat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover-scale"
            >
              <GitHubIcon className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/patrick-jakobsen-aa8652288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover-scale"
            >
              <LinkedInIcon className="w-8 h-8" />
            </Link>

            <Link
              href="https://leetcode.com/u/pallepadehat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors hover-scale"
            >
              <LeetCodeIcon className="w-8 h-8" />
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover-scale"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Tech Stack Section */}
      <section className="relative py-16 sm:py-24 md:py-32">
        <div className="hero-gradient absolute inset-0 z-0 opacity-30" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-gradient">
            Tech Stack
          </h2>
          <div className="space-y-12 sm:space-y-16">
            {Object.entries(techStack).map(([category, technologies]) => (
              <motion.div
                key={category}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="space-y-6 sm:space-y-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-center text-gradient">
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                  {technologies.map((tech) => (
                    <motion.div
                      key={tech.name}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      className="group"
                    >
                      <div className="relative aspect-square card-gradient rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-4 glow overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                        {/* Icon */}
                        <div className="relative w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                          />
                        </div>

                        {/* Name */}
                        <p className="text-xs sm:text-sm md:text-base text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                          {tech.name}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center text-gradient">
            Experience Journey
          </h2>
          <div className="relative space-y-8">
            <div className="timeline-line">
              {timeline.map((item, index) => (
                <div key={item.title} className="flex items-center gap-8">
                  {/* Left side */}
                  <div className="w-1/2 flex flex-col items-end">
                    {index % 2 === 1 && (
                      <div className="timeline-card w-full max-w-xl rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                            {item.title}
                          </h3>
                          <span className="timeline-period text-sm font-medium text-gray-400">
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-medium text-gray-300 mb-2">{item.company}</h4>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        {item.technologies && item.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-sm font-medium text-indigo-300 bg-indigo-500/10 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Timeline indicator */}
                  <div className="relative flex items-center">
                    <div className="timeline-indicator" />
                  </div>

                  {/* Right side */}
                  <div className="w-1/2 flex flex-col items-start">
                    {index % 2 === 0 && (
                      <div className="timeline-card w-full max-w-xl rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text text-transparent">
                            {item.title}
                          </h3>
                          <span className="timeline-period text-sm font-medium text-gray-400">
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-lg font-medium text-gray-300 mb-2">{item.company}</h4>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        {item.technologies && item.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-sm font-medium text-indigo-300 bg-indigo-500/10 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      {projects.length > 0 && (
      <section className="relative py-16 sm:py-24 md:py-32">
        <div className="hero-gradient absolute inset-0 z-0 opacity-30" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-gradient">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -10 }}
                className="card-gradient rounded-xl overflow-hidden glow group"
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative h-40 sm:h-48 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="text-white font-medium">Visit Project →</span>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    priority
                  />
                </Link>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-pill text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-white hover:text-gray-300 transition-colors hover-scale inline-block"
                      >
                        View on GitHub →
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </section>
      )}

      {/* Contact Section */}
      <section className="relative py-16 sm:py-24 md:py-32">
        <div className="hero-gradient absolute inset-0 z-0 opacity-50" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10"
        >
          <motion.div
            className="card-gradient rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 glow"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gradient">
              Let&apos;s Connect
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="mailto:contactpatrickjak@icloud.com"
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/25"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
