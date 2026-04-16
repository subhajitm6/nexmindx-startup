import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Send } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent p-1 gap-1"
        >
          {/* Inner Content */}
          <div className="bg-background/90 backdrop-blur-3xl rounded-[2.9rem] p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full"
            />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 border border-primary/20 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              <Zap className="text-primary fill-primary" size={40} />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl leading-tight">
              Let’s Build Your <span className="text-gradient underline decoration-primary/30 underline-offset-8">Next Big Idea</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-xl">
              Ready to engineer a solution that markets will love? Our team is standing by to help you scale.
            </p>

            <div className="flex flex-wrap justify-center gap-6 w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-primary text-white rounded-2xl font-bold flex items-center gap-3 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-primary/50"
              >
                Start Your Project <Send size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass text-white rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all"
              >
                Schedule Consultation
              </motion.button>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/5 w-full flex flex-wrap justify-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-bold tracking-widest text-sm">SECURE_DEV</span>
              <span className="font-bold tracking-widest text-sm">AGILE_STACK</span>
              <span className="font-bold tracking-widest text-sm">LLM_READY</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
