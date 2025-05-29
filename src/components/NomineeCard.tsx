
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
        <div className="aspect-square bg-gray-500 flex items-center justify-center">
          {hasPhoto ? (
            <div className="w-full h-full bg-gray-500"></div>
          ) : (
            <div className="w-full h-full bg-gray-600 flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>
          )}
        </div>
        <div className="p-4 h-32 flex flex-col">
          <h3 className="text-hot-yellow font-bold text-sm mb-2 leading-tight line-clamp-3 overflow-hidden">{name}</h3>
          <p className="text-white text-xs leading-tight line-clamp-2 overflow-hidden flex-1">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default NomineeCard;
