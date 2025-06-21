import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Branding */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Dataglobe</h3>
          <p className="text-gray-400">
            We provide top-tier web, app, and software development services. Partner with us to turn your ideas into reality.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect with Us</h4>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-white text-xl"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white text-xl"><FaGithub /></a>
          </div>
          <p className="text-sm text-gray-400">
            📍 Surat, India<br />
            ✉️ dataglobemk@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dataglobe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
