import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  // Scroll()
  return (
    <div>
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Collection</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">We offer a wide range of nail designs to keep your hands  looking their best.</p>
            </div>
            
            <div >
              
               <ServiceCard/>
               
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
