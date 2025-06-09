'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-900 text-white pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <h1 className="text-6xl font-bold mb-4">Hi, I'm Saathvik Chepyala</h1>
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold mb-4">Staffing Tracker</h3>
                <p className="text-gray-300 mb-6 text-lg">Internal tool built with ServiceNow's BuildTools to streamline engineering resourcing.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">ServiceNow</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">JavaScript</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-lg p-8"
              >
                <h3 className="text-2xl font-bold mb-4">Insurance-Dentist Finder App</h3>
                <p className="text-gray-300 mb-6 text-lg">Full-stack React Native app to help patients find in-network dentists based on insurance coverage.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">SQL</span>
                </div>
              </motion.div>
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
