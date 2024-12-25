import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import axios from 'axios';
import ReviewCard from '../../component/ReviewCard';

const Reviews = () => {
    const {user} = useContext(authContext)
    const [reviews, setReviews]= useState([]);
    useEffect(()=>{
        fetchAllReviews()
    },[user])
    const fetchAllReviews = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/reviews-list/${user?.email}`)
        setReviews(data)
    }
    console.log(reviews);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5'>
            {
                reviews.map(review=><ReviewCard key={review._id} review={review}></ReviewCard>)
            }
        </div>
    );
};

export default Reviews;