import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import AllReviews from './AllReviews';
import useReviews from '../../Hooks/useReviews';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(authContext);
  const clientQuery = useQueryClient();
  const { addReview } = useReviews();
  const { id } = useParams();

  const [service, setService] = useState({});
  const [rating, setRating] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServiceData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`);
        setService(data);
      } catch (error) {
        console.error(error);
        toast.error('Failed to load service details.');
      } finally {
        setLoading(false);
      }
    };

    fetchServiceData();
  }, [id]);

  const { category, companyName, description, price, serviceImage, serviceTitle, website, _id } = service || {};

  const addReviewMutation = useMutation({
    mutationKey: ['reviews'],
    mutationFn: addReview,
    onSuccess: () => {
      clientQuery.invalidateQueries('reviews');
      Swal.fire({
        title: 'Thanks!',
        text: 'Review added successfully!',
        icon: 'success',
      });
    },
    onError: () => {
      Swal.fire({
        title: 'Error!',
        text: 'There was an issue adding your review.',
        icon: 'error',
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const serviceId = _id;
    const email = user?.email;
    const UserName = user?.displayName;
    const UserPhoto = user?.photoURL;
    const addedDate = new Date().toLocaleDateString();

    const reviewData = { serviceTitle, companyName, review, serviceId, email, UserName, UserPhoto, rate: rating, addedDate };
    addReviewMutation.mutate(reviewData);
  };

  const handleRating = (starValue) => {
    setRating(starValue); // Set the clicked star as the rating
  };

  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Service Details Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start">
        {/* Left side: Image */}
        <div className="md:w-1/2 w-full mb-6 md:mb-0">
          <img
            src={serviceImage}
            alt={serviceTitle}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <p className="text-md text-gray-800"><strong>Company:</strong> {companyName}</p>
          <p className="text-md text-blue-600"><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
        </div>

        {/* Right side: Description and Details */}
        <div className="md:w-1/2 w-full md:pl-6 flex flex-col justify-start">
          {/* <h1 className="text-2xl font-semibold text-gray-800 mb-4">{serviceTitle}</h1> */}
          <h1
            className="text-2xl font-semibold text-gray-800 mb-4 relative inline-block 
  bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent 
  bg-clip-text animate-glow"
          >
            {serviceTitle}
          </h1>


          {/* <h1 
  className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 
  w-full text-center transition-all duration-300 animate-fadeIn"
>
  {serviceTitle}
</h1> */}
          <p className="text-lg text-gray-600 mb-6">{description}</p>
          <div className="flex flex-col space-y-2 mb-6">
            <p className="text-md text-gray-800"><strong>Category:</strong> {category}</p>
            {/* <p className="text-md text-gray-800"><strong>Company:</strong> {companyName}</p> */}
            <p className="text-md text-gray-800"><strong>Price:</strong> ${price}</p>
            {/* <p className="text-md text-blue-600"><strong>Website:</strong> <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p> */}
          </div>
        </div>
      </div>

      {/* Review Form */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Add a Review</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Share your thoughts</h3>
          <textarea
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            name="review"
            placeholder="Write your review here..."
            required
          ></textarea>

          {/* Custom Star Rating */}
          <div className="flex items-center mb-4">
            <span className="mr-2">Your Rating:</span>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const starValue = index + 1;
                return (
                  <span
                    key={index}
                    className={`cursor-pointer text-2xl ${starValue <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
                    onClick={() => handleRating(starValue)}
                  >
                    ★
                  </span>
                );
              })}
            </div>
            <span className="ml-2 text-gray-600">{rating} / 5</span>
          </div>

          <div className="flex items-center mb-4 space-x-4">
            <img referrerPolicy="no-referrer" className="h-12 w-12 rounded-full" src={user?.photoURL} alt="User" />
            <div>
              <p className="text-lg">{user?.displayName}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          {/* <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition mt-3">
            Submit Review
          </button> */}
          <button
            type="submit"
            className="relative px-6 py-3 rounded-lg text-white font-semibold 
             bg-gradient-to-r from-yellow-400 to-orange-500 
             hover:from-orange-500 hover:to-yellow-400 
             transition-all duration-300 ease-in-out 
             shadow-lg hover:shadow-yellow-500/50 
             border-2 border-transparent hover:border-yellow-400 
             before:absolute before:inset-0 before:animate-glow-border"
          >
            Submit Review
          </button>
        </form>

        {/* Display All Reviews */}
        <AllReviews serviceId={id} />
      </div>
    </div>
  );
};

export default ServiceDetails;
