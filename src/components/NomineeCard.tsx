
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

interface NomineeCardProps {
  name: string;
  title: string;
  hasPhoto?: boolean;
}

const NomineeCard = ({ name, title, hasPhoto = true }: NomineeCardProps) => {
  // Create a simple ID from the name for routing
  const nomineeId = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <Link to={`/nominee/${nomineeId}`} className="block">
      <div className="bg-hot-navy rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-hot-cyan/20 hover:-translate-y-2">
        <div className="aspect-[3/4] bg-gray-500 flex items-center justify-center">
          {hasPhoto ? (
            <div className="w-full h-full bg-gray-500"></div>
          ) : (
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-hot-yellow font-bold text-lg mb-2">{name}</h3>
          <p className="text-white text-sm">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default NomineeCard;
