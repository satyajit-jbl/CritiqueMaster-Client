import React, { useContext } from 'react';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import axios from 'axios';
import ReviewCard from '../../component/ReviewCard';
import { useQuery } from '@tanstack/react-query';

const Reviews = () => {
    const { user } = useContext(authContext);

    // Always call useQuery, and return loading if user is not available yet.
    const { data: reviews, isLoading, isError, error } = useQuery({
        queryKey: ['userReviews', user?.email], // Query key includes user email
        queryFn: fetchAllReviews,
        // enabled: !!user, // only fetch when user exists
    });

    async function fetchAllReviews() {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/reviews-list/${user?.email}`,
            { withCredentials: true }
        );
        return response.data;
    }

    if (isLoading) {
        return (
            <p className="text-5xl text-center font-bold text-green-400">
                <span className="loading loading-infinity loading-xl"></span>
            </p>
        );
    }

    if (isError) {
        return <p className="text-5xl text-center font-bold text-red-500">{error.message}</p>;
    }

    if (!reviews || reviews.length === 0) {
        return <p>No reviews found</p>;
    }

    return (
        <section>
            <div className="w-11/12 mx-auto text-center mt-5 mb-8 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 p-4 rounded-lg shadow-lg">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
                Unfiltered Opinions, Trusted Reviews
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-blue-900 mt-2">
                Real experiences from real users—helping you make informed decisions
                </p>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 mb-10 gap-10 py-10">
                {reviews.map((review) => (
                    <ReviewCard key={review._id} reviewData={review} />
                ))}
            </div>
        </section>
    );
};

export default Reviews;
