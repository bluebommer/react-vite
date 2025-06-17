import React from 'react'

const SliderCard = ({name,description,cta,status}) => {
  return (
    <div>
      <div className={`slide ${status}`}>
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{name}</h2>
                    <p className="text-xl mb-8">{description}</p>
                    <a href="#deals" className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition inline-block">{cta}</a>
                </div>
            </div>
    </div>
  )
}

export default SliderCard
