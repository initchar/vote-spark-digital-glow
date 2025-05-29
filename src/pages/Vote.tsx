
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Vote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nomineeName: '',
    comment: ''
  });

  // Mock data - in a real app this would come from an API based on the ID
  const nominee = {
    name: "Stuart Hayward-Higham",
    title: "Chief Technical Development and Innovation Officer",
    company: "SUEZ Recycling and Recovery UK"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the vote data to your backend
    console.log('Vote submitted:', { nomineeId: id, ...formData });
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-hot-bg font-figtree">
        <Header />
        
        <main className="pt-24 pb-16 flex items-center justify-center min-h-screen">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="bg-hot-navy rounded-2xl p-12 shadow-2xl">
              <CheckCircle className="w-16 h-16 text-hot-cyan mx-auto mb-6" />
              <h1 className="text-4xl font-black text-white mb-4">Thank you!</h1>
              <p className="text-xl text-gray-300 mb-8 font-medium">
                Your vote for <span className="text-hot-cyan font-bold">{nominee.name}</span> has been recorded successfully.
              </p>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => navigate(`/nominee/${id}`)}
                  className="w-full bg-hot-pink hover:bg-hot-pink/90 text-white font-bold text-lg py-3 rounded-lg transition-colors"
                >
                  Back to {nominee.name.split(' ')[0]}'s Profile
                </Button>
                
                <Button 
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="w-full border-hot-cyan text-hot-cyan hover:bg-hot-cyan hover:text-hot-navy font-bold text-lg py-3 rounded-lg transition-colors"
                >
                  View All Nominees
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <p className="text-gray-400 text-sm font-normal mb-4">
                  Help us spread the word about the HOT 100!
                </p>
                <div className="flex justify-center gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-hot-navy transition-colors"
                  >
                    Share on Facebook
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-hot-navy transition-colors"
                  >
                    Share on Twitter
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-hot-navy transition-colors"
                  >
                    Share on LinkedIn
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hot-bg font-figtree">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back to nominee */}
          <Link 
            to={`/nominee/${id}`}
            className="inline-flex items-center gap-2 text-hot-cyan font-medium mb-8 hover:text-hot-cyan/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to {nominee.name.split(' ')[0]}'s profile
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Nominee info */}
            <div className="bg-hot-navy rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">You're voting for:</h2>
              <div className="mb-6">
                <h3 className="text-xl font-black text-hot-yellow mb-2">{nominee.name}</h3>
                <p className="text-hot-cyan font-semibold mb-1">{nominee.title}</p>
                <p className="text-hot-cyan font-semibold">{nominee.company}</p>
              </div>
              
              <div className="bg-hot-bg/30 rounded-lg p-4">
                <p className="text-gray-300 text-sm font-normal leading-relaxed">
                  Your vote helps recognize outstanding professionals in the resource and waste management sector. 
                  Tell us why this nominee deserves to be in the HOT 100!
                </p>
              </div>
            </div>

            {/* Right column - Voting form */}
            <div className="bg-gradient-to-br from-hot-cyan to-hot-navy rounded-2xl p-8 shadow-2xl">
              <h1 className="text-3xl font-black text-white mb-2">Cast Your Vote</h1>
              <p className="text-white/80 font-medium mb-8">
                Tell us why {nominee.name.split(' ')[0]} deserves your vote
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nomineeName" className="text-white font-semibold text-sm mb-2 block">
                    Nominee's Name
                  </Label>
                  <Input
                    id="nomineeName"
                    name="nomineeName"
                    value={formData.nomineeName || nominee.name}
                    onChange={handleInputChange}
                    className="bg-white text-hot-navy font-medium"
                    placeholder="Enter nominee's full name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="comment" className="text-white font-semibold text-sm mb-2 block">
                    Why do you think they deserve to be in the HOT 100?
                  </Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="bg-white text-hot-navy font-medium min-h-[120px] resize-none"
                    placeholder="Share what makes this nominee exceptional..."
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-hot-pink hover:bg-hot-pink/90 text-white font-bold text-lg py-4 rounded-lg transition-colors shadow-lg"
                >
                  Submit Vote
                </Button>
              </form>

              <p className="text-white/60 text-xs font-normal mt-6 text-center">
                By submitting this vote, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vote;
