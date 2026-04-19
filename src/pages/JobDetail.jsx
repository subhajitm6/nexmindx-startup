import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { jobData } from '../data/jobData';
import ApplyForm from '../components/ApplyForm';
import { ArrowLeft, MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobData.find((j) => j.id === parseInt(id));

  if (!job) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl text-white mb-6">Position not found</h2>
        <Link to="/careers" className="text-primary hover:underline">View all positions</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
          <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
          <ChevronRight size={14} />
          <span className="text-gray-300">{job.title}</span>
        </div>

        <Link 
          to="/careers" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Back to Careers
        </Link>

        {/* Job Header */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full uppercase tracking-wider">
                  {job.category}
                </span>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={16} className="text-secondary" /> {job.type}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                {job.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-6 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-accent" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-secondary" />
                  {job.salary}
                </div>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary/30"
            >
              Apply for this role
            </motion.button>
          </div>
        </header>

        {/* Job Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          <div className="lg:col-span-2 space-y-16">
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">About the Role</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {job.description}
              </p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Key Responsibilities</h2>
              <ul className="space-y-4">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 text-lg">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 text-lg">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <div className="glass-card rounded-2xl p-8 sticky top-32">
              <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {job.techStack.map(tech => (
                  <span key={tech} className="px-4 py-2 glass rounded-xl text-sm text-gray-300 border border-white/5 hover:border-primary/30 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <h4 className="text-white font-bold mb-4">Questions?</h4>
                <p className="text-gray-500 text-sm mb-6">Reach out to our talent acquisition team at careers@nexmindx.com</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5" />
                  <div className="w-10 h-10 rounded-full bg-white/5" />
                  <div className="w-10 h-10 rounded-full bg-white/5" />
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Application Form */}
        <section id="apply-form" className="scroll-mt-32">
          <ApplyForm jobTitle={job.title} />
        </section>
      </div>
    </div>
  );
};

export default JobDetail;
