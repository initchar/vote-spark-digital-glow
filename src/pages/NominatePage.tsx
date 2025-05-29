import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router

// Placeholder for a potential Header component if you have one
// import Header from '../components/Header'; 

const NominatePage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    nomineeName: '',
    nomineeJobTitle: '',
    nomineeCompany: '',
    nomineeWebsite: '',
    reason: '',
    nomineeImage: null as File | null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, nomineeImage: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // You would typically send this data to a backend API
    alert('Nomination submitted! (Check console for data)');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      {/* <Header /> */}
      <div className="w-full max-w-2xl px-6">
        <div className="text-center mb-12">
          {/* You might want to replace this with your actual logo component or image */}
          <Link to="/" className="inline-block mb-8">
            <img src="/logo.png" alt="Hot 100 Logo" className="h-12 mx-auto" /> 
          </Link>
          <h1 className="text-4xl font-bold mb-4">Nominate someone new</h1>
          <p className="text-lg text-gray-300">
            Think someone important is missing from the <Link to="/nominees" className="text-pink-500 hover:text-pink-400 underline">nominee list</Link>? 
            Please tell us right away! The sooner they are nominated, the sooner they can start getting votes. 
            We just need a few details about them to add them to the list. Once they are there, we can send 
            you an email so you can start campaigning on their behalf.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg shadow-xl">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your email (optional)</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-pink-500 focus:border-pink-500 text-white"
            />
          </div>

          <div>
            <label htmlFor="nomineeName" className="block text-sm font-medium text-gray-300 mb-1">Nominee's name <span className="text-pink-500">*</span></label>
            <input 
              type="text" 
              name="nomineeName" 
              id="nomineeName" 
              value={formData.nomineeName}
              onChange={handleChange}
              required 
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-pink-500 focus:border-pink-500 text-white"
            />
          </div>

          <div>
            <label htmlFor="nomineeJobTitle" className="block text-sm font-medium text-gray-300 mb-1">Nominee's job title <span className="text-pink-500">*</span></label>
            <input 
              type="text" 
              name="nomineeJobTitle" 
              id="nomineeJobTitle" 
              value={formData.nomineeJobTitle}
              onChange={handleChange}
              required 
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-pink-500 focus:border-pink-500 text-white"
            />
          </div>

          <div>
            <label htmlFor="nomineeCompany" className="block text-sm font-medium text-gray-300 mb-1">Nominee's company (optional)</label>
            <input 
              type="text" 
              name="nomineeCompany" 
              id="nomineeCompany" 
              value={formData.nomineeCompany}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-pink-500 focus:border-pink-500 text-white"
            />
          </div>

          <div>
            <label htmlFor="nomineeWebsite" className="block text-sm font-medium text-gray-300 mb-1">Nominee's website (optional)</label>
            <input 
              type="url" 
              name="nomineeWebsite" 
              id="nomineeWebsite" 
              value={formData.nomineeWebsite}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-pink-500 focus:border-pink-500 text-white"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-1">Tell us a little bit about why they are great (optional)</label>
            <textarea 
              name="reason" 
              id="reason" 
              rows={4} 
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-pink-500 focus:border-pink-500 text-white"
            />
          </div>

          <div>
            <label htmlFor="nomineeImage" className="block text-sm font-medium text-gray-300 mb-1">Image of nominee (optional)</label>
            <div className="mt-1 flex items-center space-x-4">
              <input 
                type="file" 
                name="nomineeImage" 
                id="nomineeImage" 
                accept="image/*" 
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pink-600 file:text-white hover:file:bg-pink-700 cursor-pointer"
              />
              {/* The 'Upload' button in the image seems to be part of the file input styling or a separate action. 
                  For simplicity, I'm using a standard file input. If a separate upload action per image is needed, 
                  this would require more complex state management and potentially an immediate upload function. */}
            </div>
            {imagePreview && (
              <div className="mt-4">
                <img src={imagePreview} alt="Nominee preview" className="h-32 w-32 object-cover rounded-md" />
              </div>
            )}
            <p className="mt-2 text-xs text-gray-500">An image of your nominee. <a href="#" className="text-pink-500 hover:underline">More information</a></p>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default NominatePage;
