import React, { useState, useEffect } from 'react'
import Scroll from './Scroll.js';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContex.jsx';
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { totalItems } = useCart();

  // Initialize scroll functionality
  useEffect(() => {
    Scroll();
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (targetId, offset = 80) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      // Delay scroll until homepage is rendered
      setTimeout(() => {
        smoothScrollTo(href);
        setActiveSection(href);
      }, 100); 
    } else {
      smoothScrollTo(href);
      setActiveSection(href);
    }

    closeMobileMenu();
  };

  // Handle scroll effect for navbar background and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is currently in view
      const sections = ['#home', '#services', '#deals', '#gallery', '#testimonials', '#contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Collections' },
    { href: '#deals', label: 'Top Deals' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`font-serif fixed top-0 left-0 right-0 z-50 mb-20 h-[90px] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <i className="fas fa-hand-sparkles text-3xl text-pink-500 mr-2"></i>
            <h1 className="text-2xl font-bold text-pink-600">Nailzby.rose</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors duration-200 ${
                  activeSection === link.href 
                    ? 'text-pink-600 hover:text-pink-800' 
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            {/* Cart Icon */}
            <Link
              to="/checkout"
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
         <div className='flex flex-row gap-2'>
           <button 
            className="md:hidden text-gray-700 hover:text-pink-600 transition-colors duration-200 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'mb-1'
                }`}
              ></span>
              <span 
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
              
            </div>
          </button>
           <Link
              to="/checkout"
              className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
         </div>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-3 px-4 rounded-lg transition-all duration-200 ${
                    activeSection === link.href 
                      ? 'text-pink-600 font-medium bg-pink-50 border-l-4 border-pink-600' 
                      : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Cart Link */}
              <Link
                to="/checkout"
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-3 px-4 rounded-lg text-gray-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200"
              >
                <span className="flex items-center">
                  <ShoppingCart size={20} className="mr-2" />
                  Cart
                </span>
                {totalItems > 0 && (
                  <span className="bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="bg-pink-600 text-white px-4 py-3 rounded-lg text-center hover:bg-pink-700 transition-colors duration-200 shadow-md mt-4"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-20 z-[-1]"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  )
}

export default NavBar