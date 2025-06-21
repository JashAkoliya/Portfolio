import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // optional: install 'lucide-react' for icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 p-4 shadow">
      <div className="flex justify-between items-center max-w-9xl mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Dataglobe
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/services" className="text-white hover:text-gray-300">Services</Link>
          <Link to="/projects" className="text-white hover:text-gray-300">Projects</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 px-4 pb-4">
          <Link to="/" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/projects" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" className="text-white hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
