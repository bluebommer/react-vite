import React from 'react'

const ServiceCard = ({name,description,price}) => {
  return (
    <div>
      <div className="service-card bg-white rounded-lg shadow-md overflow-hidden transition duration-300">
                    <div className="h-48 bg-pink-100 flex items-center justify-center">
                        {/* <i className={`${i}`}></i> */}
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
                        <p className="text-gray-600 mb-4">{description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-pink-600 font-bold">From ${price}</span>
                            <a href="#" className="text-pink-600 hover:text-pink-800 font-medium">Learn More</a>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ServiceCard
