import React from 'react';
import { FaStar } from "react-icons/fa";

const ReviewCard = ({review}) => {
    console.log(review);
    
    // const {UserName, UserPhoto, companyName, email, review, serviceId, serviceTitle, _id} = review || {};

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <img className='h-28 w-28 rounded-xl' src={review.UserPhoto} alt="" />
                <h2 className="text-xl">Name: {review.UserName}</h2>
                <h2 className="card-title">Service: {review.serviceTitle}</h2>
                <h2 className="">Company Name: {review.companyName}</h2>
               <div className='flex justify-start items-center gap-1'>
               {
                    Array(review?.rate).fill(null).map((_,index)=><FaStar key={index} fill="gold" />)
                }
               </div>
                
                <p>Review: {review.review}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-yellow-400">Update</button>
                    <button className="btn bg-yellow-400">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;