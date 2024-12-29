import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';
import { authContext } from '../../component/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import AllReviews from './AllReviews';


const ServiceDetails = () => {
  const navigate = useNavigate()
  const { user } = useContext(authContext);
  console.log({ user });
  const { id } = useParams()
  const [service, setService] = useState({});
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(1);


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
    ReviewCount,
    website,
    _id } = service || {};

  useEffect(() => {
    fetchAllReviews()
  }, [id])
  const fetchAllReviews = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-reviews/${id}`)
    await setReviews(data)
  }

  

  //Handle form submit
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target
    const review = form.review.value
    const serviceId = _id
    const email = user?.email
    const UserName = user?.displayName
    const UserPhoto = user?.photoURL
    let rate = rating

    console.log(review, email, UserName, UserPhoto);
    console.table({ review, email, UserName, UserPhoto });
    const reviewData = { serviceTitle, companyName, review, serviceId, email, UserName, UserPhoto, rate };

   




    try {
      // Add API call, send data to server
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, reviewData)
      setReviews({ ...reviews, data })
      //need to check , form reset not working
      // reviewData.reset()
      toast.success('Review added successfully!')
      console.log(data);
      // navigate('/reviews')
    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
    navigate('/reviews')
  }

  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }

  console.log(reviews?.length);
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2>{reviews?.length}</h2>
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
          Total Reviews: {ReviewCount}
        </p>

        {/* Review Form */}
        {/* <div className="bg-white shadow rounded-lg p-6 mb-8">
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
        </div> */}

        {/* Add Review Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-lg p-6 mb-8"
        >
          <h3 className="text-lg font-semibold mb-4">Add a Review</h3>
          <textarea
            className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            name='review'
            placeholder="Write your review here..."
            // value={newReview.comment}
            // onChange={(e) =>
            //   setNewReview({ ...newReview, comment: e.target.value })
            // }
            required
          ></textarea>
          <div className="flex items-center mb-4">
            <span className="mr-2">Your Rating:</span>
            <Rating
              style={{display:'inline-block'}}
              onClick={handleRating}
              // onPointerEnter={onPointerEnter}
              // onPointerLeave={onPointerLeave}
              // onPointerMove={onPointerMove}
            /* Available Props */
            />
          </div>
          <div>
            <h2>{user?.photoURL}</h2>
            <img referrerPolicy='no-referrer' className='h-24 w-24 rounded-full' src={user?.photoURL} alt="" />
            <h2>{user?.displayName}</h2>
            <h2>{user?.email}</h2>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Review
          </button>
        </form>

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
      <AllReviews serviceId={_id}></AllReviews>
    </div>
  );
};

export default ServiceDetails;