// components/Hero.js
import React from 'react';
import Background from '../images/Background.jpg';
import firstlogo from "../images/firstlogo.png";
import secondlogo from "../images/secondlogo.png";
import fourlogo from "../images/fourlogo.png";
import thirdlogo from "../images/thirdlogo.png";
import fivelogo from "../images/fivelogo.png";

const Hero = () => {
    return (
        <div className="relative w-full h-screen mt-7">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background.src})`,
                }}
            />

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h4 className="text-gray-200 text-xl font-bold mb-4 mt-25">YOUR HOME AWAY FROM HOME</h4>

                <h1 className="text-white text-6xl font-semibold">
                    Budget Friendly <br />
                    Coworking Space
                </h1>

                <p className="text-white text-3xl mt-4">
                    Office spaces built for Freelancers, Remote Workers,<br />
                    and Agencies
                </p>

                <button className="text-green-400 mt-4 bg-white px-6 py-3 rounded font-bold hover:bg-gray-100 text-lg">
                    Ready to Move In?
                </button>



                <h3 className="mt-19 text-white font-bold">Trusted by industry leaders</h3>

                <div className="overflow-hidden mt-10">
                    <div className="flex animate-infinite-scroll gap-10 sm:gap-16 md:gap-24">
                        <img src={firstlogo.src} alt="Company Logo" className="w-20 h-auto" />
                        <img src={secondlogo.src} alt="Company Logo" className="w-20 h-auto" />
                        <img src={fourlogo.src} alt="Company Logo" className="w-20 h-auto" />
                        <img src={thirdlogo.src} alt="Company Logo" className="w-20 h-auto" />
                        <img src={fivelogo.src} alt="Company Logo" className="w-20 h-auto" />

                        {/* Repeat once to create smooth loop */}
                        <img src={firstlogo.src} alt="Company Logo" className="w-20 h-auto" />
                        <img src={secondlogo.src} alt="Company Logo" className="w-20 h-auto" />
                        
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Hero;
