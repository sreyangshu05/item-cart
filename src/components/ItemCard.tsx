import React from 'react';
import { Item } from '../types/Item';
import { Calendar, Tag } from 'lucide-react';

interface ItemCardProps {
  item: Item;
  onClick: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item, onClick }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-300 group"
    >
      <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
        <img 
          src={item.coverImage} 
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700 backdrop-blur-sm">
            <Tag className="h-3 w-3 mr-1" />
            {item.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {item.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {formatDate(item.createdAt)}
          </div>
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-1">
              {item.additionalImages.slice(0, 3).map((_, index) => (
                <div 
                  key={index}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-2">
              +{item.additionalImages.length} images
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};