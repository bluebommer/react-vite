import React from 'react'

const GalleryCard = ({name,image,alt,phrase}) => {
  return (
    <div>
       <div className="nail-card relative rounded-2xl overflow-hidden shadow-lg group">
                    <img src={image} 
                         alt= {alt}
                         className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"/>
                    <div className="nail-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold mb-2">{name}</h3>
                        <p className="text-rose-200 mb-4">{phrase}</p>
                        <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full self-start transition">
                            View Details
                        </button>
                    </div>
                </div>
    </div>
  )
}

export default GalleryCard
