import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

const JobCard = ({ job, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">
              {job.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-secondary">
              <Clock size={14} /> {job.type}
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {job.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-accent" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <Briefcase size={16} className="text-secondary" />
              {job.salary}
            </div>
          </div>
          
          <p className="text-gray-500 text-sm line-clamp-2 max-w-2xl">
            {job.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:w-48 lg:w-64">
          {job.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="px-2 py-1 text-[10px] glass rounded text-gray-400">
              {tech}
            </span>
          ))}
          {job.techStack.length > 3 && (
            <span className="px-2 py-1 text-[10px] glass rounded text-gray-500">
              +{job.techStack.length - 3} more
            </span>
          )}
        </div>

        <Link
          to={`/careers/${job.id}`}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-primary text-white rounded-xl font-semibold transition-all group/btn"
        >
          Apply Now
          <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default JobCard;
