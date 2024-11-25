import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const benefits = [
  {
    icon: "📱",
    title: "User-Friendly Interface",
    subtitle: "Interface",
    description: "Our platform is designed with an intuitive interface, featuring a clean and seamless experience that makes managing your finances straightforward.",
    subtext: "Quick access to key features and a customized dashboard for your convenience."
  },
  {
    icon: "🔧",
    title: "Comprehensive Financial Tools",
    subtitle: "Tools",
    description: "From budgeting to investment and mainstream management, Fusion Pay provides all the tools you need.",
    subtext: "Our advanced budgeting and planning features help you stay on top of your financial future."
  },
  {
    icon: "🛡️",
    title: "Top Security",
    subtitle: "And Support",
    description: "Protection and security of your information is our top priority with cutting-edge security technologies.",
    subtext: "Our 24/7 customer support and educational resources ensure you have the help and information you need."
  }
];

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-100px",
    once: false
  });

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-black">Why Choose</span> <span className="text-purple-700">Fusion Pay</span>
          </h2>
          <p className="text-gray-600">
            Discover The Benefits That Set Us Apart And Make Financial Management Easy And Effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              style={{
                width: '393px',
                height: '579px',
                background: 'linear-gradient(15deg, #4B008226 15%, #8B008B1A 10%, #D5BDF536 21%)'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-1 text-black">
                  {benefit.title.split(' ').map((word, i) => (
                    <span key={i}>
                      {i > 0 && ' '}
                      {word}
                      {word === benefit.subtitle && (
                        <span className="text-purple-700"> {benefit.subtitle}</span>
                      )}
                    </span>
                  ))}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <p className="text-sm text-gray-500">{benefit.subtext}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}