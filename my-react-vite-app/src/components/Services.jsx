import React from 'react'
import ServiceCard from './ServiceCard.jsx'

const Services = () => {
  // Scroll()
  return (
    <div>
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Our Collection</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">We offer a wide range of nail designs to keep your hands  looking their best.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Service 1 --> */}
                <ServiceCard name = "Manicure" description = "Our classic manicure includes nail shaping, cuticle care, hand massage, and polish application." price = {25} i ="fas fa-spa text-6xl text-pink-500"/>
                
                {/* <!-- Service 2 --> */}
                <ServiceCard name = "Pedicure" description = "Relaxing foot treatment with nail shaping, callus removal, foot massage, and polish application." price = {35} i="fas fa-tooth text-6xl text-purple-500"/>


               
                
                {/* <!-- Service 3 --> */}
                <ServiceCard name = "Gel Extensions" description = "Long-lasting nail extensions with a natural look using high-quality gel products." price = {45} i="fas fa-gem text-6xl text-blue-500"/>
               
                
                {/* <!-- Service 4 --> */}
                 <ServiceCard name = "Nail Art" description = "Custom nail designs from simple patterns to intricate artwork to express your style." price = {15} i="fas fa-magic text-6xl text-yellow-500"/>
               
                
                {/* <!-- Service 5 --> */}
                 <ServiceCard name = "Organic Treatments" description = "Chemical-free nail care using organic and vegan products for sensitive skin." price = {30} i="fas fa-leaf text-6xl text-green-500"/>
               
                
                {/* <!-- Service 6 --> */}
                 <ServiceCard name = "Spa Packages" description = "Complete pampering experience combining manicure, pedicure, and hand/foot treatments." price = {75} i="fas fa-heart text-6xl text-red-500"/>


               
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
