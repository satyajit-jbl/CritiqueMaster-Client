import axios from "axios";
import { h1 } from "framer-motion/client";
import { useEffect, useState } from "react";
import ReviewCard from "../../component/ReviewCard";


const AllReviews = ({serviceId}) => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetchAllReviews()
    },[serviceId])
    const fetchAllReviews = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/all-reviews/${serviceId}`)
        setReviews(data)
    }
    // console.log(reviews);

    return (
        <div className="grid md:grid-cols-2 gap-10">
            {
                reviews.map(review1=> <ReviewCard key={review1._id} review={review1}></ReviewCard>)
            }
        </div>
    );
};

export default AllReviews;