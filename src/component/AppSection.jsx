import React from "react";
import { FaHome, FaKickstarter, FaLaptop, FaMobileAlt, FaSnowflake, FaWarehouse } from "react-icons/fa";
import { GooglePlayButton } from "react-mobile-app-button";
import logo from "../assets/logo.png"

const AppSection = () => {
  return (
    <div className="bg-primary  relative flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-20 py-10 sm:py-16">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-4 lg:ml-20">
        <img
          src={logo}
          alt="website Logo"
          className="w-20 sm:w-24 mx-auto md:mx-0"
        />
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-whiteContr">
          GET THE APP
        </h2>
        <p className="text-whiteContr text-sm sm:text-base lg:text-lg">
          Download the App and manage your services on the go
        </p>

        {/* <div className="mt-4">
          <GooglePlayButton
            url="https://play.google.com/store/apps/details?id=host"
            theme={"light"}
            className={"custom-style"}
          />
        </div> */}
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2 mt-10 md:mt-0">
        {/* Mockup Wrapper */}
        {/* <div className="relative flex justify-center md:absolute md:relative md:-right-12 lg:-right-16 transform translate-y-4 sm:translate-y-8 md:translate-y-16"> */}
        <div className="relative lg:absolute flex justify-center  md:-right-12 lg:right-20 transform translate-y-4 sm:translate-y-8 md:translate-y-16 lg:-translate-y-56">
          <div className="bg-[#111827] w-56 sm:w-64 h-[400px] sm:h-[480px] rounded-xl p-4 relative">
            {/* Service Categories */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {[
                
                { icon: <FaMobileAlt />, label: "Mobile" },
                { icon: <FaLaptop />, label: "Computer" },
                { icon: <FaSnowflake />, label: "AC" },
                { icon: <FaKickstarter />, label: "Refrigerator" },
                { icon: <FaWarehouse />, label: "Washing Machine" },
                { icon: <FaHome />, label: "Home Appliances" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-secondary flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg"
                >
                  <span className="text-2xl sm:text-3xl">{service.icon}</span>
                  <p className="text-black mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base font-semibold">
                    {service.label}
                  </p>
                </div>
              ))}
            </div>
            {/* Button */}
            <div className="mt-6 flex justify-center">
              <button className="bg-gray-300 w-28 text-black font-semibold py-2 px-4 rounded-lg shadow hover:bg-hover transition mt-5">
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
