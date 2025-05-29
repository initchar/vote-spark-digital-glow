
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hot-bg px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" aria-label="Homepage">
          <img src="/Hot100-Neon-Raspberry.png" alt="Hot 100 Logo" className="h-10 md:h-12 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-hot-pink font-semibold hover:text-hot-pink/80 transition-colors">Home</Link>
          <Link to="/cast-vote" className="text-white font-medium hover:text-gray-300 transition-colors">Cast Your Vote</Link>
          <Link to="/nominate" className="text-white font-medium hover:text-gray-300 transition-colors">Nominate someone new</Link>
          <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors">Our Sponsors</a>
          <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors">About</a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-hot-bg shadow-lg py-4 px-6 z-40">
          <nav className="flex flex-col items-start gap-4">
            <Link to="/" className="text-hot-pink font-semibold hover:text-hot-pink/80 transition-colors py-2 w-full" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/cast-vote" className="text-white font-medium hover:text-gray-300 transition-colors py-2 w-full" onClick={() => setIsMobileMenuOpen(false)}>Cast Your Vote</Link>
            {/* Update other links as needed */}
            <Link to="/nominate" className="text-white font-medium hover:text-gray-300 transition-colors py-2 w-full" onClick={() => setIsMobileMenuOpen(false)}>Nominate someone new</Link>
            <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors py-2 w-full" onClick={() => setIsMobileMenuOpen(false)}>Our Sponsors</a>
            <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors py-2 w-full" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
