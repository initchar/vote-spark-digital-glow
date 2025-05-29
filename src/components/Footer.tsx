
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hot-navy">
      <div className="w-full h-1 bg-hot-pink"></div>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h4 className="text-hot-pink font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white font-normal hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="#" className="text-white font-normal hover:text-gray-300 transition-colors">Cast Your Vote</a></li>
              <li><a href="#" className="text-white font-normal hover:text-gray-300 transition-colors">Nominate someone new</a></li>
              <li><a href="#" className="text-white font-normal hover:text-gray-300 transition-colors">Our Sponsors</a></li>
              <li><a href="#" className="text-white font-normal hover:text-gray-300 transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-hot-pink font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-white font-normal">Email: hot100@resourcemedia.co.uk</li>
              <li className="text-white font-normal">Telephone: 0117 903 0698</li>
            </ul>
          </div>
          <div>
            <h4 className="text-hot-pink font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-xs">📧</span>
              </div>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-xs">📱</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-600">
          <p className="text-gray-400 text-sm font-normal">© 2024 Resource Media. All rights reserved.</p>
          <p className="text-gray-400 text-sm font-normal">The Resource Hot 100 is an initiative by Resource Media.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
