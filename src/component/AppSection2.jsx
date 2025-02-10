import React from "react";
import { GooglePlayButton } from "react-mobile-app-button";
import { motion } from "framer-motion"; // Importing framer-motion

const AppSection2 = () => {
  // Variants for animations
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <div className="bg-yellow-400 relative flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-10 sm:py-16">
      {/* Left Section */}
      <motion.div
        className="text-center md:text-left md:w-1/2 space-y-4 lg:ml-20"
        variants={fadeIn} // Apply fade-in animation
        initial="hidden"
        animate="visible"
      >
        <img
          src="path/to/logo.png"
          alt="The Service Buzz Logo"
          className="w-20 sm:w-24 mx-auto md:mx-0"
        />
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black"
          variants={slideUp} // Apply slide-up animation
          initial="hidden"
          animate="visible"
        >
          GET THE APP
        </motion.h2>
        <motion.p
          className="text-gray-800 text-sm sm:text-base lg:text-lg"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          Download the App and manage your services on the go
        </motion.p>

        <div className="mt-4">
          <GooglePlayButton
            url="https://play.google.com/store/apps/details?id=host"
            theme={"light"}
            className={"custom-style"}
          />
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="relative md:w-1/2 mt-10 md:mt-0">
        {/* Mockup Wrapper */}
        <motion.div
          className="relative flex justify-center md:absolute md:relative md:-right-12 lg:-right-16 transform translate-y-4 sm:translate-y-8 md:translate-y-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-black w-56 sm:w-64 h-[400px] sm:h-[480px] rounded-xl p-4 relative">
            {/* Service Categories */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                { icon: "📱", label: "Mobile" },
                { icon: "💻", label: "Computer" },
                { icon: "❄️", label: "AC" },
                { icon: "🧊", label: "Refrigerator" },
                { icon: "🌀", label: "Washing Machine" },
                { icon: "🏠", label: "Home Appliances" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-yellow-400 flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg"
                >
                  <span className="text-2xl sm:text-3xl">{service.icon}</span>
                  <p className="text-black mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base font-semibold">
                    {service.label}
                  </p>
                </div>
              ))}
            </div>
            {/* Button */}
            <motion.div
              className="mt-6 flex justify-center"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <button className="bg-[#2563EB] text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#1D4ED8] transition">
                Explore More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppSection2;
