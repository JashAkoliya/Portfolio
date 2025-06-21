import React from 'react';
import { Link } from 'react-router-dom';
import OurServices from './OurServices';
import Industries from './Industries';
import TechnologyRepo from './TechnologyRepo';
import "./img.css"

const HeroSection = () => {
    return (
        <>
            <section className="hero-background text-white px-6 md:px-20">
                <div className="hero-overlay"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center py-37">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Step into <br /> The World of Digital Excellence
                    </h1>
                    <h2 className="text-xl md:text-2xl font-semibold text-teal-400 mb-4">
                        With Pioneers of Full Stack Development
                    </h2>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                        At <span className="text-white font-bold">Dataglobe</span>, we don’t just develop apps — we create scalable, agile, and customer-centric solutions tailored for modern businesses.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white hover:bg-gray-700 text-black hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Request A Quote
                    </Link>
                </div>
            </section>

            <OurServices />
            <Industries />
            <TechnologyRepo />
        </>
    );
};

export default HeroSection;