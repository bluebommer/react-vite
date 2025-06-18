import React from 'react'
import ServiceCard from './ServiceCard.jsx'

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Service 1 --> */}
                {/* <ServiceCard img ="../../asset/christmas/S1.jpeg"  name = "Stylish" description = "Relaxing foot treatment with nail shaping, callus removal, foot massage, and polish application." price = {35} i="fas fa-tooth text-6xl text-purple-500"/> */}
                <ServiceCard img ="../../asset/christmas/S2.jpeg"  name = "Seasonal" description = "Relaxing foot treatment with nail shaping, callus removal, foot massage, and polish application." price = {35} i="fas fa-tooth text-6xl text-purple-500"/>



                {/* <!-- Service 2 --> */}
               
  
                <ServiceCard img ="../../asset/stylish/St1.jpeg"  name = "Stylish" description = "Relaxing foot treatment with nail shaping, callus removal, foot massage, and polish application." price = {35} i="fas fa-tooth text-6xl text-purple-500"/>



               
                
                {/* <!-- Service 3 --> */}
                <ServiceCard img="../../asset/crosses/C1.jpeg" name = "Cross designs" description = "Long-lasting nail extensions with a natural look using high-quality gel products." price = {45} i="fas fa-gem text-6xl text-blue-500"/>
               
                
                {/* <!-- Service 4 --> */}
                 <ServiceCard img="../../asset/pink/P1.jpeg" name = "Pink designs" description = "Custom nail designs from simple patterns to intricate artwork to express your style." price = {15} i="fas fa-magic text-6xl text-yellow-500"/>
               
                
                {/* <!-- Service 5 --> */}
                 <ServiceCard img="../../asset/summer/Su1.jpeg" name = "Summer" description = "Chemical-free nail care using organic and vegan products for sensitive skin." price = {30} i="fas fa-leaf text-6xl text-green-500"/>
               
                
                {/* <!-- Service 6 --> */}
                 <ServiceCard img="../../asset/spring/Sp1.jpeg" name = "Spring" description = "Complete pampering experience combining manicure, pedicure, and hand/foot treatments." price = {75} i="fas fa-heart text-6xl text-red-500"/>

                {/* Service 7 */}
                  <ServiceCard img="../../asset/artist simple/A1.jpeg" name = "MInimal" description = "Complete pampering experience combining manicure, pedicure, and hand/foot treatments." price = {75} i="fas fa-heart text-6xl text-red-500"/>

               
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
