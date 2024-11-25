import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Add animation variants for the menu
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      }
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const menuItemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.3 }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="FusionPay Logo" className="w-auto h-8" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'About Us', 'Contact Us'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="relative text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-purple-600 scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100" />
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-white hover:text-purple-600 hover:border hover:border-purple-600 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 hover:bg-purple-50/50 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                  className="absolute h-0.5 w-6 bg-gray-600 transform transition-transform duration-300"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute h-0.5 w-6 bg-gray-600 transition-opacity duration-300"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                  className="absolute h-0.5 w-6 bg-gray-600 transform transition-transform duration-300"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl overflow-hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {['Home', 'Services', 'About Us', 'Contact Us'].map((item) => (
            <motion.div key={item} variants={menuItemVariants}>
              <Link
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all"
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={menuItemVariants} className="pt-4 space-y-3">
            <Link
              to="/login"
              className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-3 rounded-xl text-base font-medium bg-purple-600 text-white hover:bg-purple-700 transition-all text-center"
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
}