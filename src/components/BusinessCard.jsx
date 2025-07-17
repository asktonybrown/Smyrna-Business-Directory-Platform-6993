import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiMapPin, FiPhone, FiClock, FiExternalLink, FiAward } = FiIcons;

const BusinessCard = ({ business, viewMode = 'grid' }) => {
  const isListView = viewMode === 'list';

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-100 ${
      isListView ? 'flex' : ''
    }`}>
      {/* Image */}
      <div className={`relative ${isListView ? 'w-48 flex-shrink-0' : 'h-48'}`}>
        <img
          src={business.image}
          alt={business.name}
          className="w-full h-full object-cover"
        />
        {business.sponsored && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
            <SafeIcon icon={FiAward} className="w-3 h-3" />
            <span>Sponsored</span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
          <div className="flex items-center space-x-1">
            <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">{business.rating}</span>
            <span className="text-xs text-neutral-500">({business.reviews})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
        <div className={`${isListView ? 'flex justify-between items-start' : ''}`}>
          <div className={isListView ? 'flex-1 pr-4' : ''}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-neutral-800">{business.name}</h3>
              {!isListView && (
                <span className="text-sm text-primary-600 font-medium">{business.category}</span>
              )}
            </div>
            
            {isListView && (
              <span className="text-sm text-primary-600 font-medium mb-2 inline-block">{business.category}</span>
            )}
            
            <p className="text-neutral-600 text-sm mb-4">{business.description}</p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <a href={`tel:${business.phone}`} className="hover:text-primary-600 transition-colors">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-accent-600">
                <SafeIcon icon={FiClock} className="w-4 h-4" />
                <span>{business.hours}</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className={`${isListView ? 'flex-shrink-0' : 'mt-4'}`}>
            <Link
              to={`/business/${business.id}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all font-medium group"
            >
              View Details
              <SafeIcon icon={FiExternalLink} className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;