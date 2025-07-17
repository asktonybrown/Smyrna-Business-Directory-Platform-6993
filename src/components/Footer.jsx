import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiExternalLink } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SG</span>
              </div>
              <h3 className="text-xl font-display font-bold">Smyrna Guide</h3>
            </div>
            <p className="text-neutral-300 text-sm">
              Your comprehensive guide to discovering the best local businesses in Smyrna, Georgia.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/smyrnaguide" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/smyrnaguide" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/smyrnaguide" className="text-neutral-400 hover:text-primary-400 transition-colors">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-neutral-300 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/directory" className="text-neutral-300 hover:text-primary-400 transition-colors">Business Directory</Link></li>
              <li><Link to="/categories" className="text-neutral-300 hover:text-primary-400 transition-colors">Categories</Link></li>
              <li><Link to="/sponsors" className="text-neutral-300 hover:text-primary-400 transition-colors">Featured Sponsors</Link></li>
              <li><Link to="/events" className="text-neutral-300 hover:text-primary-400 transition-colors">Events & News</Link></li>
            </ul>
          </div>

          {/* Business Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">For Businesses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/business-login" className="text-neutral-300 hover:text-primary-400 transition-colors">Business Login</Link></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">List Your Business</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">Advertise With Us</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-primary-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 text-primary-400" />
                <a href="mailto:support@smyrnaguide.com" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  support@smyrnaguide.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4 text-primary-400" />
                <a href="tel:+1-770-555-0123" className="text-neutral-300 hover:text-primary-400 transition-colors">
                  (770) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="w-4 h-4 text-primary-400" />
                <span className="text-neutral-300">
                  Smyrna, GA 30080
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 Smyrna Guide. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-neutral-400 hover:text-primary-400 text-sm transition-colors">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;