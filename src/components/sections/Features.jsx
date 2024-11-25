import { motion, useInView } from 'framer-motion';
import { Shield, CreditCard, Zap, Wallet, PieChart, Users } from 'lucide-react';
import { useRef } from 'react';

const features = [
  { icon: Shield, title: 'Secure Transactions', description: 'State-of-the-art encryption for all your transactions' },
  { icon: CreditCard, title: 'Multiple Payment Options', description: 'Choose from various payment methods for your convenience' },
  { icon: Zap, title: 'Instant Transfers', description: 'Lightning-fast money transfers to any account' },
  { icon: Wallet, title: 'Digital Wallet', description: 'Store and manage your funds securely in our digital wallet' },
  { icon: PieChart, title: 'Financial Analytics', description: 'Gain insights into your spending habits and financial health' },
  { icon: Users, title: 'Peer-to-Peer Payments', description: 'Send and receive money from friends and family with ease' },
];

export default function Features() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-100px",
    once: false
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#110627] overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-white"
          variants={itemVariants}
        >
          Powerful Features for Your Financial Journey
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-[#1A0B37] p-6 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}