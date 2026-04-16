import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

const projects = [
  {
    title: 'Nova Analytics Platform',
    category: 'SaaS / AI',
    image: project1,
    desc: 'An AI-driven data visualization dashboard for enterprise-level business intelligence.',
  },
  {
    title: 'Lumina Mobile Ecosystem',
    category: 'Mobile App / Fintech',
    image: project2,
    desc: 'A decentralized finance application with real-time asset tracking and AI security layers.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Selected <span className="text-gradient">Projects</span>
            </motion.h2>
            <p className="text-gray-400 text-lg">
              Showcasing our recent engineering milestones and the innovative solutions we've delivered.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 glass rounded-xl text-white font-bold border border-white/10 hover:border-primary/50 transition-all"
          >
            View All Work
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <button className="p-4 bg-primary text-white rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={24} />
                  </button>
                  <button className="p-4 glass text-white rounded-full hover:scale-110 transition-transform border border-white/20">
                    <Github size={24} />
                  </button>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-bold text-primary tracking-widest uppercase">{project.category}</span>
                  <div className="w-12 h-px bg-white/10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
