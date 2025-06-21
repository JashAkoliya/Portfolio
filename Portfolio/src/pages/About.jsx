import React from 'react';
import JashImg from "../assets/JashImg.jpg";

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      {/* Company Intro */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About Data Globe</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At <span className="font-semibold text-teal-600">Data Globe</span>, we specialize in building scalable digital solutions tailored for modern businesses. With a vision to innovate and a passion to solve real-world problems, our team delivers cutting-edge web, mobile, AI, and cloud solutions for clients across the globe.
          <br /><br />
          Whether you're a startup trying to disrupt your industry or an enterprise looking to modernize, we’re here to bring your ideas to life with reliable, secure, and user-centric software products.
        </p>
      </div>

      {/* Jash Akoliya Section */}
      <div className="flex justify-center">
        <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition max-w-xl w-full">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={JashImg}
              alt="Jash Akoliya"
              className="w-20 h-20 rounded-full object-cover border-2 border-teal-500"
            />
            <div>
              <h4 className="text-xl font-bold text-teal-700">Jash Akoliya</h4>
              <p className="text-sm text-gray-500">Co-Founder & Full Stack Engineer</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Jash is a tech enthusiast with deep expertise in data engineering, machine learning, and cloud technologies. He plays a key role in architecting data pipelines and analytical systems that empower businesses to make smarter decisions and scale efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
