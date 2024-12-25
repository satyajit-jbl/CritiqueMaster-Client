import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from "react-rating";

const ServiceDetails = () => {
  const { id } = useParams()
  const [service, setService] = useState({});

  useEffect(() => {
    fetchServiceData()
  }, [id])
  const fetchServiceData = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/service/${id}`)
    setService(data)
  }
  const { category,
    companyName,
    description,
    price,
    serviceImage,
    serviceTitle,
    website,
    _id } = service || {};

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Service Details */}
      <div className="bg-white shadow rounded-lg p-6">
        <img
          src={serviceImage}
          alt={serviceTitle}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-semibold mb-4">{serviceTitle}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
      </div>

      {/* Reviews Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <p className="text-gray-600 mb-4">
          Total Reviews: reviews.length
        </p>

        {/* Review Form */}
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Add a Review</h3>
          <textarea
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Write your review here..."
            // value={newReview.comment}
            // onChange={(e) =>
            //   setNewReview({ ...newReview, comment: e.target.value })
            // }
          ></textarea>
          <div className="flex items-center mb-4">
            <span className="mr-2">Your Rating:</span>
            <Rating
              // initialRating={newReview.rating}
              // onChange={(rating) => setNewReview({ ...newReview, rating })}
              emptySymbol="text-gray-400 fa fa-star-o"
              fullSymbol="text-yellow-500 fa fa-star"
              className="text-xl"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            // onClick={handleAddReview}
          >
            Add Review
          </button>
        </div>

        {/* Reviews List */}
        {/* {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-50 border rounded-lg p-4 mb-4"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-semibold">{review.user}</h4>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <Rating
                initialRating={review.rating}
                readonly
                emptySymbol="text-gray-400 fa fa-star-o"
                fullSymbol="text-yellow-500 fa fa-star"
                className="text-sm"
              />
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ServiceDetails;