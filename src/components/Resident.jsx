import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Resident = () => {
    const [residents, setResidents] = useState([])
    useEffect(() => {
        fetch('residents.json')
            .then(res => res.json())
            .then(data => setResidents(data))
    }, [])
    return (
        <div>
            <div className='text-center space-y-3 mb-10 mt-16'>
                <h2 className='md:text-5xl text-3xl text-center font-bold animate__animated animate__bounce'>Our Estate</h2>
                <p>Highlight the best of your properties by using the List Category shortcode. <br /> You can list categories, types, cities, areas and states of your choice.</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    residents.map(resident => <div data-aos="zoom-in" key={resident.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={resident.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {resident.estate_title} </h2>
                            <p> Segment :  {resident.segment_name} </p>
                            <p><span className='font-bold'>Price :</span> {resident.price} </p>
                                <p className='text-lg'> Type :  {resident.status} </p>
                            <p> <span className='font-bold'>Location :</span> {resident.location} </p>
                            
                            <div className="card-actions justify-center">
                                <Link to={`/estate/${resident.id}`} className="btn btn-primary hover:text-white"> View Details </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Resident;