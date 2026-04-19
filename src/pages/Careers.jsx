import React from 'react';
import { motion } from 'framer-motion';
import { jobData } from '../data/jobData';
import JobCard from '../components/JobCard';
import { Zap, Target, Users, Code, ArrowDown } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="text-primary" size={24} />,
    title: "Innovative Projects",
    desc: "Work on cutting-edge AI and SaaS solutions that solve real-world engineering challenges."
  },
  {
    icon: <Target className="text-secondary" size={24} />,
    title: "Growth Opportunities",
    desc: "Clear career paths, mentorship, and a budget for continuous learning and certifications."
  },
  {
    icon: <Users className="text-accent" size={24} />,
    title: "Flexible Work Culture",
    desc: "Remote-first mindset with flexible hours, focused on output rather than hours logged."
  },
  {
    icon: <Code className="text-primary" size={24} />,
    title: "Modern Tech Stack",
    desc: "Build with the latest tools: React, PyTorch, AWS, and modern automation frameworks."
  }
];

const Careers = () => {
  const scrollToJobs = () => {
    const element = document.getElementById('open-positions');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 blur-[130px] rounded-full -z-10" />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold text-white mb-8"
          >
            Join Our <span className="text-gradient">Team</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Build the future of SaaS, AI Foundations, and scalable architectural systems with us.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={scrollToJobs}
            className="px-10 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-primary/30 flex items-center gap-2 mx-auto"
          >
            View Open Positions
            <ArrowDown size={20} />
          </motion.button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="container mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why work with us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We're a team of engineers and dreamers building the next generation of digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="glass-card rounded-[2.5rem] overflow-hidden p-8 md:p-16 relative">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Engineering first, <span className="text-secondary">always.</span></h2>
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  At NexmindX, we don't just build software; we architect solutions. Our culture is rooted in architectural cleanliness, performance optimization, and elite craftsmanship.
                </p>
                <p>
                  We believe in extreme autonomy, constant experimentation, and the pursuit of engineering excellence. Whether you're a PhD in AI or a self-taught frontend wizard, if you value quality, you belong here.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="h-48 glass rounded-3xl" />
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl" />
              </div>
              <div className="space-y-4">
                <div className="h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl" />
                <div className="h-48 glass rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section id="open-positions" className="container mx-auto px-6 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400">Join the Nexmind Engineering Corp and build the future with us.</p>
          </div>
          <div className="flex gap-4">
            <select className="bg-white/5 border border-white/10 text-white py-2.5 px-4 rounded-xl focus:outline-none focus:border-primary">
              <option>All Categories</option>
              <option>Engineering</option>
              <option>AI & Data</option>
              <option>Design</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {jobData.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-6 mt-40">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to build something impactful?</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            If you don't see a perfect fit but think you'd be a great addition to the team, send us an open application.
          </p>
          <button className="px-10 py-4 glass hover:bg-white/5 text-white rounded-full font-bold text-lg transition-all">
            Open Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;
