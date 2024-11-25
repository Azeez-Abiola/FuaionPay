import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ProductShowcase() {
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
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              <span className="text-black">Pay Bills, Get Paid</span>, <span className="text-purple-600">Manage Your Finances</span> <span className="text-black">Effortlessly</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              Experience the ease of managing all your financial needs in one place. From bill payments to receiving funds, FusionPay streamlines your financial life.
            </p>
            <ul className="space-y-4">
              {['Seamlessly Pay Your Bills', 'Receive Payments Instantly', 'Track Your Expenses', 'Manage Multiple Accounts'].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-600"
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-purple-500 text-white flex items-center justify-center rounded mr-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2"
            variants={itemVariants}
          >
            <img src="/productshowcase1.png" alt="FusionPay Product" className="w-full h-auto rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}