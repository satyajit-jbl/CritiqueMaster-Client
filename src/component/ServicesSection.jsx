import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaLifeRing, FaSearch, FaCalendarAlt, FaRegFileAlt, FaCog } from 'react-icons/fa';

function ServicesSection() {
  return (
    <div>
      {/* Banner Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Black Section */}
        <div className="bg-black text-yellow-400 flex-1 py-10 px-8 flex items-center justify-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold uppercase text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            Largest Home Service Provider
          </motion.h1>
        </div>

        {/* Right Yellow Section */}
        <div className="bg-yellow-400 text-black flex-1 py-10 px-8 flex flex-col justify-center space-y-6">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaLifeRing className="h-8 w-8" />
            <span className="text-xl font-semibold">24/7 Online Support</span>
          </motion.div>
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaPhoneAlt className="h-8 w-8" />
            <span className="text-xl font-semibold">Call us toll free: +91 9409 957 957</span>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold text-yellow-400 uppercase"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            How it Works
          </motion.h2>
          <p className="text-gray-700 text-lg mt-2">You're in the right place!</p>

          {/* Steps */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Step 1 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <FaSearch className="h-12 w-12 text-yellow-400" />
              <h3 className="text-lg font-semibold mt-4">Browse Services</h3>
              <p className="text-gray-600 text-sm text-center mt-2">
                Select types of services you want and click on the button.
              </p>
            </motion.div>
            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: .5 }}
            >
              <FaCalendarAlt className="h-12 w-12 text-yellow-400" />
              <h3 className="text-lg font-semibold mt-4">Schedule Service</h3>
              <p className="text-gray-600 text-sm text-center mt-2">
                Login and Register with your details.
              </p>
            </motion.div>
            {/* Step 3 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FaRegFileAlt className="h-12 w-12 text-yellow-400" />
              <h3 className="text-lg font-semibold mt-4">Book Service</h3>
              <p className="text-gray-600 text-sm text-center mt-2">
                Fill the form to get services easily.
              </p>
            </motion.div>
            {/* Step 4 */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FaCog className="h-12 w-12 text-yellow-400" />
              <h3 className="text-lg font-semibold mt-4">Resolve Issues</h3>
              <p className="text-gray-600 text-sm text-center mt-2">
                Our team members will contact you and solve your problems.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
