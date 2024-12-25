import React from 'react';

const ReviewCard = ({review}) => {
    // const {serviceTitle, companyName, review, serviceId, email, UserName, UserPhoto}= review;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <img className='h-28 w-28 rounded-xl' src={review.UserPhoto} alt="" />
                <h2 className="text-xl">Name: {review.UserName}</h2>
                <h2 className="card-title">Service: {review.serviceTitle}</h2>
                <h2 className="">Company Name: {review.companyName}</h2>
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