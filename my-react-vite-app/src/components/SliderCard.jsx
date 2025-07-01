import React from 'react'

const SliderCard = ({ name, description, cta, status, image }) => {
  return (
    <div className={`slide ${status} relative h-full w-full`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-105 "
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {name}
          </h2>
          <p className="text-xl mb-8 text-white drop-shadow-md">
            {description}
          </p>
          <a 
            href="#deals" 
            className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition inline-block shadow-lg"
          >
            {cta}
          </a>
        </div>
      </div>
    </div>
  )
}

export default SliderCard