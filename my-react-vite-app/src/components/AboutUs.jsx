import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1580485215573-66a5a2c61ae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                             alt="Nail Technician" 
                             className="rounded-2xl shadow-lg w-full max-w-md"/>
                        <div className="absolute -bottom-5 -left-5 bg-rose-100 p-6 rounded-xl shadow-lg">
                            <p className="text-4xl font-bold text-rose-600">5+</p>
                            <p className="text-gray-700">Years Experience</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 md:pl-12 fade-in delay-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About <span className="text-rose-600">Nailzby.rose</span></h2>
                    <p className="text-gray-600 mb-6">Founded in 2018, Nailzby.rose has been providing premium nail services with a focus on hygiene, quality, and artistic excellence. Our mission is to create beautiful, long-lasting nail sets that enhance your natural beauty.</p>
                    
                    <div className="mb-6">
                        <div className="flex items-start mb-4">
                            <div className="bg-rose-100 p-2 rounded-full mr-4">
                                <i className="fas fa-check text-rose-500"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-1">Certified Technicians</h4>
                                <p className="text-gray-600">All our nail artists are professionally trained and certified.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start mb-4">
                            <div className="bg-rose-100 p-2 rounded-full mr-4">
                                <i className="fas fa-check text-rose-500"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-1">Premium Products</h4>
                                <p className="text-gray-600">We use only the highest quality polishes and materials.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="bg-rose-100 p-2 rounded-full mr-4">
                                <i className="fas fa-check text-rose-500"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-1">Sanitary Standards</h4>
                                <p className="text-gray-600">Strict sterilization protocols for your safety and comfort.</p>
                            </div>
                        </div>
                    </div>
                    
                    <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium transition">
                        Learn More About Us
                    </button>
                </div>
            </div>
        </div>
    </section>


    </div>
  )
}

export default AboutUs
