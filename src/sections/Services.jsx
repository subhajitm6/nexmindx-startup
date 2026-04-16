import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cloud, BrainCircuit, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Software',
    desc: 'Bespoke enterprise applications tailored to your unique architectural requirements and business logic.',
    icon: <Code2 className="text-primary" size={32} />,
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'SaaS Solutions',
    desc: 'Scalable, multi-tenant cloud platforms engineered for sub-second latency and high availability.',
    icon: <Cloud className="text-primary" size={32} />,
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'AI Native Apps',
    desc: 'Deep learning integrations and LLM-powered solutions that bring intelligence to the core of your product.',
    icon: <BrainCircuit className="text-primary" size={32} />,
    color: 'from-accent/20 to-secondary/20',
  },
  {
    title: 'Low-Code / No-Code',
    desc: 'Accelerated development pipelines using modern frameworks that provide flexibility without complexity.',
    icon: <Zap className="text-primary" size={32} />,
    color: 'from-yellow-500/20 to-orange-500/20',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Precision <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            We deploy a multi-disciplinary approach to solve complex engineering challenges and deliver premium digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="h-full glass-card p-8 rounded-3xl border border-white/5 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] bg-gradient-to-br transition-all">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-sm font-bold text-primary group-hover:text-accent transition-colors">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
