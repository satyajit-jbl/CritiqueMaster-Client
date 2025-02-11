import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../component/AuthProvider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const UpdateService = () => {
  // Other entry data for update function start
  const { id } = useParams()
  const { user } = useContext(authContext)

  // Other entry data for update function end

  const navigate = useNavigate()
  // fetch activities from services start

  const [service, setService] = useState({});
  useEffect(() => {
    fetchServiceData()
  }, [id])
  const fetchServiceData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`)
    setService(data)
  }
  // console.log(service);

  // fetch activities from services end



  // console.log({user});
  const email = user?.email;
  const ReviewCount = service.ReviewCount;
  // console.log(email);
  // const {email, displayName} = {user};
  // console.log(user.email, displayName);

  const [formData, setFormData] = useState({});

  const addedDate = new Date().toLocaleDateString(); // Format: MM/DD/YYYY

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, addedDate, ReviewCount, email, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ ...formData, addedDate });
    try {
      // Add API call, send data to server
      const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/update-service/${id}`, formData)
      // console.log(data);
      //need to check , form reset not working
      // formData.reset()
      toast.success('Service Updated successfully!')
      navigate('/my-services')
    } catch (err) {
      // console.log(err);
      toast.error(err.message)
    }
  }
    ;


  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* <h1 className="text-2xl font-semibold text-gray-800 mb-6">Update Service</h1> */}
      <div className="text-center mb-8 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
          Update Service
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-blue-900 mt-2">
          Update your listing according to your Service Rules
        </p>
      </div>


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
              defaultValue={service.serviceImage}
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
              defaultValue={service.serviceTitle}
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
              defaultValue={service.companyName}
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
              defaultValue={service.website}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter website URL"
              required
            />
          </div>

          {/* Category */}
          {service.category && (
            <div>
              <label htmlFor="category" className="block text-gray-700 font-medium">
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={service.category}
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
          )}

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-gray-700 font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue={service.price}
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
            defaultValue={service.description}
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
            <p

              className="mt-1 text-gray-500">{addedDate}</p>
          </div>

          {/* User Email */}
          <div>
            <label className="block text-gray-700 font-medium">User Email</label>
            <p
              id="email"
              name="email"
              value={formData.email}
              className="mt-1 text-gray-500">{user?.email}</p>
            {/* <input
              type="email"
              id="email"
              name="email"
              defaultValue={user?.email}
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Enter image URL"
              required
            /> */}
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



export default UpdateService;