import React, { useEffect, useState } from 'react'
import SliderCard from './SliderCard.jsx';

const Slider = () => {
  const slides = [
    {
      name: 'Premium Nail Care Services',
      description: 'Experience luxury nail treatments with our expert technicians using only the finest products.',
      cta: 'Book Your Appointment',
      image: "../../asset/bg-slide/all-nails-or-luxury-handmade-press-on-nails-or-reusable-and-durable-fancyb-press-on-nails.jpg"
    },
    {
      name: 'Summer Nail Specials',
      description: 'Get beach-ready with our seasonal nail designs and treatments at special prices.',
      cta: 'View Deals',
      image: "../../asset/bg-slide/beautiful-composition-spa-bath-concept-with-copyspace_23-2148094319.jpg"
    },
    {
      name: 'Gel & Acrylic Extensions',
      description: 'Long-lasting, beautiful nails that complement your personal style.',
      cta: 'Our Services',
      image: "../../asset/bg-slide/close-up-nail-art-table_1048944-11034075.jpg"
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000) // every 5 seconds
    return () => clearInterval(interval)
  }, [])

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  }

  return (
    <div>
      <section id="home" className="hero-bg text-white py-20 md:py-32 relative h-[600px] overflow-hidden">
        <div className="container mx-auto px-4 relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-1000 ease-in-out absolute inset-0 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <SliderCard
                image={slide.image}
                name={slide.name}
                description={slide.description}
                cta={slide.cta}
                status={index === activeIndex ? 'active' : ''}
              />
            </div>
          ))}
          
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-10">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-3 h-3 rounded-full focus:outline-none transition-opacity ${
                  index === activeIndex ? 'bg-white opacity-100' : 'bg-white opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Slider