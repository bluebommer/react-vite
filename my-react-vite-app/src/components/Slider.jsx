import React from 'react'
import SliderCard from './SliderCard.jsx';
import Scroll from './Scroll.js';

const Slider = () => {
  // const slides = document.querySelectorAll('.slide');
  //       const indicators = document.querySelectorAll('.slide-indicator');
  //       let currentSlide = 0;
        
  //       function showSlide(index) {
  //           slides.forEach(slide => slide.classList.remove('active'));
  //           indicators.forEach(indicator => indicator.classList.remove('bg-pink-600', 'opacity-100'));
            
  //           slides[index].classList.add('active');
  //           indicators[index].classList.add('bg-pink-600', 'opacity-100');
  //           currentSlide = index;
  //       }
        
  //       indicators.forEach(indicator => {
  //           indicator.addEventListener('click', () => {
  //               const slideIndex = parseInt(indicator.getAttribute('data-slide'));
  //               showSlide(slideIndex);
  //           });
  //       });
        
  //       // Auto-advance slides
  //       setInterval(() => {
  //           const nextSlide = (currentSlide + 1) % slides.length;
  //           showSlide(nextSlide);
  //       }, 5000);
  //       Scroll();
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
const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000) // every 5 seconds
    return () => clearInterval(interval)
  }, [])
  

  return (
    <div>
       <section id="home" className="hero-bg text-white py-20 md:py-32 relative">
        <div className="container mx-auto px-4 relative">
          <SliderCard name="Premium Nail Care Services" description="Experience luxury nail treatments with our expert technicians using only the finest products." cta="Book Your Appointment" status="active"/>

            
            <SliderCard name="Summer Nail Specials" description="Get beach-ready with our seasonal nail designs and treatments at special prices." cta="View Deals" status=""/>

            <SliderCard name="Gel & Acrylic Extensions" description="Long-lasting, beautiful nails that complement your personal style." cta="Our Services" status=""/>
           
            
            
            
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
