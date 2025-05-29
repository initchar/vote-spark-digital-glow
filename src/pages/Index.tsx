
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Facebook, Twitter, Linkedin } from 'lucide-react'; // Assuming you use lucide-react for icons

const Index = () => {
  return (
    <div className="min-h-screen bg-hot-bg font-figtree text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-hot-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            {/* Left Side - Graphic */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              {/* Placeholder for the 'resource HOT 100' graphic */}
              <img src="/placeholder-hot100-logo.svg" alt="Resource Hot 100" className="w-full max-w-md h-auto" />
              {/* Replace with actual image path, e.g., /images/hot100-logo.png */}
            </div>

            {/* Right Side - Voting Info */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
                Voting is now open!
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">
                Who do you think is making the biggest difference to how we tackle waste?
              </p>
              <Link
                to="/cast-vote" 
                className="inline-block bg-hot-pink text-white px-10 py-4 font-bold text-lg rounded-lg hover:bg-pink-700 transition-colors mb-6"
              >
                Cast your vote
              </Link>
              <p className="text-sm text-gray-400 mb-1">Headline sponsor</p>
              {/* Placeholder for UNTHA logo - can be an img tag if you have it */}
              <div className="inline-block bg-hot-cyan text-black px-4 py-1 rounded font-semibold">
                UNTHA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Separator Line - Optional, based on image */}
      <div className="h-1 bg-purple-600"></div> 

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-hot-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Who is this year's <br className="hidden sm:block" /> Resource Hot 100?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Now in its 21st year, the Resource Hot 100 throws a spotlight on the people making the biggest contribution to how we tackle waste.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-12">
            The results will be published in September, with a countdown on our social media channels and on <a href="#" className="text-hot-cyan hover:underline">Resource.co</a>.
          </p>
          <div className="flex justify-center items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={28} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={28} /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={28} /></a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
