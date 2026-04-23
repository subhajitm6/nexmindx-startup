import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, User, Send, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "6f090b52-fef9-4cdf-b5a2-a8f977f9bdcc",
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Message from ${formState.name} via Nexmind Website`
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-8"
            >
              Initiate <br />
              <span className="text-gradient">Transmission</span>
            </motion.h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Whether you're looking for a full-scale SaaS build or targeted AI integration, our team is ready to discuss your architecture.
            </p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-primary" />, label: 'Email', value: 'heynexmind@gmail.com' },
                { icon: <Phone className="text-accent" />, label: 'Base Ops', value: '+xx xxxxxxxxxx' },
                { icon: <MapPin className="text-secondary" />, label: 'Engineering Hub', value: 'Hyderabad, Telangana, India' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center group-hover:border-primary/50 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Social Links Placeholder */}
            <div className="mt-16 flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-lg glass border border-white/5 flex items-center justify-center hover:border-primary transition-all cursor-pointer">
                  <div className="w-4 h-4 bg-gray-600 rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] -z-10" />
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Transmission Successful</h3>
                  <p className="text-gray-400">Your message has been encrypted and sent. Our team will contact you shortly.</p>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Identity</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full bg-background/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Digital Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full bg-background/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Encrypted Message</label>
                    <div className="relative group flex items-start">
                      <MessageSquare className="absolute left-4 top-5 text-gray-500 group-focus-within:text-primary transition-colors" size={20} />
                      <textarea
                        name="message"
                        required
                        value={formState.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Briefly describe your project requirements..."
                        className="w-full bg-background/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-600 resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm font-medium flex items-center gap-2"
                    >
                      <AlertCircle size={16} /> Connection failed. Please try again later.
                    </motion.p>
                  )}

                  <motion.button
                    disabled={status === 'sending'}
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                    className={`w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-primary/40 ${
                      status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'sending' ? (
                      <>Encrypting... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                    ) : (
                      <>Send Transmission <Send size={18} /></>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

