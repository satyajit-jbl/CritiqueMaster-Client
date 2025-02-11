import React, { useContext, useState } from "react";
import { authContext } from "../../component/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AddService = () => {
  const { user } = useContext(authContext);
  const navigate = useNavigate();
  const email = user?.email;
  const UserName = user?.displayName;
  const ProfileImage = user?.photoURL;

  const [formData, setFormData] = useState({
    serviceImage: "",
    serviceTitle: "",
    companyName: "",
    website: "",
    description: "",
    category: "",
    price: 0,
    email: "",
    ReviewCount: 0,
  });

  const addedDate = new Date().toLocaleDateString();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      addedDate,
      email,
      UserName,
      ProfileImage,
      [name]: name === "price" ? parseInt(value) || 0 : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-service`,
        formData
      );
      toast.success("Service added successfully!");
      navigate("/my-services");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
     
      <div className="text-center mb-8 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-4 rounded-lg shadow-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
        Add Your Service
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-blue-900 mt-2">
        Expand your business by listing your service with ease.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="serviceImage" className="block text-gray-700 font-medium">
              Service Image URL
            </label>
            <input
              type="text"
              id="serviceImage"
              name="serviceImage"
              value={formData.serviceImage}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div>
            <label htmlFor="serviceTitle" className="block text-gray-700 font-medium">
              Service Title
            </label>
            <input
              type="text"
              id="serviceTitle"
              name="serviceTitle"
              value={formData.serviceTitle}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter service title"
              required
            />
          </div>

          <div>
            <label htmlFor="companyName" className="block text-gray-700 font-medium">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter company name"
              required
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-gray-700 font-medium">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter website URL"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Finance">Finance</option>
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter service price"
              min={0}
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="description" className="block text-gray-700 font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter service description"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-gray-700 font-medium">Added Date</label>
            <p className="mt-1 text-gray-500">{addedDate}</p>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">User Email</label>
            <p className="mt-1 text-gray-500">{user?.email}</p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-500 text-white text-sm font-medium py-2 w-full mt-6 px-4 rounded-lg shadow hover:bg-blue-600 transition-all duration-300"
        >
          Add Service
        </motion.button>
      </form>
    </div>
  );
};

export default AddService;
