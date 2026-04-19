import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../data/blogData';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-3xl text-white mb-6">Article not found</h2>
        <Link to="/blog" className="text-primary hover:underline">Return to blog</Link>
      </div>
    );
  }

  // Helper to split content by headers for simple formatting
  const sections = post.content.split('##').filter(Boolean);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          Back to Insights
        </Link>

        {/* Header Section */}
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <div className="h-px w-12 bg-white/10" />
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 text-gray-400 border-b border-white/5 pb-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                {post.author[0]}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{post.author}</p>
                <p className="text-xs text-gray-500">Technical Lead</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} className="text-secondary" />
              {post.date}
            </div>
            <button className="ml-auto p-2 glass rounded-lg hover:text-primary transition-colors">
              <Share2 size={18} />
            </button>
          </motion.div>
        </header>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-16"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
        </motion.div>

        {/* Content Section */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none mb-20"
        >
          {sections.map((section, idx) => {
            const [title, ...content] = section.split('\n');
            return (
              <div key={idx} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                  <span className="text-primary">#</span> {title.trim()}
                </h2>
                <div className="text-gray-400 leading-relaxed space-y-6">
                  {content.join('\n').split('\n\n').map((para, pIdx) => (
                    para.trim() && (
                      para.startsWith('-') || para.startsWith('*') || /^\d\./.test(para.trim())
                      ? <ul key={pIdx} className="list-disc list-inside space-y-3 ml-4">
                          {para.split('\n').map((li, liIdx) => (
                            <li key={liIdx} className="text-gray-400">{li.replace(/^[\-\*]\s*/, '').replace(/^\d\.\s*/, '')}</li>
                          ))}
                        </ul>
                      : <p key={pIdx} className="text-lg">{para.trim()}</p>
                    )
                  ))}
                </div>
              </div>
            );
          })}
        </motion.article>

        {/* Footer Navigation */}
        <div className="border-t border-white/5 pt-12 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Tags:</p>
            <div className="flex gap-2">
              {['Engineering', 'AI', post.category.split(' ')[0]].map(tag => (
                <span key={tag} className="px-3 py-1 text-xs glass rounded-full text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link to="/blog" className="px-6 py-2 glass rounded-full text-sm hover:border-primary/50 transition-all">
            More Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
