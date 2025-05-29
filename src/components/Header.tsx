
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hot-bg px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-16 h-10 bg-gray-500 rounded"></div>
          <div className="bg-hot-pink px-4 py-2 rounded">
            <span className="text-black font-black text-lg">HOT 100</span>
          </div>
        </div>
        <nav className="flex items-center gap-8">
          <a href="#" className="text-hot-pink font-semibold hover:text-hot-pink/80 transition-colors">Home</a>
          <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors">Cast Your Vote</a>
          <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors">Nominate someone new</a>
          <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors">Our Sponsors</a>
          <a href="#" className="text-white font-medium hover:text-gray-300 transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
