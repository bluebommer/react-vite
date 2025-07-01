import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <div className="flex items-center mb-4">
                        <i className="fas fa-hand-holding-heart text-2xl text-rose-400 mr-2"></i>
                        <h3 className="text-xl font-bold">Nailz<span className="text-white">by.rose
                          </span></h3>
                    </div>
                    <p className="text-gray-400">Premium nail services with a focus on hygiene, quality, and artistic excellence.</p>
                </div>
                
                <div>
                    <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-gray-400 hover:text-rose-400 transition">Home</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-rose-400 transition">Services</a></li>
                        <li><a href="#gallery" className="text-gray-400 hover:text-rose-400 transition">Gallery</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-rose-400 transition">About Us</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-rose-400 transition">Contact</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-bold mb-4">Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-rose-400 transition">Manicures</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-rose-400 transition">Pedicures</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-rose-400 transition">Gel Extensions</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-rose-400 transition">Nail Art</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-rose-400 transition">Nail Repair</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-bold mb-4">Business Hours</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li className="flex justify-between">
                            <span>Monday - Friday</span>
                            <span>9:00 AM - 7:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Saturday</span>
                            <span>10:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Sunday</span>
                            <span>Closed</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 mb-4 md:mb-0">© 2025 Nailzbyrose. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-rose-400 transition">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-rose-400 transition">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-rose-400 transition">
                        <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-rose-400 transition">
                        <i className="fab fa-tiktok"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    {/* Back to Top */}
    <button id="back-to-top" className="fixed bottom-8 right-8 bg-rose-500 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300">
        <i className="fas fa-arrow-up">👆</i>
    </button>
    </div>
  )
}

export default Footer
