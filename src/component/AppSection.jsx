import React from "react";

const AppSection = () => {
  return (
    <div className="bg-yellow-400 relative flex flex-col md:flex-row items-center justify-between px-6 py-16">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2 space-y-4">
        <img
          src="path/to/logo.png"
          alt="The Service Buzz Logo"
          className="w-24 mx-auto md:mx-0"
        />
        <h2 className="text-3xl font-bold text-black">GET THE APP</h2>
        <p className="text-gray-800">
          Download the App and manage your services on the go 
          
        </p>
        <a
          href="https://play.google.com" // Replace with the actual Google Play link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4"
        >
          <img
            src="path/to/google-play-button.png"
            alt="Google Play Button"
            className="w-40 mx-auto md:mx-0"
          />
        </a>
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2">
        {/* Mockup Wrapper */}
        <div className="absolute md:relative md:-right-12 lg:-right-16 transform translate-y-8 md:translate-y-24">
          <div className="bg-black w-64 h-[480px] rounded-xl p-4 relative">
            {/* Service Categories */}
            <div className="grid grid-cols-2 gap-4">
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
                  className="bg-yellow-400 flex flex-col items-center justify-center p-4 rounded-lg"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <p className="text-black mt-2 font-semibold">{service.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
