import React from 'react';
import { Link } from 'react-router-dom';

const TopDealsSection = () => {
  const S8  = 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630213/S8_ffylre.jpg';
  const Su4 = 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630174/Su4_uxfl7y.jpg';
  const S = 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630170/16_qqujdd.jpg';
  
  const topDeals = [
    {
      name: "Valentine's Special",
      slug: "valentines-special",
      newprice: 45.50,
      oldprice: 65.00,
      percent: 30,
      background: "bg-red-500",
      grad1: "from-pink-400",
      grad2: "to-red-400",
      img: S8
    },
    {
      name: "Summer Glow",
      slug: "summer-glow",
      newprice: 44.00,
      oldprice: 60.00,
      percent: 27,
      background: "bg-yellow-500",
      grad1: "from-yellow-400",
      grad2: "to-orange-400",
      img: Su4
    },
    {
      name: "Winter Wonderland",
      slug: "winter-wonderland",
      newprice: 45.00,
      oldprice: 62.00,
      percent: 27,
      background: "bg-blue-500",
      grad1: "from-blue-400",
      grad2: "to-cyan-400",
      img: S
    },
    {
      name: "Classic Red",
      slug: "classic-red",
      newprice: 39.00,
      oldprice: 55.00,
      percent: 29,
      background: "bg-red-600",
      grad1: "from-red-500",
      grad2: "to-pink-500",
      img: S
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {
        topDeals.map((deal, index) => (
          <div className='hover:pt-2 pb-2 transition-all duration-300 w-full' key={index}>
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-full">
              {/* Deal Badge */}
              <div className={`absolute top-3 left-3 z-10 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-full ${deal.background}`}>
                {deal.percent}% OFF
              </div>
              
              {/* Image Section */}
              <div className={`h-56 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-r ${deal.grad1} ${deal.grad2} flex items-center justify-center p-4 relative overflow-hidden`}>
                <img 
                  src={deal.img} 
                  alt={deal.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-4 sm:p-6 flex flex-col justify-between h-auto">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 line-clamp-2">
                    {deal.name}
                  </h3>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-2 mt-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-gray-400 line-through text-sm sm:text-base">
                      ${deal.oldprice.toFixed(2)}
                    </span>
                    <span className="text-pink-600 font-bold text-lg sm:text-xl">
                      ${deal.newprice.toFixed(2)}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/product/${deal.slug}`} 
                    className="bg-pink-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-pink-700 transition-colors duration-200 whitespace-nowrap self-start sm:self-auto"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default TopDealsSection;