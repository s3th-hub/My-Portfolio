/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Layers, 
  Wrench, 
  ChevronRight,
  Send,
  Cpu,
  Briefcase
} from 'lucide-react';

// --- Data ---

const PROJECTS = [
  {
    title: "ACREMAG",
    description: "A comprehensive Real Estate Management Platform designed to streamline property listings, client management, and transaction tracking.",
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/s3th-hub",
    image: "/images/acremag_cover.jpeg.jpg"
  },
  {
    title: "Hospital Management System",
    description: "A robust system for managing patient records, appointments, billing, and staff schedules in a clinical environment.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    link: "https://github.com/s3th-hub",
    image: "/projects/hospital.jpg"
  },
  {
    title: "Competence Coaching Centre",
    description: "A corporate training and consultancy website helping companies train staff and solve business problems through expert-led programs.",
    tech: ["WordPress", "PHP", "Custom CSS"],
    link: "https://github.com/s3th-hub",
    image: "/projects/competence.jpg"
  },
  {
    title: "AWiM Learning",
    description: "An online e-learning platform focused on media and journalism, empowering women with storytelling skills to grow their careers.",
    tech: ["LMS", "PHP", "JavaScript", "WordPress"],
    link: "https://github.com/s3th-hub",
    image: "/projects/awim.jpg"
  },
  {
    title: "Tap Magazine Africa",
    description: "A digital magazine and content publishing platform delivering editorial and brand-driven content across Africa.",
    tech: ["WordPress", "Editorial Design", "PHP"],
    link: "https://github.com/s3th-hub",
    image: "/projects/tapmag.jpg"
  },
  {
    title: "Baddy Store Kenya",
    description: "A full-featured e-commerce platform where customers can browse and purchase products directly online.",
    tech: ["WooCommerce", "PHP", "Payment Integration"],
    link: "https://github.com/s3th-hub",
    image: "/projects/baddy.jpg"
  },
  {
    title: "WordPress Plugins",
    description: "Custom plugin development focusing on extending WordPress functionality and building bespoke solutions.",
    tech: ["PHP", "WordPress API", "JavaScript"],
    link: "https://github.com/s3th-hub",
    image: "/projects/plugins.jpg"
  }
];

const SKILLS = [
  {
    category: "Front-End Development",
    items: ["HTML5, CSS3, JavaScript", "Responsive Web Design", "UI/UX Implementation", "DOM Manipulation", "Cross-Browser Compatibility"],
    icon: <Layers className="w-5 h-5" />
  },
  {
    category: "WordPress Development",
    items: ["Elementor & Gutenberg", "Custom Theme Development", "Plugin Customization", "ACF (Advanced Custom Fields)", "WooCommerce Setup"],
    icon: <Wrench className="w-5 h-5" />
  },
  {
    category: "Database Skills",
    items: ["MySQL Queries", "CRUD Operations", "Database Design", "phpMyAdmin", "WP Database Structure"],
    icon: <Database className="w-5 h-5" />
  },
  {
    category: "Backend & Tools",
    items: ["PHP (Basic CRUD)", "REST API Integration", "Git & GitHub", "Linux Environment", "Docker (Beginner)"],
    icon: <Code2 className="w-5 h-5" />
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-subtle bg-black/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tighter flex items-center gap-1"
        >
          S3TH<span className="bg-accent text-black px-1 rounded">hub</span>
        </motion.div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          
          <a 
            href="#contact"
            className="px-4 py-2 bg-accent text-black text-sm font-bold rounded hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white mb-1.5" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-subtle px-6 py-8 flex flex-col gap-6"
        >
          <a href="#about" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase tracking-tighter hover:text-accent">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase tracking-tighter hover:text-accent">Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase tracking-tighter hover:text-accent">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-xl font-black uppercase tracking-tighter hover:text-accent">Contact</a>
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-accent text-black text-center font-black uppercase tracking-widest rounded"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-black tracking-tight mb-4 uppercase"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted max-w-2xl text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      className="h-2 bg-accent mt-4"
    />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-black bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
        {/* Background Floating Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/4 left-10 w-24 h-24 border-2 border-accent/20 rounded-full"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-1/4 right-10 w-32 h-32 border-2 border-accent/10 rounded-lg"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform translate-x-1/4 -z-10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-sm font-bold uppercase tracking-widest">
                  Available for Projects
                </span>
              </div>
              
              <h1 className="text-[clamp(3.5rem,15vw,8rem)] font-black tracking-tighter leading-[0.85] mb-8 uppercase">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="block"
                >
                  Seth
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-accent block"
                >
                  Munyasi
                </motion.span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
                Front-End & WordPress Developer building high-performance systems and bespoke digital solutions. 
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#projects" 
                  className="w-full sm:w-auto px-10 py-4 bg-accent text-black rounded font-black uppercase tracking-tighter hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  View Work
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto px-10 py-4 border-2 border-accent text-accent rounded font-black uppercase tracking-tighter hover:bg-accent hover:text-black transition-all text-center"
                >
                  Contact
                </a>
              </div>
            </motion.div>

            {/* Cool Image Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
              className="relative w-full max-w-sm mx-auto lg:max-w-none"
            >
              <div className="relative z-10 w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden border-4 border-accent shadow-[10px_10px_0px_0px_rgba(255,153,0,0.2)] md:shadow-[20px_20px_0px_0px_rgba(255,153,0,0.2)]">
                <img 
                  src="src/Assets/images/seth.png" 
                  alt="Seth Munyasi"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-y border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading 
                title="The Developer" 
                subtitle="Front-End & WordPress Developer building responsive, user-friendly websites."
              />
              <div className="space-y-6 text-lg text-muted font-medium leading-relaxed">
                <p>
                  I am a <span className="text-white">Front-End & WordPress Developer</span> with strong skills in building responsive, user-friendly websites and custom WordPress solutions. I am experienced in translating client and business requirements into clean, functional, and visually appealing web interfaces.
                </p>
                <p>
                  Proficient in front-end development using <span className="text-accent">HTML, CSS, JavaScript</span>, and responsive design techniques, with additional hands-on experience in WordPress theme customization, plugin integration, and performance optimization.
                </p>
                <p>
                  I am comfortable working with basic backend technologies such as <span className="text-white">PHP and MySQL</span> for extending functionality when needed. Highly focused on UI/UX consistency, clean coding standards, and delivering websites that are fast, accessible, and easy to manage.
                </p>
                <p className="text-sm italic">
                  Currently growing skills in modern front-end technologies like <span className="text-accent">React</span> and exploring <span className="text-accent">Node.js</span>.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="aspect-square rounded-lg overflow-hidden card p-8 md:p-12 flex flex-col justify-center items-center text-center border-2 border-accent/20 bg-zinc-900/50 backdrop-blur-sm">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 md:w-24 md:h-24 bg-accent flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,153,0,0.3)]"
                >
                  <Cpu className="w-10 h-10 md:w-12 md:h-12 text-black" />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter">UI/UX Focused</h3>
                <p className="text-muted font-medium text-sm md:text-base">
                  Delivering websites that are fast, accessible, and easy to manage with a focus on clean coding standards.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 w-full">
                  <div className="p-4 md:p-6 bg-accent/10 border-l-4 border-accent">
                    <div className="text-accent font-black text-2xl md:text-3xl">3+</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Years Exp</div>
                  </div>
                  <div className="p-4 md:p-6 bg-accent/10 border-l-4 border-accent">
                    <div className="text-accent font-black text-2xl md:text-3xl">15+</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">Projects</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-accent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Tech Stack" 
            subtitle="Modern tools for modern problems."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10 }}
                className="p-8 card hover:border-accent transition-all duration-300 group bg-zinc-900/20 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-accent flex items-center justify-center mb-6 group-hover:-rotate-6 transition-transform">
                  <div className="text-black">
                    {skill.icon}
                  </div>
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{skill.category}</h3>
                <ul className="space-y-3">
                  {skill.items.map(item => (
                    <li key={item} className="text-muted font-bold text-sm flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Projects" 
            subtitle="Engineered for performance and reliability."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col card group hover:bg-zinc-900/50 transition-all duration-500 border-2 border-transparent hover:border-accent/30"
              >
                <div className="h-48 bg-zinc-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Briefcase className="w-16 h-16 text-white/5" />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-accent text-black text-[10px] font-black uppercase tracking-widest">
                      Case Study
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted mb-8 font-medium leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 border border-subtle text-[10px] font-bold uppercase tracking-widest text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center gap-2 font-black text-xs uppercase tracking-widest text-accent hover:underline"
                  >
                    Source Code <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* GitHub Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-12 bg-accent text-black flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <Github className="w-10 h-10" />
                <h3 className="text-4xl font-black uppercase tracking-tighter">S3th-hub</h3>
              </div>
              <p className="font-bold max-w-xl text-lg">
                Explore my full portfolio of code, from small scripts to full-scale systems.
              </p>
            </div>
            <a 
              href="https://github.com/s3th-hub" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-black text-white font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              View GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading 
                title="Contact" 
                subtitle="Ready to start your next project?"
              />
              
              <div className="space-y-10 mt-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-accent flex items-center justify-center text-black group-hover:rotate-12 transition-transform">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1">Email</div>
                    <a href="mailto:sethmunyasi@gmail.com" className="text-2xl font-black tracking-tighter hover:text-accent transition-colors uppercase">
                      sethmunyasi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-accent flex items-center justify-center text-black group-hover:rotate-12 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-1">Phone</div>
                    <div className="text-2xl font-black tracking-tighter uppercase">
                      0706278883
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 card border-2 border-accent/20"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-4 bg-zinc-900 border-none focus:ring-2 focus:ring-accent transition-all text-white font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest ml-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-4 bg-zinc-900 border-none focus:ring-2 focus:ring-accent transition-all text-white font-bold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-4 bg-zinc-900 border-none focus:ring-2 focus:ring-accent transition-all text-white font-bold resize-none"
                  />
                </div>
                <button 
                  className="w-full py-5 bg-accent text-black font-black uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-subtle">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="font-black text-3xl tracking-tighter uppercase">
            S3TH<span className="bg-accent text-black px-1 rounded ml-1">hub</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/s3th-hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:sethmunyasi@gmail.com"
              className="text-muted hover:text-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-muted text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Seth Munyasi
          </div>
        </div>
      </footer>
    </div>
  );
}
