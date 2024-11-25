import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    { title: 'Company', items: ['About Us', 'Contact', 'Career', 'Security'] },
    { title: 'Products', items: ['Credit Card', 'Savings', 'Business', 'Commercial'] },
    { title: 'Legal', items: ['Privacy Policy', 'Terms Of Service', 'Legal Agreement', 'Subpoena Policy'] },
    { title: 'Support', items: ['FAQs', 'Contact Us', 'ID Verification', 'Help Center'] },
  ];

  return (
    <footer className="bg-[#0A0118] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.png" alt="FusionPay" className="h-8 w-auto mb-4 md:mb-0" />
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>
        <motion.p
          className="text-center text-gray-400 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          © FusionPay 2024. All Rights Reserved
        </motion.p>
      </div>
    </footer>
  );
}