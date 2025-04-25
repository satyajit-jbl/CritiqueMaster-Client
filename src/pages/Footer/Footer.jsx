import React from 'react';
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-1">
      <div className="container mx-auto px-6 md:px-12">
        {/* Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex items-center">
            <img src={logo} alt="CritiqueMaster logo" className="w-10 h-10 mr-2" />
            <div className="text-3xl font-semibold">CritiqueMaster</div>
          </div>
          <p className="text-sm mt-2 md:mt-0">Your trusted platform for authentic service reviews.</p>
        </div>

        {/* Main Content Section: Description + Newsletter side by side on desktop */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
          {/* Description */}
          <div className="flex-1 mb-4 md:mb-0">
            <p className="text-md">
              ServiceReview is your go-to platform for sharing and reading honest reviews of various services. 
              We aim to help users make informed decisions based on real experiences from others.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-800 py-6 px-4 rounded-md w-full md:w-1/2">
            <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
            <p className="text-sm mb-4">Get the latest reviews and updates delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-dark w-full sm:w-auto flex-1"
                required
              />
              <button
                type="submit"
                className="bg-secondary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-6">
          <div className="flex flex-col">
            <h4 className="font-semibold mb-2">Useful Links</h4>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-10">
              <li><a href="/about" className="text-white hover:text-secondary">About Us</a></li>
              <li><a href="/contact" className="text-white hover:text-secondary">Contact</a></li>
              <li><a href="/privacy" className="text-white hover:text-secondary">Privacy Policy</a></li>
              <li><a href="/terms" className="text-white hover:text-secondary">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>© 2025 ServiceReview. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
