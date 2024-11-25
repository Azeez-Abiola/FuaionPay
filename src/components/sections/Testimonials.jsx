import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    rating: 5,
    title: "Amazing",
    comment: "Fusion Pay has transformed how I manage my business finances. The seamless transactions make handling payments and transfers easy.",
    name: "Racheal Brown",
    role: "Small Business Owner",
    avatar: "/person1.png"
  },
  {
    rating: 5,
    title: "Outstanding",
    comment: "As a freelancer, managing my finances is crucial. Fusion Pay's easy-to-use interface and budgeting tools make it stress-free.",
    name: "Darrell Stewart",
    role: "Freelance Designer",
    avatar: "/person2.png"
  },
  {
    rating: 5,
    title: "Fantastic",
    comment: "Fusion Pay is simply fantastic! Their app makes managing my money a breeze. I can pay bills, track my spending, and even invest—all from one place.",
    name: "Cameron Williamson",
    role: "Data Trainer",
    avatar: "/person3.png"
  },
  {
    rating: 5,
    title: "Great",
    comment: "Their customer service team is incredibly helpful, and the app is so easy to use. Since switching to Fusion Pay, I feel more in control of my finances.",
    name: "Dianne Russell",
    role: "Nursing Assistant",
    avatar: "/person4.png"
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "-100px",
    once: false
  });

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-purple-200 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-black">Client's Testimonial</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#E0CEF8B2] p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 text-black">{testimonial.title}</h3>
                <div className="flex text-purple-700 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.comment}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}