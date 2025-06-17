import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <div>
      <section id='testimonials' className="py-16 bg-rose-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16 fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client <span className="text-rose-600">Testimonials</span></h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear what our clients say about their Nailzby.rose experience.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Testimonial 1 --> */}
                <TestimonialCard time="2 weeks ago" comment ="The best nail salon I've ever been to! My gel extensions lasted a full 4 weeks without any chips. The attention to detail is incredible."  image = {43} name="Sarah J." alt = "Sarah J."/>
                


                
                
                {/* <!-- Testimonial 2 --> */}
                  <TestimonialCard time="1 month ago" comment ="I'm obsessed with the nail art designs here! The artist perfectly captured what I wanted and executed it beautifully."  image = {65} name="Mia T." alt = "Mia T."/>

               
                
                {/* <!-- Testimonial 3 --> */}
                 <TestimonialCard time="3 days ago" comment ="The most hygienic salon I've visited. They take cleanliness very seriously while still providing a warm, welcoming atmosphere."  image = {32} name="Emma L." alt = "Emma L."/>

            </div>
        </div>
    </section>


    </div>
  )
}

export default Testimonials
