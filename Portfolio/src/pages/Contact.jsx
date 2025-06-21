import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    countryCode: '+44',
    website: '',
    budget: '',
    requirement: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://portfolio-back-bix2.onrender.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Form submitted and stored in database!');
      setFormData({
        name: '',
        email: '',
        contact: '',
        countryCode: '+44',
        website: '',
        budget: '',
        requirement: '',
        message: ''
      });
    } else {
      alert(result.message || 'Something went wrong');
    }
  } catch (error) {
    console.error(error);
    alert('Failed to submit the form.');
  }
};

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get a Price Estimation</h2>
        <p className="mb-8 text-center text-gray-600">
          Our software development services are geared towards delivering a high ROI and expanding your business. Share your ideas, and let’s explore how IT can unlock new possibilities for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block mb-1 font-medium">Name*</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address*</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Contact / WhatsApp Number*</label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="border border-gray-300 rounded px-2 py-2"
              >
                <option value="+44">UK (+44)</option>
                <option value="+1">USA (+1)</option>
                <option value="+61">Australia (+61)</option>
                <option value="+91">India (+91)</option>
              </select>
              <input
                type="tel"
                name="contact"
                required
                value={formData.contact}
                onChange={handleChange}
                className="flex-1 border border-gray-300 rounded px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Website URL</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option>Select Your Budget</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $10,000</option>
              <option>$10,000+</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Requirement</label>
            <select
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option>Select your requirement</option>
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>AI/ML</option>
              <option>Cloud & DevOps</option>
              <option>Data Engineering</option>
              <option>Custom Software</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Brief Project Information</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded px-4 py-2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit Request
          </button>

          <p className="text-sm text-center text-gray-500">🔒 Safe & Confidential</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
