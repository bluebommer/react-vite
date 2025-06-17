import React from 'react'
import GalleryCard from './GalleryCard'

const Gallery = () => {
  return (
    <div>
       <section id="gallery" className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nail <span className="text-rose-600">Gallery</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse our collection of stunning nail designs for inspiration.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <!-- Nail Set 1 --> */}
                <GalleryCard name="French Tip Elegance" image="https://images.unsplash.com/photo-1596704017256-dfb5e4dc21a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt ="French Tip Nails" phrase ="Classic french tips with a modern twist" />


               
                {/* <!-- Nail Set 2 --> */}
                <GalleryCard name="Glitter Ombre" image="https://images.unsplash.com/photo-1604658243847-17375af581fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt ="Glitter Ombre Nails" phrase ="Sparkling gradient effect with fine glitter" />


                
                {/* <!-- Nail Set 3 --> */}
                <GalleryCard name="Marble Effect" image="https://images.unsplash.com/photo-1596704017351-169d0eac4a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt ="Marble Nails" phrase ="Elegant marble design with gold accents" />

                
               
                
                {/* <!-- Nail Set 4 --> */}
                 <GalleryCard name="Pastel Dreams" image="https://images.unsplash.com/photo-1596704017351-169d0eac4a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt ="Pastel Nails" phrase ="Soft pastel colors with delicate floral art" />




                
                
                {/* <!-- Nail Set 5 --> */}
                <GalleryCard name="Bold Red" image="https://images.unsplash.com/photo-1596704017351-169d0eac4a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt ="Bold Red Nails" phrase ="Classic red with glossy finish" />


               
                
                {/* <!-- Nail Set 6 --> */}
                <GalleryCard name="Abstract Art" image="https://images.unsplash.com/photo-1596704017351-169d0eac4a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt ="Abstract Art Nails" phrase ="Unique hand-painted abstract designs" />

            </div>
            
            <div className="text-center mt-12">
                <button className="border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white px-6 py-3 rounded-full font-medium transition">
                    View All Designs
                </button>
            </div>
        </div>
    </section>


    </div>
  )
}

export default Gallery
