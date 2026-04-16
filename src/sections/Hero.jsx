import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

import heroImg from '../assets/hero_bg.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-grid">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">New: AI-Native SaaS Solutions</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Engineering the <br />
            <span className="text-gradient">Future of SaaS</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-10 leading-relaxed"
          >
            We build high-performance, AI-driven applications and custom software that scale with your vision. Experience precision engineering at the intersection of innovation and execution.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg hover:shadow-primary/50">
              Get Started <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 glass text-white rounded-xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10">
              Book a Call
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                  U{i}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Trusted by <span className="text-white font-bold text-base">500+</span> industry leaders worldwide
            </p>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative perspective-lg"
        >
          <div className="relative z-10 glass-card p-4 rounded-3xl overflow-hidden border-2 border-primary/20 group">
            <motion.img
              src={heroImg}
              alt="AI Vision"
              className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-105"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
