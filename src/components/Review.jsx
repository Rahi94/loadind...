import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='my-16'>
            <h2 className='md:text-5xl text-3xl text-center font-bold my-10 animate__animated animate__bounce'>Our Reviews</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    reviews.map(review => <div className='card w-96 bg-base-100 space-y-6 flex place-items-center px-4 py-8 shadow-2xl' key={review.id}>
                        <img className='rounded-full w-24' src={review.photo} alt="" />
                        <p> {review.description} </p>
                        <p> {review.rating} </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Review;