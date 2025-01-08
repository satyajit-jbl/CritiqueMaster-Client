import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {category,
        companyName,
        description,
        price,
        serviceImage,
        serviceTitle,
        website,
        _id} = service || {};


    return (
        <div className="card bg-base-100 shadow-xl mt-10">
            <figure className='h-[60vh] w-full rounded-t-2xl'>
                <img className='object-cover object-center w-full h-full rounded-t-2xl' 
                    src={serviceImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{serviceTitle}</h2>
                <h2 className="font-serif font-extralight">{companyName}</h2>
                <p>Type: {category}</p>
                <p className='font-semibold'>Price: {price}$</p>
                <p>Details:{description.substring(0,20)}...</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn bg-yellow-400">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;