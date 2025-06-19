import React from 'react'

const ServiceCard = ({name,description,price,i,img}) => {
  return (
    <div>
      <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
                    <div className="h-48 bg-pink-100 flex items-center justify-center">
                        <i className={`${i}`}></i>
                          <img src={img} alt="" />
                    </div>
                    <div className="p-8 bg-gray-50 z-2 ">
                        <h3 className="text-xl font-bold text-gray-900 mt-14 mb-32">{name}</h3>
                        {/* <p className="text-gray-600 mb-4">{description}</p> */}
                        <div className="flex justify-between items-center  ">
                            <span className="text-pink-600 font-bold">From ${price}</span>
                            <a href="#" className="text-pink-600 hover:text-pink-800 font-medium">
                              <button className='bg-pink-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-pink-700 transition'>
                                View More
                              </button>
                            </a>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ServiceCard
