
import React from 'react';
import { RefreshCcw } from 'lucide-react';
import Header from '../components/Header';
import NomineeCard from '../components/NomineeCard';
import Footer from '../components/Footer';

const Index = () => {
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
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center mb-16">
          <h1 className="text-6xl font-black text-hot-yellow mb-6">Cast Your Vote</h1>
          <p className="text-white text-lg font-normal mb-8 max-w-2xl mx-auto">
            Explore samples of current nominees or type a name in the search box to find someone specific. 
            If the person you'd like to vote for isn't listed, <span className="text-hot-pink font-medium">nominate someone new</span>.
          </p>
          <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Search nominees..." 
              className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hot-cyan font-normal"
            />
            <button className="bg-hot-cyan text-black px-6 py-3 font-bold rounded-lg hover:bg-hot-cyan/90 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Nominee Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-4 gap-6">
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
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <button className="inline-flex items-center gap-2 text-hot-pink border-2 border-hot-pink px-6 py-3 rounded-lg font-semibold hover:bg-hot-pink/10 transition-colors">
            <RefreshCcw className="w-5 h-5" />
            Reshuffle sample
          </button>
          <div>
            <button className="bg-hot-cyan text-black px-8 py-4 font-bold text-lg rounded-lg hover:bg-hot-cyan/90 transition-colors">
              Nominate someone new
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
