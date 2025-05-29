
import React from 'react';
import { RefreshCcw } from 'lucide-react';
import Header from '../components/Header';
import NomineeCard from '../components/NomineeCard';
import Footer from '../components/Footer';

const CastVotePage = () => {
  const nominees = [
    { name: "Clara Ollerenshaw", title: "Associate Director, Anthesis" },
    { name: "Edward Kosior", title: "Founder and CEO, Nextek Ltd and NEXTLOOPP" },
    { name: "Julian Perfitt", title: "Technical Director, Anthesis Group" },
    { name: "Pat Jennings", title: "Policy & Comms Lead, Alpuro" },
    { name: "Adam Read", title: "Chief Sustainability External Affairs Officer, SUEZ recycling and recovery UK & Senior Vice-president of the CIWM" },
    { name: "Russell Owens", title: "Head of Collaborative Change Programme, Welsh Government" },
    { name: "Future Nominee 1", title: "Their Title or Role", hasPhoto: false },
    { name: "Future Nominee 2", title: "Their Title or Role", hasPhoto: false },
  ];

  return (
    <div className="min-h-screen bg-hot-bg font-figtree">
      <Header />
      
      {/* Main Content - Title & Search */}
      <main className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-hot-yellow mb-4 sm:mb-6">Cast Your Vote</h1>
          <p className="text-white text-base sm:text-lg font-normal mb-6 sm:mb-8 max-w-2xl mx-auto">
            Explore samples of current nominees or type a name in the search box to find someone specific. 
            If the person you'd like to vote for isn't listed, <span className="text-hot-pink font-medium">nominate someone new</span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search nominees..." 
              className="w-full sm:flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hot-cyan font-normal"
            />
            <button className="w-full sm:w-auto bg-hot-cyan text-black px-6 py-3 font-bold rounded-lg hover:bg-hot-cyan/90 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Nominee Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {nominees.map((nominee, index) => (
              <NomineeCard
                key={index}
                name={nominee.name}
                title={nominee.title}
                hasPhoto={nominee.hasPhoto}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <button className="inline-flex items-center gap-2 text-hot-pink border-2 border-hot-pink px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold hover:bg-hot-pink/10 transition-colors text-sm sm:text-base">
            <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            Reshuffle sample
          </button>
          <div>
            <button className="bg-hot-cyan text-black px-6 py-3 sm:px-8 sm:py-4 font-bold text-base sm:text-lg rounded-lg hover:bg-hot-cyan/90 transition-colors">
              Nominate someone new
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CastVotePage;
