import React, { useEffect, useState } from 'react'
import SliderCard from './SliderCard.jsx';
import Scroll from './Scroll.js';

const Slider = () => {

  
  const slides = [
  {
    name: 'Premium Nail Care Services',
    description:
      'Experience luxury nail treatments with our expert technicians using only the finest products.',
    cta: 'Book Your Appointment',
  },
  {
    name: 'Summer Nail Specials',
    description:
      'Get beach-ready with our seasonal nail designs and treatments at special prices.',
    cta: 'View Deals',
  },
  {
    name: 'Gel & Acrylic Extensions',
    description:
      'Long-lasting, beautiful nails that complement your personal style.',
    cta: 'Our Services',
  },
]
const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000) // every 5 seconds
    return () => clearInterval(interval)
  }, [])


  return (
    <div>
       <section id="home" className="hero-bg text-white py-20 md:py-32 relative h-[450px]">
        <div className="container mx-auto px-4 relative">
          {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-opacity duration-1000 ease-in-out absolute top-0 left-0 w-full ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <SliderCard
              name={slide.name}
              description={slide.description}
              cta={slide.cta}
              status={index === activeIndex ? 'active' : ''}
            />
          </div>
        ))}
            
            
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
                <button className="slide-indicator w-3 h-3 rounded-full bg-white opacity-50 focus:outline-none" data-slide="0"></button>
                <button className="slide-indicator w-3 h-3 rounded-full bg-white opacity-50 focus:outline-none" data-slide="1"></button>
                <button className="slide-indicator w-3 h-3 rounded-full bg-white opacity-50 focus:outline-none" data-slide="2"></button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Slider
