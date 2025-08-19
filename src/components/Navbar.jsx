import React, { useState } from 'react';
import { Menu, X, Heart, Star, Users, Phone } from 'lucide-react';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home', icon: <Heart className="w-4 h-4" /> },
    { name: 'خدماتنا', href: '#services', icon: <Star className="w-4 h-4" /> },
    { name: 'عن الحضانة', href: '#about', icon: <Users className="w-4 h-4" /> },
    { name: 'اتصل بنا', href: '#contact', icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b-4 border-gradient-to-r from-pink-400 to-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center ">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-right">
              <h1 className="text-xl font-bold text-[#023047]">حضانة براعم المستقبل</h1>
              <p className="text-xs text-gray-600">رعاية وتعليم بحب</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg text-gray-700 hover:bg-[#023047] hover:bg-purple-50 transition-all duration-300 hover-lift group"
                >
                  <span className="group-hover:wiggle">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#023047] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover-lift shadow-lg">
              احجز زيارة
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 rtl:space-x-reverse px-3 py-3 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg">
                احجز زيارة
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

