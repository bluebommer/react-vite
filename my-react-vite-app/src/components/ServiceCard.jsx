// import React from 'react'
import React from 'react'
import { Link } from 'react-router-dom';


const ServiceCard = () => {
  const S2 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630213/S2_ulfoy3.jpg'; 
const St1= 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630159/St1_urkszb.jpg'; 
const C1 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630139/C1_xnbyvu.jpg';
const P1 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630166/P1_wn7c8n.jpg';
const Su1=  'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630176/Su1_z57yfq.jpg';
const Sp1= 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630141/Sp1_nythq5.jpg';
const S1 ='https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630170/1_vnyl8m.jpg';
  const services = [
  {
    name: "Season Collection",
    slug: "season-collection",
    description: "Relaxing foot treatment with nail shaping, callus removal, foot massage, and polish application.",
    price: 40,
    img: S2,
    i:"fas fa-tooth text-6xl text-purple-500",
    collectionName: "season" // This should match your folder name
  },
  {
    name: "Stylish", 
    slug: "stylish",
    description: "Relaxing foot treatment with nail shaping, callus removal, foot massage, and polish application.",
    price: 35,
    img: St1,
    i:"fas fa-tooth text-6xl text-purple-500",
    collectionName: "minimalist" // This should match your folder name
  },
  {
    name: "Cross designs",
    slug: "cross-designs",
    description: "Long-lasting nail extensions with a natural look using high-quality gel products.", 
    price: 60,
    img: C1,
    i:"fas fa-gem text-6xl text-blue-500",
    collectionName: "valentines" // This should match your folder name
  },
  {
    name: "Pink designs",
    slug: "pink-designs",
    description: "Custom nail designs from simple patterns to intricate artwork to express your style.", 
    price: 50,
    img: P1,
    i:"fas fa-magic text-6xl text-yellow-500",
    collectionName: "valentines" // This should match your folder name
  },
    {
    name: "Summer",
    slug: "summer",
    description: "Custom nail designs from simple patterns to intricate artwork to express your style.", 
    price: 40,
    img: Su1,
    i:"fas fa-leaf text-6xl text-green-500",
    collectionName: "valentines" // This should match your folder name
  },
   {
    name: "Spring",
    slug: "spring",
    description: "Complete pampering experience combining manicure, pedicure, and hand/foot treatments.", 
    price: 75,
    img: Sp1,
    i:"fas fa-heart text-6xl text-red-500",
    collectionName: "valentines" // This should match your folder name
  },
   {
    name: "MInimal",
    slug: "minimal",
    description: "Complete pampering experience combining manicure, pedicure, and hand/foot treatments.", 
    price: 75,
    img: S1,
    i:"fas fa-heart text-6xl text-red-500",
    collectionName: "valentines" // This should match your folder name
  }
  
];
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((product, index) =>(
        <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300" key={index}>
        <div className="h-48 bg-pink-100 flex items-center justify-center">
          <i className={`${product.i}`}></i>
          <img src={product.img} alt="" />
        </div>
        <div className="p-8 bg-gray-50 z-2 ">
          <h3 className="text-xl font-bold text-gray-900 mt-14 mb-32">{product.name}</h3>
          {/* <p className="text-gray-600 mb-4">{description}</p> */}
          <div className="flex justify-between items-center  ">
            <span className="text-pink-600 font-bold">From ${product.price}</span>
           
            {/* <button 
              // onClick={handleViewMore}
              className='bg-pink-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-pink-700 transition'
            >
              Buy Now
            </button> */}
             <Link 
                    to={`/product/${product.slug}`} 
                    className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition"
                  >
                    Buy Now
                  </Link>
          </div>
        </div>
      </div>
      ))

      }
    </div>
  )
}

export default ServiceCard