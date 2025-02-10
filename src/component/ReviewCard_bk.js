import axios from 'axios';
import React, { useContext, useState } from 'react';
import { FaStar } from "react-icons/fa";
import useReviews from '../Hooks/useReviews';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authContext } from './AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import useTest from '../Hooks/useTest';

const ReviewCard = ({reviewData}) => {
    const {user} = useContext(authContext);
    const [updateModal, setUpdateModal] = useState(false);
    const {handleUpdateReview, handleDEleteReview} = useReviews();
    const clientQuery = useQueryClient();
    const myInfo = useTest();
    const [inputData, setInputData] = useState({
      rate: 1, 
      review: ""
    });
    const {UserName, userPhoto, companyName, email, review, serviceId, serviceTitle, _id, rate} = reviewData;

    const deleteReviewMutaion = useMutation({
      mutationKey: ['reviews'],
      mutationFn: (id) => handleDEleteReview(id),
      onSuccess: () => {
        clientQuery.invalidateQueries(['reviews']);
        toast.success('Reviews deleted successfully!');
      },
      onError: () => {
        alert('Error in deleting review');
      }
    });

    const newData = {
      UserName, UserPhoto, companyName, email, serviceId, serviceTitle, _id
    };

    const finalData = { ...newData, ...inputData };

    const handleUpdate = (e) => {
      e.preventDefault();
      updateReviewMutation.mutate(finalData);
    };

    const updateReviewMutation = useMutation({
      mutationKey: ['reviews'],
      mutationFn: (reviewData) => handleUpdateReview(reviewData),
      onSuccess: () => {
        clientQuery.invalidateQueries('reviews');
        alert('Reviews Updated successfully');
      },
      onError: () => {
        alert('Error in updating review');
      }
    });

    const getCurrentDate = () => {
      const date = new Date();
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };

    const handleRating = (rate) => {
      setInputData({...inputData, rate});
    };

    return (
      <section className='w-full h-full'>
        <div className="card w-full max-w-sm bg-base-100 shadow-lg">
          <div className="card-body flex flex-col">
            <img className='h-28 w-28 rounded-xl mx-auto' src={userPhoto} alt="" />
            <h2 className="text-xl font-bold text-center">{UserName}</h2>
            <h3 className="text-lg font-semibold text-center">{serviceTitle}</h3>
            <h4 className="text-md text-center">{companyName}</h4>

            <div className='flex justify-center items-center gap-1'>
              {Array(rate).fill(null).map((_, index) => (
                <FaStar key={index} fill="gold" />
              ))}
            </div>

            <p className="text-center mt-2">Review: {review}</p>
            <p className="text-center mt-2">Date: {getCurrentDate()}</p>

            <div className="card-actions justify-center gap-2 mt-4">
              <button onClick={() => setUpdateModal(true)} className="btn bg-[#2563EB] w-full sm:w-auto">Update</button>
              <button onClick={() => deleteReviewMutaion.mutate(_id)} className="btn bg-[#2563EB] w-full sm:w-auto">Delete</button>
            </div>
          </div>
        </div>

        {updateModal && (
          <section className='fixed top-0 bottom-0 left-0 right-0 bg-black/45 z-50 flex justify-center items-center'>
            <form onSubmit={handleUpdate} className="bg-white w-11/12 md:w-3/4 lg:w-1/2 shadow-lg p-6 relative rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Update Review</h3>
              <textarea
                onChange={(e) => setInputData({ ...inputData, review: e.target.value })}
                className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                name='review'
                placeholder="Write your review here..."
                defaultValue={review}
                required
              ></textarea>

              <div className="flex items-center mb-4">
                <span className="mr-2">Your Rating:</span>
                <div className="flex flex-row space-x-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const starValue = index + 1;
                    return (
                      <span
                        key={index}
                        className={`cursor-pointer text-2xl ${starValue <= rate ? 'text-yellow-500' : 'text-gray-400'}`}
                        onClick={() => handleRating(starValue)}
                      >
                        ★
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 text-center">
                <img referrerPolicy='no-referrer' className='h-20 w-20 rounded-full mx-auto' src={user?.photoURL} alt="" />
                <h2>Name: {user?.displayName}</h2>
                <h3>Email: {user?.email}</h3>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition mt-4 w-full"
              >
                Submit Review
              </button>

              <span onClick={() => setUpdateModal(false)} className='absolute top-4 right-4 z-20 btn btn-ghost text-xl'>
                &times; Close
              </span>
            </form>
          </section>
        )}
      </section>
    );
};

export default ReviewCard;
