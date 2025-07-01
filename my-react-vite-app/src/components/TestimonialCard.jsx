import React from 'react'

const TestimonialCard = ({time,comment, image, name,alt}) => {
  return (
    <div>
      <div className ="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition fade-in delay-1">
                    <div className ="flex items-center mb-4">
                        <div className ="text-yellow-400 mr-2">
                            <i className ="fas fa-star"></i>
                            <i className ="fas fa-star"></i>
                            <i className ="fas fa-star"></i>
                            <i className ="fas fa-star"></i>
                            <i className ="fas fa-star"></i>
                        </div>
                        <span className ="text-gray-500 text-sm">{time}</span>
                    </div>
                    <p className ="text-gray-700 mb-6">{comment}</p>
                    <div className ="flex items-center">
                        <img src={`https://randomuser.me/api/portraits/women/${image}.jpg`}
                             alt={alt} 
                             className ="w-12 h-12 rounded-full mr-4 object-cover"/>
                        <div>
                            <h4 className ="font-bold text-gray-800">{name}</h4>
                            <p className ="text-gray-500 text-sm">Regular Client</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default TestimonialCard
