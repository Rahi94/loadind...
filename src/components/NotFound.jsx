import React from 'react';
import notfound from '../assets/undraw_page_not_found_re_e9o6.svg'

const NotFound = () => {
    return (
        <div className='flex justify-center flex-col items-center mt-6'>
            <h1>Not Found Page</h1>
            <img className='w-1/2' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;