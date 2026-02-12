"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  GitHubIcon,
  LinkedInIcon,
  LeetCodeIcon,
} from "./components/social-icons";

// --- Data ---

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
  span?: string;
}

const techStack = {
  Languages: [
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Swift", icon: "/icons/swift.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "Lua", icon: "/icons/lua.svg" },
  ],
  Frontend: [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
    { name: "Vue", icon: "/icons/vue.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  ],
  Backend: [
    { name: "NestJS", icon: "/icons/nestjs.svg" },
    { name: "Laravel", icon: "/icons/laravel.svg" },
  ],
  Mobile: [
    { name: "React Native", icon: "/icons/react.svg" },
    { name: "SwiftUI", icon: "/icons/swift.svg" },
  ],
  Tools: [
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
  ],
};

const projects: Project[] = [
  {
    title: "MarkdownEditor",
    description:
      "A native Markdown editing component for macOS, built with SwiftUI and CodeMirror 6.",
    tech: ["SwiftUI", "CodeMirror 6", "Swift"],
    link: "https://github.com/Pallepadehat/MarkdownEditor",
    image: "/markdown-editor.png",
    span: "col-span-1 md:col-span-2",
  },
  {
    title: "opendiff",
    description:
      "A clean, keyboard-friendly terminal UI for diffing files and directories.",
    tech: ["TypeScript", "Bun"],
    link: "https://github.com/Pallepadehat/opendiff",
    image: "/opendiff.png",
    span: "col-span-1",
  },
  {
    title: "brewkeeper",
    description:
      "A polished terminal UI for Homebrew upgrades, focused on safer decisions.",
    tech: ["Bun", "React", "OpenTUI"],
    link: "https://github.com/Pallepadehat/brewkeeper",
    image: "/brewkeeper.png",
    span: "col-span-1",
  },
];

const timeline = [
  {
    company: "Ordbogen A/S",
    role: "Full Stack Developer",
    period: "2024 - Present",
  },
  {
    company: "ZBC Ringsted",
    role: "Programming Technician",
    period: "2022 - 2027",
  },
];

// --- Components ---

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white/20 overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-6 sm:px-12 py-32 sm:py-48 space-y-40">
        {/* Header / Hero */}
        <section className="space-y-10 animate-fade-up">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white/95">
              Patrick Jakobsen
            </h1>
            <p className="text-xl sm:text-2xl text-muted font-medium max-w-2xl leading-relaxed text-balance">
              Full Stack Developer Student at Ordbogen A/S based in Denmark. I
              build <span className="text-white/90">polished</span>,{" "}
              <span className="text-white/90">performance-focused</span>{" "}
              experiences across web, mobile, and backend.
            </p>
          </div>

          <div className="flex gap-6 items-center">
            <div className="flex gap-5">
              <SocialLink
                href="https://github.com/pallepadehat"
                icon={<GitHubIcon className="w-5 h-5" />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/patrick-jakobsen-aa8652288"
                icon={<LinkedInIcon className="w-5 h-5" />}
              />
              <SocialLink
                href="https://leetcode.com/u/pallepadehat/"
                icon={<LeetCodeIcon className="w-5 h-5" />}
              />
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section
          className="space-y-12 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-sm font-semibold text-muted uppercase tracking-widest pl-1">
            Selected Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          className="space-y-12 animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <h2 className="text-sm font-semibold text-muted uppercase tracking-widest pl-1">
            Experience
          </h2>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="group flex justify-between items-baseline border-b border-white/5 pb-4 hover:border-white/20 transition-colors duration-300"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                    {item.company}
                  </h3>
                  <p className="text-muted text-sm group-hover:text-muted/80 transition-colors">
                    {item.role}
                  </p>
                </div>
                <div className="text-sm text-white/20 font-mono group-hover:text-white/50 transition-colors">
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section
          className="space-y-12 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-sm font-semibold text-muted uppercase tracking-widest pl-1">
            Toolkit
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-3 text-muted/60 hover:text-white transition-colors group"
                    >
                      <div className="w-4 h-4 relative opacity-60 group-hover:opacity-100 transition-opacity">
                        <Image
                          src={item.icon}
                          alt={item.name}
                          fill
                          className="object-contain" // Removed brightness-0 invert
                        />
                      </div>
                      <span className="text-sm font-medium">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer
          className="pt-20 pb-12 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
            <p className="text-sm text-white/20">
              &copy; {new Date().getFullYear()} Patrick Jakobsen.
            </p>
            <Link
              href="mailto:contactpatrickjak@icloud.com"
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-muted/60 hover:text-white transition-all duration-300 hover:scale-110"
    >
      {icon}
    </Link>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all duration-500 ${project.span || "col-span-1"}`}
    >
      <Link
        href={project.link}
        target="_blank"
        className="h-full flex flex-col"
      >
        <div
          className={`relative w-full overflow-hidden ${project.span?.includes("md:col-span-2") ? "h-64 sm:h-96" : "h-48"}`}
        >
          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-apple grayscale group-hover:grayscale-0"
          />
        </div>

        <div className="p-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/40">
          <div>
            <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
