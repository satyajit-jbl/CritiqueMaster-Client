import React, { useContext, useState } from "react";
import { authContext } from "../../component/AuthProvider/AuthProvider";

const AddService = () => {
    const {user} = useContext(authContext)
    const {email} = user;
  const [formData, setFormData] = useState({
    serviceImage: "",
    serviceTitle: "",
    companyName: "",
    website: "",
    description: "",
    category: "",
    price: "",
  });

  const addedDate = new Date().toLocaleDateString(); // Format: MM/DD/YYYY

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, addedDate, email });
    // Add your API call or submit logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Add Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Image */}
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
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Service Title */}
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
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter service title"
              required
            />
          </div>

          {/* Company Name */}
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
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter company name"
              required
            />
          </div>

          {/* Website */}
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
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter website URL"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-gray-700 font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
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

          {/* Price */}
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
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter service price"
              min={0}
              required
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <label htmlFor="description" className="block text-gray-700 font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter service description"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Added Date */}
          <div>
            <label className="block text-gray-700 font-medium">Added Date</label>
            <p className="mt-1 text-gray-500">{addedDate}</p>
          </div>

          {/* User Email */}
          <div>
            <label className="block text-gray-700 font-medium">User Email</label>
            <p className="mt-1 text-gray-500">{email}</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 mt-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
