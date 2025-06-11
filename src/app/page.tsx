'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import TypewriterText from '@/components/TypewriterText';
import FlipCard from '@/components/FlipCard';
import Image from 'next/image';

const experiences = [
  {
    title: "Staffing Tracker",
    description: "Developed an internal tool using ServiceNow's BuildTools to streamline engineering resourcing. The application helps teams efficiently allocate resources, track project assignments, and manage workload distribution. Features include real-time updates, automated notifications, and comprehensive reporting capabilities.",
    skills: ["ServiceNow", "JavaScript", "API Integration"]
  }
];

const projects = [
  {
    title: "Health Quest",
    description: "Health Quest helps users stay on track with their fitness and nutrition through interactive quests, group challenges, and AI-driven meal analysis. Users can create custom goals, track progress across nutrition and workouts, and collaborate with others through shared health journeys.",
    skills: ["React", "TypeScript", "Vite", "Bootstrap", "OpenAI API", "Firebase"],
    githubUrl: "https://github.com/barnetthan/health-quest",
    youtubeUrl: "https://youtube.com/shorts/g9N_jAFTVTQ?feature=share"
  },
  {
    title: "Dental Connect",
    description: "Dental Connect is a platform to help patients find in-network dentists based on their insurance coverage. Features include a location-based search, insurance verification, appointment scheduling, and more.",
    skills: ["React Native", "Node.js", "SQL", "REST API"],
    githubUrl: "https://github.com/Saathvik-Chepyala/dentalConnect",
    youtubeUrl: "https://youtube.com/shorts/sVtJKbZYmEw?feature=share"
  }
];

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen text-white pt-16 relative overflow-x-hidden">
        {/* Animated Background (fixed, covers viewport, vibrant and animated) */}
        <motion.div 
          className="fixed inset-0 -z-20 w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-900" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(68,68,68,.2)_50%,_transparent_75%,_transparent_100%)] bg-[length:250%_250%] animate-gradient" />
        </motion.div>

        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/profile.jpg"
                alt="Saathvik Chepyala profile photo"
                width={240}
                height={240}
                className="rounded-xl border-4 border-gray-700 shadow-lg object-cover"
                priority
              />
            </div>
            <TypewriterText 
              text="Saathvik Chepyala"
              className="text-6xl font-bold mb-4"
            />
            <p className="text-2xl text-gray-300 mb-8 leading-snug">
              CS &amp; Econ @ Texas
            </p>
            <div className="flex flex-col items-center">
              <div className="flex flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  See My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Contact
                </motion.button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-32 px-4 max-w-4xl mx-auto flex items-center">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
I'm Saathvik — a CS and Econ student at UT Austin. I like asking questions, mostly because I'm curious how things work and why people do what they do. Sometimes that means building out a product idea, other times it's just a random deep dive from my phone at 1 a.m.

I think a lot about decision-making, design, and how technology can actually make things simpler instead of more complicated. I'm drawn to tools that feel intuitive and ideas that solve problems in quiet, useful ways.

This site's where I'll be sharing projects I've built, things I've written, and whatever else I get into along the way.
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-32 px-4 flex items-center">
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
                    githubUrl={project.githubUrl}
                    youtubeUrl={project.youtubeUrl}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section id="experiences" className="min-h-screen py-32 px-4 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-16 text-center">Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <FlipCard
                    title={exp.title}
                    description={exp.description}
                    skills={exp.skills}
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
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Let's Connect</h2>
            <div className="flex justify-center space-x-8">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Saathvik-Chepyala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={40} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/saathvik-chepyala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={40} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:saathvikchepyala@utexas.edu"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={40} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full text-gray-300 text-center py-6 border-t border-gray-800 bg-gray-900/80">
        &copy; {new Date().getFullYear()} Saathvik Chepyala. All rights reserved.
      </footer>
    </>
  );
}
