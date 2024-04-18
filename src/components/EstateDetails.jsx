import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
    const residents = useLoaderData()
    const params = useParams();
    const estate = residents.find(resident => resident.id === parseInt(params.id))
    const { estate_title, segment_name, description, price, status, area, location, facilities, image } = estate
    return (
        <div className='p-6 space-y-4 mb-6'>
            <div className='text-center my-4'>
                <h2 className='text-4xl text-center font-bold'>Estate Details of <span className='text-blue-700'>{estate_title}</span> </h2>
            </div>
            <img src={image} alt="estate-photo" />
            <p> <span className='font-bold text-lg'>Estate Title : </span> {estate_title} </p>
            <p> <span className='font-bold text-lg'>Segment Name : </span> {segment_name} </p>
            <p> <span className='font-bold text-lg'>Description :  </span> {description} </p>
            <p> <span className='font-bold text-lg'>Price :  </span> {price} </p>
            <p> <span className='font-bold text-lg'>Status :  </span> {status} </p>
            <p> <span className='font-bold text-lg'>Area :  </span> {area} </p>
            <p> <span className='font-bold text-lg'>Location :  </span> {location} </p>
            <div className="">
            <span className='font-bold text-lg'>Fecility :  </span>
                {
                    facilities.map(fecility => <div  key={facilities[fecility]} className="badge mx-2 badge-outline">
                        {fecility}
                    </div>)
                }
            </div>
        </div>
    );
};

export default EstateDetails;