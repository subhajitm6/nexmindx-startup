import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full glass-card rounded-2xl overflow-hidden glow-border"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/20 backdrop-blur-md border border-primary/30 text-primary rounded-full uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-secondary" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <User size={14} className="text-accent" />
            {post.author}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {post.description}
        </p>

        <div className="mt-auto pt-4 border-t border-white/5">
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group/btn"
          >
            Read More
            <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
