import React, { useState } from 'react'

const GalleryCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const dets = [
    { name: "French Tip Elegance", image: "../../asset/All-images/A1.jpeg", alt: "French Tip Nail", phrase: "Classic and timeless elegance" },
    { name: "Glitter Ombre", image: "../../asset/All-images/A2.jpeg", alt: "Glitter Ombre", phrase: "Sparkles that catch the light" },
    { name: "Marble Effect", image: "../../asset/All-images/A3.jpeg", alt: "Marble Effect", phrase: "Sophisticated stone-inspired design" },
    { name: "Pastel Dreams", image: "../../asset/All-images/A4.jpeg", alt: "Pastel Dreams", phrase: "Soft colors for spring vibes" },
    { name: "Bold Red", image: "../../asset/All-images/A5.jpeg", alt: "Bold Red", phrase: "Classic red for confidence" },
    { name: "Abstract Art", image: "../../asset/All-images/A6.jpeg", alt: "Abstract Art", phrase: "Unique artistic expression" },
    { name: "Geometric Patterns", image: "../../asset/All-images/A7.jpeg", alt: "Geometric Patterns", phrase: "Modern lines and shapes" },
    { name: "Floral Fantasy", image: "../../asset/All-images/A8.jpeg", alt: "Floral Fantasy", phrase: "Delicate flower designs" },
    { name: "Metallic Shine", image: "../../asset/All-images/A9.jpeg", alt: "Metallic Shine", phrase: "Luxurious metallic finish" },
    { name: "Sunset Gradient", image: "../../asset/All-images/A10.jpeg", alt: "Sunset Gradient", phrase: "Warm gradient colors" },
  ]

  const openModal = (det) => {
    setSelectedImage(det);
  }

  const closeModal = () => {
    setSelectedImage(null);
  }

  return (
    <>
      {dets.map((det, index) => (
        <div 
          key={index} 
          className="group nail-card relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={() => openModal(det)}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src={det.image} 
              alt={det.alt}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="nail-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {det.name}
            </h3>
            <p className="text-rose-200 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {det.phrase}
            </p>
            <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full self-start transition transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
              View Details
            </button>
          </div>
        </div>
      ))}

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeModal}
              className="absolute -top-[-5px] right-[5px] text-[20px] z-4 text-white hover:text-rose-300 text-2xl font-bold z-10"
            >
              ✕
            </button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.name}</h3>
              <p className="text-rose-200">{selectedImage.phrase}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryCard