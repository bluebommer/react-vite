import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <section className="py-16 bg-rose-600 text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-rose-100 max-w-2xl mx-auto mb-8">Subscribe to receive exclusive offers, new design releases, and beauty tips straight to your inbox.</p>
            
            <div className="max-w-md mx-auto flex">
                <input type="email" placeholder="Your email address" 
                       className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none text-gray-800 w-full   border-gray-300 focus:border-rose-500 bg-gray-100"/>
                <button className="bg-gray-800 hover:bg-gray-900 px-6 py-3 rounded-r-lg font-medium transition z-3">
                    Subscribe
                </button>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Newsletter
