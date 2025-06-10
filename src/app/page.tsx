'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import TypewriterText from '@/components/TypewriterText';
import FlipCard from '@/components/FlipCard';

const projects = [
  {
    title: "Staffing Tracker",
    description: "Developed an internal tool using ServiceNow's BuildTools to streamline engineering resourcing. The application helps teams efficiently allocate resources, track project assignments, and manage workload distribution. Features include real-time updates, automated notifications, and comprehensive reporting capabilities.",
    skills: ["ServiceNow", "JavaScript", "API Integration"]
  },
  {
    title: "Insurance-Dentist Finder App",
    description: "Built a full-stack React Native application that helps patients find in-network dentists based on their insurance coverage. The app includes features like location-based search, insurance verification, appointment scheduling, and reviews integration. Implemented secure authentication and real-time data synchronization.",
    skills: ["React Native", "Node.js", "SQL", "REST API"]
  }
];

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-900 text-white pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
            style={{ y: backgroundY }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-900" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(68,68,68,.2)_50%,_transparent_75%,_transparent_100%)] bg-[length:250%_250%] animate-gradient" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <TypewriterText 
              text="Saathvik Chepyala"
              className="text-6xl font-bold mb-4"
            />
            <p className="text-xl text-gray-300 mb-8">PM • SWE • Builder of useful things</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              See My Work
            </motion.button>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-32 px-4 max-w-4xl mx-auto flex items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Saathvik Chepyala — a CS & Econ student at UT Austin, driven by a passion for combining design, engineering, and strategy to build better tools and systems. I've explored everything from backend APIs to behavioral research, and I'm just getting started.
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-32 px-4 bg-gray-800 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <FlipCard
                    title={project.title}
                    description={project.description}
                    skills={project.skills}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section id="interests" className="min-h-screen py-32 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-16 text-center">Interests</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {['Automobiles', 'NBA', 'Personal Finance', 'Sports Analytics', 'Smart Home Tech', 'UI/UX Design'].map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-lg p-8 text-center"
                >
                  <p className="text-xl">{interest}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
            <div className="flex justify-center space-x-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/yourusername"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={40} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/yourusername"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={40} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:your.email@example.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={40} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
