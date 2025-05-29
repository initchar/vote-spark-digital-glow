import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { User } from 'lucide-react'; // For placeholder image

// Temporary nominee data - ideally fetched from a backend or context
const nomineesData = [
  { id: "clara-ollerenshaw", name: "Clara Ollerenshaw", title: "Associate Director, Anthesis", hasPhoto: true, description: "A leading voice in sustainable resource management, Clara has spearheaded numerous initiatives to promote circular economy principles.", photoUrl: "/placeholder-nominee.jpg" },
  { id: "edward-kosior", name: "Edward Kosior", title: "Founder and CEO, Nextek Ltd and NEXTLOOPP", hasPhoto: true, description: "Edward is a pioneer in plastics recycling technology, driving innovation to tackle plastic waste globally.", photoUrl: "/placeholder-nominee.jpg" },
  { id: "julian-perfitt", name: "Julian Perfitt", title: "Technical Director, Anthesis Group", hasPhoto: true, description: "Julian's expertise in waste treatment and policy has been instrumental in shaping effective environmental strategies.", photoUrl: "/placeholder-nominee.jpg" },
  { id: "pat-jennings", name: "Pat Jennings", title: "Policy & Comms Lead, Alpuro", hasPhoto: false, description: "Pat plays a crucial role in advocating for sustainable practices and clear communication in the waste sector.", photoUrl: "" },
  { id: "adam-read", name: "Adam Read", title: "Chief Sustainability External Affairs Officer, SUEZ recycling and recovery UK & Senior Vice-president of the CIWM", hasPhoto: true, description: "Adam is a prominent figure in the waste industry, known for his strategic insights and commitment to sustainability.", photoUrl: "/placeholder-nominee.jpg" },
  { id: "russell-owens", name: "Russell Owens", title: "Head of Collaborative Change Programme, Welsh Government", hasPhoto: false, description: "Russell leads impactful programs aimed at transforming waste management practices through collaboration and innovation.", photoUrl: "" },
  // Add other nominees with 'id', 'description', and 'photoUrl' if available
];

interface Nominee {
  id: string;
  name: string;
  title: string;
  hasPhoto?: boolean;
  description?: string;
  photoUrl?: string;
}

const NomineeDetailPage = () => {
  const { nomineeId } = useParams<{ nomineeId: string }>();
  const [nominee, setNominee] = useState<Nominee | null>(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const currentNominee = nomineesData.find(n => n.id === nomineeId);
    setNominee(currentNominee || null);
    // Reset state if nominee changes
    setShowCommentForm(false);
    setComment('');
  }, [nomineeId]);

  const handleVoteClick = () => {
    // In a real app, you'd record the vote in the backend here
    console.log(`Voted for ${nominee?.name}`);
    setShowCommentForm(true);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd submit the comment to the backend here
    console.log(`Comment for ${nominee?.name}: ${comment}`);
    // Optionally, show a success message or clear form
    alert('Thank you for your comment!');
    setComment('');
    // Potentially hide form or show a 'comment submitted' message
  };

  if (!nominee) {
    return (
      <div className="min-h-screen bg-hot-bg font-figtree text-white flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-20 pb-10 px-4">
          <p className="text-xl">Nominee not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hot-bg font-figtree text-white flex flex-col">
      <Header />
      <main className="flex-grow pt-24 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Nominee Info Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-hot-navy p-6 sm:p-8 rounded-lg shadow-xl">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-gray-600 flex-shrink-0 flex items-center justify-center">
                {nominee.hasPhoto && nominee.photoUrl ? (
                  <img src={nominee.photoUrl} alt={nominee.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={64} className="text-gray-400" />
                )}
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-black text-hot-yellow mb-2">{nominee.name}</h1>
                <p className="text-lg sm:text-xl text-gray-300 mb-4">{nominee.title}</p>
                {nominee.description && <p className="text-base text-gray-400 mb-6">{nominee.description}</p>}
                {!showCommentForm && (
                  <button 
                    onClick={handleVoteClick}
                    className="bg-hot-pink text-white px-8 py-3 font-bold text-lg rounded-lg hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-hot-pink focus:ring-opacity-50"
                  >
                    Vote for {nominee.name.split(' ')[0]}
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* Thank You & Comment Form Section - Appears after voting */}
          <div 
            className={`transition-all duration-1000 ease-in-out overflow-hidden ${showCommentForm ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <section className="mb-12 p-6 sm:p-8 rounded-lg bg-hot-navy/70 shadow-xl">
              <h2 className="text-3xl font-bold text-hot-cyan mb-3 text-center">Thank you!</h2>
              <p className="text-xl text-white mb-6 text-center">
                Tell us why you voted for <span className="font-semibold text-hot-yellow">{nominee.name}</span>
              </p>
              <form onSubmit={handleCommentSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nomineeName" className="block text-sm font-medium text-gray-300 mb-1">Nominee's Name</label>
                  <input 
                    type="text" 
                    id="nomineeName" 
                    value={nominee.name} 
                    readOnly 
                    className="w-full bg-gray-700 border-gray-600 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hot-cyan font-normal"
                  />
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-1">Your reason (optional)</label>
                  <textarea 
                    id="comment" 
                    rows={4} 
                    value={comment} 
                    onChange={(e) => setComment(e.target.value)} 
                    placeholder="Why does this person deserve to be in the Hot 100?"
                    className="w-full bg-gray-700 border-gray-600 text-white px-4 py-3 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hot-cyan font-normal"
                  />
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-hot-cyan text-black px-10 py-3 font-bold text-lg rounded-lg hover:bg-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-hot-cyan focus:ring-opacity-50"
                  >
                    Submit Comment
                  </button>
                </div>
              </form>
              <p className="text-sm text-gray-400 mt-8 text-center">
                Your vote has been received. If you'd like to keep track of the competition and the other great things Resource is up to, then please connect with us on Facebook, Twitter, or LinkedIn.
              </p>
            </section>
          </div>

          {/* Placeholder for Related Nominees or other content */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Related Nominees</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder cards - In a real app, these would be actual related nominees */}
              {[1,2,3].map(i => (
                <div key={i} className="bg-hot-navy p-4 rounded-lg shadow-lg">
                  <div className="w-full h-32 bg-gray-600 rounded mb-3 flex items-center justify-center"><User className="text-gray-400" size={40}/></div>
                  <h3 className="text-hot-yellow font-semibold mb-1">Related Nominee {i}</h3>
                  <p className="text-gray-300 text-sm">Brief description or title.</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NomineeDetailPage;
