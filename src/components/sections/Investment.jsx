import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Investment() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-100px",
    once: false
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
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
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            variants={rightVariants}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white">
              Invest, Trade Stocks, And Cultivate Your <span className="text-purple-500">Financial Portfolio</span>
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-8">
              Take control of your financial future with our comprehensive investment tools. Whether you're a beginner or an experienced trader, FusionPay provides the resources you need to grow your wealth.
            </p>
            <ul className="space-y-4">
              {['Access to Global Markets', 'Real-time Stock Tracking', 'Diversified Investment Options', 'Expert Financial Advice'].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-300"
                  variants={listItemVariants}
                >
                  <svg className="w-6 h-6 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2"
            variants={leftVariants}
          >
            <img src="/invest.png" alt="FusionPay Investment" className="w-full h-auto rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}