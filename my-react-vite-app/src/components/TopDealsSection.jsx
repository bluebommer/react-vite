import React from 'react';
import { Link } from 'react-router-dom';

const TopDealsSection = () => {
  const S8  = 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630213/S8_ffylre.jpg';
const Su4 = 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630174/Su4_uxfl7y.jpg';
const S = 'https://res.cloudinary.com/dpwmay6fc/image/upload/v1751630170/16_qqujdd.jpg';
  const topDeals = [
    {
      name: "Valentine's Special",
      slug: "valentines-special", // Add slug for routing
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
      slug: "summer-glow", // Add slug for routing
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
      slug: "winter-wonderland", // Add slug for routing
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
      slug: "classic-red", // Add slug for routing
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {
        topDeals.map((deal, index) => (
          <div className='hover:pt-2 pb-2 transition-[hover,0.13s]' key={index}>
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className={`deal-badge text-white ${deal.background}`}>{deal.percent}%</div>
              <div className={`h-48 bg-gradient-to-r ${deal.grad1} ${deal.grad2} flex items-center justify-center`}>
                <i className="fas fa-heart text-6xl text-white">
                  <img src={deal.img} alt='' />
                </i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 mt-6">{deal.name}</h3>
                <div className="flex justify-between items-center mt-16">
                  <div>
                    <span className="text-gray-400 line-through mr-2">${deal.oldprice}</span>
                    <span className="text-pink-600 font-bold">${deal.newprice}</span>
                  </div>
                  <Link 
                    to={`/product/${deal.slug}`} 
                    className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition"
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