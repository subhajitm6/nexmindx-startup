import React from 'react';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';
import BlogCard from '../components/BlogCard';
import { Search, Filter } from 'lucide-react';

const Blog = () => {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Background Decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 blur-[120px] rounded-full -z-10" />
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Insights & <span className="text-gradient">Articles</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Latest thoughts on SaaS, AI foundations, and engineering excellence from the Nexmind team.
          </motion.p>
        </div>
      </section>

      {/* Filter & Search Bar (UI Only) */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 glass rounded-2xl">
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {['All Posts', 'AI', 'SaaS', 'Engineering', 'Company'].map((tag) => (
              <button
                key={tag}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                  tag === 'All Posts' 
                  ? 'bg-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-primary transition-all"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section (Internal) */}
      <section className="container mx-auto px-6 mt-32">
        <div className="relative glass-card rounded-3xl p-12 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full -z-10" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Want to build something like this?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join the elite teams of engineers building the next generation of SaaS.
          </p>
          <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
