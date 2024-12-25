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
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img 
                    src={serviceImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{serviceTitle}</h2>
                <h2 className="card-title">{companyName}</h2>
                <p>{category}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;