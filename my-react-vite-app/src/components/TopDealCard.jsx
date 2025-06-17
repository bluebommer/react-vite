import React from 'react'

const TopDealCard = ({name,description,newprice,oldprice,percent,background,grad1,grad2}) => {
  return (
    <div className='hover:pt-2 pb-2 transition-[hover,0.13s]'>
       <div className="relative bg-white rounded-lg shadow-lg overflow-hidden ">
                    <div className={`deal-badge text-white ${background}`} >{percent}%</div>
                    <div className={`h-48 bg-gradient-to-r ${grad1} ${grad2} flex items-center justify-center`}>
                        <i className="fas fa-heart text-6xl text-white"></i>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-gray-400 line-through mr-2">${oldprice}</span>
                                <span className="text-pink-600 font-bold">${newprice}</span>
                            </div>
                            <a href="#" className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition">Buy Now</a>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default TopDealCard
