import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NomineeCard from '../components/NomineeCard';

const Nominee = () => {
  const { id } = useParams();
  
  // Mock data - in a real app this would come from an API based on the ID
  const nominee = {
    name: "Stuart Hayward-Higham",
    title: "Chief Technical Development and Innovation Officer",
    company: "SUEZ Recycling and Recovery UK",
    image: "photo-1581091226825-a6a2a5aee158", // Using the placeholder image
    description: "Working to help make EPR, consistency, DRS, CCUS, carbon and other policy changes workable and understandable and helping the sector prepare for the necessary changes to come. Driving new understanding through data and working with the whole value chain to deliver new solutions.",
    website: "http://www.sita.co.uk"
  };

  const relatedNominees = [
    { name: "Clara Ollerenshaw", title: "Associate Director, Anthesis" },
    { name: "Edward Kosior", title: "Founder and CEO, Nextek Ltd and NEXTLOOPP" },
    { name: "Julian Perfitt", title: "Technical Director, Anthesis Group" },
    { name: "Pat Jennings", title: "Policy & Comms Lead, Alpuro" },
    { name: "Adam Read", title: "Chief Sustainability External Affairs Officer, SUEZ recycling and recovery UK" },
    { name: "Russell Owens", title: "Head of Collaborative Change Programme, Welsh Government" }
  ];

  return (
    <div className="min-h-screen bg-hot-bg font-figtree">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back to nominee list */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-hot-cyan font-medium mb-8 hover:text-hot-cyan/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to nominee list
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Left column - Nominee photo */}
            <div className="lg:col-span-1">
              <div className="aspect-[3/4] bg-gray-500 rounded-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${nominee.image}?auto=format&fit=crop&w=400&q=80`}
                  alt={nominee.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right column - Nominee details and vote section */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Nominee details */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-black text-white mb-2">{nominee.name}</h1>
                  <p className="text-hot-cyan text-lg font-semibold mb-1">{nominee.title}</p>
                  <p className="text-hot-cyan text-lg font-semibold mb-6">{nominee.company}</p>
                  
                  <div className="mb-6">
                    <p className="text-gray-300 text-lg font-normal leading-relaxed">"{nominee.description}"</p>
                  </div>

                  <div className="border-t border-gray-600 pt-6">
                    <p className="text-white font-medium mb-2">Website(s):</p>
                    <a 
                      href={nominee.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-hot-cyan font-medium hover:text-hot-cyan/80 transition-colors inline-flex items-center gap-2"
                    >
                      {nominee.website}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Vote section */}
                <div className="lg:col-span-1">
                  <div className="bg-hot-navy rounded-lg p-6">
                    <button className="w-full bg-hot-pink text-white font-bold text-lg py-4 rounded-lg hover:bg-hot-pink/90 transition-colors mb-6">
                      Vote
                    </button>
                    
                    <p className="text-white text-sm font-normal mb-4">Get others voting for {nominee.name.split(' ')[0]} {nominee.name.split(' ')[nominee.name.split(' ').length - 1]}</p>
                    
                    <div className="flex gap-3 mb-6">
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <span className="text-black font-bold">f</span>
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <span className="text-black font-bold">𝕏</span>
                      </button>
                      <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <span className="text-black font-bold">in</span>
                      </button>
                    </div>
                    
                    <div className="border-t border-gray-600 pt-4">
                      <p className="text-white text-sm font-normal mb-2">Are these details out of date?</p>
                      <a href="#" className="text-hot-cyan text-sm font-medium hover:text-hot-cyan/80 transition-colors">
                        Please let us know.
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related nominees section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Related nominees</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {relatedNominees.map((relatedNominee, index) => (
                <NomineeCard
                  key={index}
                  name={relatedNominee.name}
                  title={relatedNominee.title}
                  hasPhoto={true}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Nominee;
