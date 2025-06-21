import React from 'react';
import { Briefcase, Heart, ShoppingCart, Building2, Gamepad2, Home, Utensils, Users, Banknote, Book, Globe, Film, Hospital, Dumbbell, Bus, Ticket, Rocket, Handshake } from 'lucide-react'; // Install lucide-react or use another icon set

const industries = [
  { name: 'Ecommerce & Retail', icon: <ShoppingCart size={28} /> },
  { name: 'Business to Business', icon: <Handshake size={28} /> },
  { name: 'Nonprofits', icon: <Heart size={28} /> },
  { name: 'Startup', icon: <Rocket size={28} /> },
  { name: 'Gaming & Leisure', icon: <Gamepad2 size={28} /> },
  { name: 'Real Estate', icon: <Home size={28} /> },
  { name: 'Food & Restaurants', icon: <Utensils size={28} /> },
  { name: 'Social Networking', icon: <Users size={28} /> },
  { name: 'Fintech', icon: <Banknote size={28} /> },
  { name: 'Directory & Organisations', icon: <Building2 size={28} /> },
  { name: 'Sports', icon: <Dumbbell size={28} /> },
  { name: 'Education', icon: <Book size={28} /> },
  { name: 'Travel & Hospitality', icon: <Globe size={28} /> },
  { name: 'Media & Entertainment', icon: <Film size={28} /> },
  { name: 'Healthcare', icon: <Hospital size={28} /> },
  { name: 'Fitness & Wellness', icon: <Dumbbell size={28} /> },
  { name: 'Transport & Logistics', icon: <Bus size={28} /> },
  { name: 'Event & Tickets', icon: <Ticket size={28} /> },
];

const Industries = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Industries We Specialize In</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {industries.map((industry, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-teal-600 mb-2">{industry.icon}</div>
            <p className="text-sm font-medium">{industry.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
