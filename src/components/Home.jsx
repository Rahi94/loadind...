import React from 'react';
import Resident from './Resident';
import Review from './Review';
import Banner from './Banner';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider></Slider>
            <Resident></Resident>
            <Review></Review>
        </div>
    );
};

export default Home;