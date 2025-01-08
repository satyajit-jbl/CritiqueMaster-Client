import React from "react";
import { motion } from "framer-motion"; 
import logoCompany1 from '../../assets/Partner (1).png'
import logoCompany2 from '../../assets/Partner (2).png'
import logoCompany3 from '../../assets/Partner (3).png'

const partners = [
  {
    name: "Bright Minds Alliance",
    logo: "https://i.ibb.co/WnrF2qs/istockphoto-1413766112-612x612.jpg",
    icon: "https://i.ibb.co.com/9bbhpHK/Partner-2.png", // New field for icon
    description: "A high-speed service provider dedicated to IT support, technical maintenance, and software development, ensuring businesses stay connected and operational."
  },
  {
    name: "Duo Ventures",
    logo: "https://i.ibb.co/k3Jkk3N/istockphoto-1310814041-612x612.jpg",
    icon: "https://i.ibb.co.com/LPwVgrF/Partner-1.png", // New field for icon
    description: "Specializes in healthcare and eldercare services, providing compassionate and reliable care through certified professionals."
  },
  {
    name: "Artistry Alliance",
    logo: "https://i.ibb.co/bX00ghP/istockphoto-1358280405-612x612.jpg",
    icon: "https://i.ibb.co.com/5FsKbD7/Partner-3.png", // New field for icon
    description: "A comprehensive service platform specializing in professional home repair, cleaning, and maintenance solutions with a focus on eco-friendly practices."
  },
  // Add more partners here as needed
];

const Partners2 = () => {
  return (
    <motion.section
      className="bg-yellow-50 py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-8 text-yellow-600"
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
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-yellow-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 2 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-52 h-52 object-contain mx-auto mb-4"
              />
              <div className="flex items-center justify-center mb-2">
                <img
                  src={partner.icon}
                  alt={`${partner.name} icon`}
                  className="w-12 h-12 mr-2"
                />
                <h3 className="text-xl font-semibold text-yellow-600">{partner.name}</h3>
              </div>
              <p className="text-gray-600">{partner.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Partners2;
