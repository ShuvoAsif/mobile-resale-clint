import React from 'react';
import verify from '../../../images/check.png'

const AddCard = ({ addmobile }) => {

    const { image, name, seller, location, resale_price, orginal_price, use_time, posted_time } = addmobile;


    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" className='bg-contain' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between'>
                        <div><p>Orginal Price: {orginal_price}</p></div><div><p>Resale Price: {resale_price}</p></div>
                    </div>
                    <h2>Location: {location}</h2>
                    <div className='flex justify-between'>
                        <div><p>Used of Years: {use_time}</p></div><div>Posted Time:{posted_time}</div>
                    </div>
                    <div className='flex'>
                        <h2>Seller's Name: {seller}</h2>
                        <div className="avatar">
                            <div className="w-5 h-5 rounded-full">
                                <img src={verify} alt='' />
                            </div>
                        </div></div>
                    <div className="card-actions justify-end">
                        <button className="btn">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;