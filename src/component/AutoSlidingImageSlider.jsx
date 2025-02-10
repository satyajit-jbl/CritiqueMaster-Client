import React, { useState, useEffect } from "react";

const AutoSlidingImageSlider = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/27NLhxy5/fb7-V72-PX8-UND2u-KYI2-Zgo5-ZCu-BLXlo9scn4kpznp.jpg",
      title: "Home Services at you: Why it Matter?",
      description: "However, the ongoing demand for online services caters to the happiness of every individual.",
    },
    {
      image: "https://i.ibb.co.com/pvJBRVt7/360-F-897323719-K48nq-SLx9hm-ZNDc-DQ2-D9-Q2xvzh-ISd-Y3-Q.jpg",
      title: "How it works",
      description: "You’re in the right place!",
    },
    {
      image: "https://i.ibb.co.com/NdWt7xTz/depositphotos-194659646-stock-photo-five-stars-rating-businessman-touching.webp",
      title: "Customer Reviews",
      description: "Feedback provided by customers after availing a service. These reviews often include ratings, written comments",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide effect using useEffect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[500px] relative"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="px-12 absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-8">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p className="mt-2 text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 focus:outline-none"
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlidingImageSlider;
