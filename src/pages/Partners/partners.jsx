import React from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion
import logo1 from '../../assets/logo.png'

const partners = [
  {
    name: "Bright Minds Alliance",
    logo: "../../assets/Partner (1).png",
    description: "A high-speed service provider dedicated to IT support, technical maintenance, and software development, ensuring businesses stay connected and operational.."
  },
  {
    name: "Duo Ventures",
    logo: "../../assets/Partner (2).png",
    description: "Specializes in healthcare and eldercare services, providing compassionate and reliable care through certified professionals."
  },
  {
    name: "Artistry Alliance",
    logo: "../../assets/Partner (3).png",
    description: "A comprehensive service platform specializing in professional home repair, cleaning, and maintenance solutions with a focus on eco-friendly practices."
  },
  // Add more partners here as needed
];

const Partners = () => {
  return (
    <motion.section
      className="bg-yellow-50 py-16 px-4" // Changed to yellow background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-8 text-yellow-600" // Yellow tone for the heading
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Partners
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-yellow-100" // Hover effect with yellow tone
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-32 h-32 object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-yellow-600">{partner.name}</h3> {/* Yellow text for partner name */}
              <p className="text-gray-600">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Partners;
