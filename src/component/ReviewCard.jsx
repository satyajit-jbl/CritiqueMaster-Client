import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaStar } from "react-icons/fa";
import useReviews from '../Hooks/useReviews';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authContext } from './AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useTest from '../Hooks/useTest';

const ReviewCard = ({ reviewData }) => {
  const { user } = useContext(authContext);
  const [updateModal, setUpdateModal] = useState(false);
  const { handleUpdateReview, handleDEleteReview } = useReviews();
  const clientQuery = useQueryClient();
  // const myInfo = useTest();
  const [inputData, setInputData] = useState({
    rate: reviewData.rate || 0,
    review: reviewData.review || ""
  });

  const { UserName, UserPhoto, companyName, email, serviceId, serviceTitle, _id, rate } = reviewData;
  // console.log( reviewData.UserPhoto);

  const deleteReviewMutation = useMutation({
    mutationKey: ['reviews'],
    mutationFn: (id) => handleDEleteReview(id),
    onSuccess: () => {
      clientQuery.invalidateQueries(['reviews']);
      toast.success('Review deleted successfully!');
    },
    onError: () => {
      toast.error('Error deleting review');
    }
  });

  const updateReviewMutation = useMutation({
    mutationKey: ['reviews'],
    mutationFn: (data) => handleUpdateReview(data),
    onSuccess: () => {
      clientQuery.invalidateQueries(['reviews']);
      setUpdateModal(false);
      toast.success('Review updated successfully!');
    },
    onError: () => {
      toast.error('Error updating review');
    }
  });

  const handleRating = (starValue) => {
    setInputData({ ...inputData, rate: starValue });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const finalData = { ...reviewData, ...inputData };
    updateReviewMutation.mutate(finalData);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <section className="w-full h-full">
      <div className="w-full h-full card bg-base-100 shadow-xl">
        <div className="card-body">
          <img className="h-28 w-28 rounded-full" src={UserPhoto} alt="User" />
          <h2 className="text-xl">Name: {UserName}</h2>
          {/* <h2 className="card-title">{serviceTitle}</h2> */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4 relative inline-block 
  bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent 
  bg-clip-text animate-glow">{serviceTitle}</h2>
          <h2>Company Name: {companyName}</h2>

          {/* Rating Display */}
          <div className="flex justify-start items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar key={index} fill={index < rate ? "gold" : "lightgray"} />
            ))}
          </div>

          <p>Review: {reviewData.review}</p>
          <p>Date: {getCurrentDate()}</p>
          <div className="card-actions justify-end">
            <button onClick={() => setUpdateModal(true)} className="btn text-whiteContr bg-primary">Update</button>
            <button onClick={() => deleteReviewMutation.mutate(_id)} className="btn text-whiteContr bg-primary">Delete</button>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      {updateModal && (
        <section
          onClick={(e) => e.target === e.currentTarget && setUpdateModal(false)}
          className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 px-4"
        >
          <form
            onSubmit={handleUpdate}
            className="bg-white w-full max-w-lg h-auto md:max-h-[80vh] shadow-xl rounded-lg p-6 relative overflow-y-auto"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Update Review
            </h3>

            {/* Review Input */}
            <textarea
              onChange={(e) =>
                setInputData({ ...inputData, review: e.target.value })
              }
              className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              name="review"
              placeholder="Write your review here..."
              defaultValue={reviewData.review}
              required
            ></textarea>

            {/* Rating Selection */}
            <div className="flex flex-col items-center mb-4">
              <span className="mb-2 text-gray-700">Your Rating:</span>
              <div className="flex space-x-2">
                {Array.from({ length: 5 }).map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <span
                      key={index}
                      className={`cursor-pointer text-2xl ${starValue <= inputData.rate
                        ? "text-yellow-500"
                        : "text-gray-400"
                        }`}
                      onClick={() => handleRating(starValue)}
                    >
                      ★
                    </span>
                  );
                })}
              </div>
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-3 border-t pt-4">
              <img
                referrerPolicy="no-referrer"
                className="h-16 w-16 rounded-full border"
                src={user?.photoURL}
                alt="Current User"
              />
              <div>
                <h2 className="font-medium text-gray-700">Name: {user?.displayName}</h2>
                <h2 className="text-gray-600 text-sm">Email: {user?.email}</h2>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center mt-6">
              {/* <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full"
              >
                Submit Review
              </button> */}
              <button
                type="submit"
                className="relative px-6 py-3 rounded-lg text-white font-semibold 
             bg-gradient-to-r from-blue-400 to-blue-500 
             hover:from-blue-500 hover:to-yellow-400 
             transition-all duration-300 ease-in-out 
             shadow-lg hover:shadow-blue-500/50 
             border-2 border-transparent hover:border-blue-400 
             before:absolute before:inset-0 before:animate-glow-border"
              >
                Update Review
              </button>
            </div>

            {/* Close Button */}
            <span
              onClick={() => setUpdateModal(false)}
              className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700 text-xl"
            >
              ✖
            </span>
          </form>
        </section>
      )}

    </section>
  );
};

export default ReviewCard;
