// components/Hero.js
import React from 'react';
import Background from '../images/Background.jpg';
import firstlogo from "../images/firstlogo.png";
import secondlogo from "../images/secondlogo.png";
import thirdlogo from "../images/thirdlogo.png";
import fourlogo from "../images/fourlogo.png";
import fivelogo from "../images/fivelogo.png";

const logos = [firstlogo, secondlogo, thirdlogo, fourlogo, fivelogo];

const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Background.src})`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h4 className="text-gray-200 text-lg sm:text-xl font-bold mb-4">
                    YOUR HOME AWAY FROM HOME
                </h4>

                <h1 className="text-white text-4xl sm:text-6xl font-semibold leading-tight">
                    Budget Friendly <br />
                    Coworking Space
                </h1>

                <p className="text-white text-lg sm:text-2xl mt-4 max-w-2xl">
                    Office spaces built for Freelancers, Remote Workers,<br className="hidden sm:block" />
                    and Agencies
                </p>

                <button className="text-green-400 mt-6 bg-white px-6 py-3 rounded font-bold hover:bg-gray-100 text-base sm:text-lg">
                    Ready to Move In?
                </button>

                <h3 className="mt-10 text-white font-bold text-base sm:text-lg">
                    Trusted by industry leaders
                </h3>

                {/* Animated Logos */}
                <div className="mt-6 overflow-hidden w-full max-w-6xl">
                    <div className="animate-infinite-scroll gap-12 sm:gap-20 mt-5">
                        {[...logos, ...logos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo.src}
                                alt={`Company Logo ${index}`}
                                className="w-16 sm:w-20 h-auto"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
