import React from 'react';

const Projects = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: E-commerce for Clothing */}
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-teal-700 mb-2">E-commerce for Clothing</h3>
            <p className="text-gray-600 mb-4 text-sm">Platform: WordPress & PHP</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Developed a responsive and SEO-friendly clothing e-commerce website using WordPress and custom PHP. Features include product catalog with filtering, payment gateway integration, discount management, and an admin panel for easy inventory control.
              <br /><br />
              The website was optimized for mobile users, search engine visibility, and page speed performance. Built with <strong>Elementor</strong>, <strong>WooCommerce</strong>, and enhanced with <strong>custom plugins</strong> and schema markup for SEO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
