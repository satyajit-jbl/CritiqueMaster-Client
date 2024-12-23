import React from 'react';

const ServiceCard = ({service}) => {

    const {category,
        companyName,
        description,
        price,
        serviceImage,
        serviceTitle,
        website,
        _id} = service;


    return (
        <div className="card bg-base-100 image-full w-96 shadow-xl">
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
                    <button className="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;