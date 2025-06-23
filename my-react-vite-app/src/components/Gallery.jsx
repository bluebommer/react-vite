import React from 'react'
import GalleryCard from './GalleryCard'

const Gallery = () => {
  return (
    <div>
      <section id="gallery" className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nail <span className="text-rose-600">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our collection of stunning nail designs for inspiration.
            </p>
          </div>
          
          {/* Fixed grid container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <GalleryCard />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery