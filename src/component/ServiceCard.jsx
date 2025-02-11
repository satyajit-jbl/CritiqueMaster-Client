import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  const {
    category,
    companyName,
    description,
    price,
    serviceImage,
    serviceTitle,
    _id,
  } = service || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300 mx-auto mt-6 w-full max-w-sm"
    >
      <div className="h-56">
        <motion.img
          className="object-cover w-full h-full rounded-t-lg"
          src={serviceImage}
          alt={serviceTitle}
          whileHover={{scale: 1.1}}
          transition={{duration: 0.3, ease:"easeOut"}}
        />
      </div>
      <div className="p-4 flex flex-col h-56 justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800 truncate">{serviceTitle}</h2>
          <h3 className="text-sm font-light text-gray-600">{companyName}</h3>
          <p className="text-xs text-gray-500 mt-1">Type: {category}</p>
          <p className="text-lg font-semibold text-green-600 mt-1">Price: ${price}</p>
          <p className="text-sm text-gray-700 mt-2">
            Details: {description.length > 40 ? `${description.substring(0, 40)}...` : description}
          </p>
        </div>
        <div className="mt-4 flex justify-end">
          <Link to={`/details/${_id}`}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white text-sm font-medium py-2 px-4 rounded-lg shadow hover:bg-hover transition-all duration-300"
            >
              See Details
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
