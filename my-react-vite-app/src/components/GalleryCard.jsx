
import React, { useState } from 'react';
import { useCart } from '../Context/CartContex';
import { useNavigate } from 'react-router-dom';



const GalleryCard = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();
const A1 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630190/A1_xflh6r.jpg';
const A2 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630178/A2_dnjktz.jpg';
const A3 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630181/A3_okugnr.jpg';
const A4 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630204/A4_d7klna.jpg';
const A5 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630188/A5_uqksg4.jpg';
const A6 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630184/A6_wrjapw.jpg';
const A7 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630183/A7_vaeegv.jpg';
const A8 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630194/A8_rtyoty.jpg';
const A9 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630192/A9_kx00tu.jpg';
const A10= 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630190/A10_pmyr76.jpg';

   const dets = [
    { id: 1, name: "French Tip Elegance", image: A1, alt: "French Tip Nail", phrase: "Classic and timeless elegance", price: 28.00, slug:"french-tip-elegance" },
    { id: 2, name: "Glitter Ombre", image: A2 , alt: "Glitter Ombre", phrase: "Sparkles that catch the light", price: 35.00, slug:"glitter-ombre" },
    { id: 3, name: "Marble Effect", image: A3, alt: "Marble Effect", phrase: "Sophisticated stone-inspired design", price: 32.00, slug:"marble-effect" },
    { id: 4, name: "Pastel Dreams", image:A4, alt: "Pastel Dreams", phrase: "Soft colors for spring vibes", price: 25.00, slug:"pastel-dreams" },
    { id: 5, name: "Bold Red", image: A5, alt: "Bold Red", phrase: "Classic red for confidence", price: 22.00, slug:"bold-red" },
    { id: 6, name: "Abstract Art", image: A6, alt: "Abstract Art", phrase: "Unique artistic expression", price: 38.00, slug:"abstract-art" },
    { id: 7, name: "Geometric Patterns", image: A7, alt: "Geometric Patterns", phrase: "Modern lines and shapes", price: 30.00, slug:"geometric-patterns" },
    { id: 8, name: "Floral Fantasy", image:A8, alt: "Floral Fantasy", phrase: "Delicate flower designs", price: 42.00, slug:"floral-fantasy" },
    { id: 9, name: "Metallic Shine", image: A9, alt: "Metallic Shine", phrase: "Luxurious metallic finish", price: 40.00, slug:"metallic-shine" },
    { id: 10, name: "Sunset Gradient", image: A10, alt: "Sunset Gradient", phrase: "Warm gradient colors", price: 33.00, slug:"sunset-gradient" },
  ];

  const openModal = (det) => {
    setSelectedImage(det);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleAddToCart = (e, det) => {
    e.stopPropagation();
    const product = {
      id: det.id,
      name: det.name,
      price: det.price,
      image: det.image,
      description: det.phrase,
    };
    // addToCart(product);
    navigate(`/product/${det.slug}`);
  };

  const handleModalAddToCart = (det) => {
    const product = {
      id: det.id,
      name: det.name,
      price: det.price,
      image: det.image,
      description: det.phrase,
    };
    addToCart(product);
    closeModal();
    navigate(`/product/${det.slug}`);
  };

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
            <p className="text-rose-200 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {det.phrase}
            </p>
            <p className="text-white font-semibold text-lg mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
              ${det.price.toFixed(2)}
            </p>
            <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(det);
                }}
                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full backdrop-blur-sm transition"
              >
                View Details
              </button>
              <button
                onClick={(e) => handleAddToCart(e, det)}
                className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
         <div
  className="relative max-w-4xl max-h-screen overflow-y-auto bg-white rounded-lg"
  onClick={(e) => e.stopPropagation()}
>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
              </div>

              <div className="md:w-1/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{selectedImage.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedImage.phrase}</p>
                  <p className="text-3xl font-bold text-rose-600 mb-6">${selectedImage.price.toFixed(2)}</p>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-gray-500">✓ Professional application</p>
                    <p className="text-sm text-gray-500">✓ Long-lasting finish</p>
                    <p className="text-sm text-gray-500">✓ High-quality materials</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => handleModalAddToCart(selectedImage)}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-6 rounded-lg font-medium transition"
                  >
                    Add to Cart - ${selectedImage.price.toFixed(2)}
                  </button>
                  <button
                    onClick={closeModal}
                    className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;
