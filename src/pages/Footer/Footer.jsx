import React from 'react';
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-dark text-whiteContr py-1">
      <div className="container mx-auto px-6 md:px-12">
        {/* Website Logo/Name */}
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <div className='flex items-center'>
          <img src={logo} alt="" />
          <div className="text-3xl font-semibold">CritiqueMaster</div>
          </div>
          <p className="text-sm mt-2 md:mt-0">Your trusted platform for authentic service reviews.</p>
        </div>

        {/* Description */}
        <div className="mb-2 text-md">
          <p>ServiceReview is your go-to platform for sharing and reading honest reviews of various services. We aim to help users make informed decisions based on real experiences from others.</p>
        </div>

        {/* Useful Links */}
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-6">
          <div className="flex flex-col">
            <h4 className="font-semibold mb-2">Useful Links</h4>
            <ul className='flex gap-10'>
              <li><a href="/about" className="text-#FFFFFF hover:text-secondary">About Us</a></li>
              <li><a href="/contact" className="text-#FFFFFF hover:text-secondary">Contact</a></li>
              <li><a href="/privacy" className="text-#FFFFFF hover:text-secondary">Privacy Policy</a></li>
              <li><a href="/terms" className="text-#FFFFFF hover:text-secondary">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>© 2025 ServiceReview. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
