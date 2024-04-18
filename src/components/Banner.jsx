import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/TKsvfRL/photo-1448630360428-65456885c650-q-80-w-2067-auto-format-fit-crop-ixlib-rb-4-0.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 md:text-5xl text-3xl font-bold animate__animated animate__bounce">Find Your Dream</h1>
                    <p className="mb-5">We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;