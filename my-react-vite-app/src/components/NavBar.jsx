import React from 'react'
import Scroll from './Scroll.js';
const NavBar = () => {
//    const mobileMenuButton = document.getElementById('mobile-menu-button');
//         const mobileMenu = document.getElementById('mobile-menu');
        
//         mobileMenuButton.addEventListener('click', () => {
//             mobileMenu.classList.toggle('hidden');
//         });
        Scroll();
  return (
    <div className=' w-[81%] z-2 mt-0'>
   <header className="sm:w-[80%] bg-white shadow-md  top-0 z-50  pt-12rem fixed w-[81%] h-[70px] " >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
                <i className="fas fa-hand-sparkles text-3xl text-pink-500 mr-2"></i>
                <h1 className="text-2xl font-bold text-pink-600">Nailzby.rose</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-pink-600 font-medium hover:text-pink-800">Home</a>
                <a href="#services" className="text-gray-700 hover:text-pink-600">Services</a>
                <a href="#deals" className="text-gray-700 hover:text-pink-600">Top Deals</a>
                <a href="#gallery" className="text-gray-700 hover:text-pink-600">Gallery</a>
                <a href="#testimonials" className="text-gray-700 hover:text-pink-600">Testimonials</a>
                <a href="#contact" className="text-gray-700 hover:text-pink-600">Contact</a>
            </nav>
            
            {/* <div className="flex items-center space-x-4">
                <button className="md:hidden text-gray-700" id="mobile-menu-button">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
                <a href="#" className="hidden md:block bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition">Book Now</a>
            </div> */}
        </div>
        
        {/* <!-- Mobile Menu --> */}
        <div className="md:hidden hidden bg-white w-full absolute left-0 shadow-lg" id="mobile-menu">
            <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                <a href="#" className="text-pink-600 font-medium py-2 border-b">Home</a>
                <a href="#services" className="text-gray-700 py-2 border-b hover:text-pink-600">Services</a>
                <a href="#deals" className="text-gray-700 py-2 border-b hover:text-pink-600">Top Deals</a>
                <a href="#gallery" className="text-gray-700 py-2 border-b hover:text-pink-600">Gallery</a>
                <a href="#testimonials" className="text-gray-700 py-2 border-b hover:text-pink-600">Testimonials</a>
                <a href="#contact" className="text-gray-700 py-2 border-b hover:text-pink-600">Contact</a>
                <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded-full text-center hover:bg-pink-700 transition">Book Now</a>
            </div>
        </div>
    </header>


      
    </div>
  )
}

export default NavBar
