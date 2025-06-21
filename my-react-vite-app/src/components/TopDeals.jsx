import React from 'react'
// import TopDealCard from './TopDealCard.jsx'
import TopDealsSection from './TopDealsSection'

const TopDeals = () => {
  return (
    <div >
      <section id="deals" className="py-16 bg-pink-100 ">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Deals</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Special offers to help you look fabulous while saving money.</p>
            </div>
            <div>
              
              <TopDealsSection/>

            </div>
        </div>

      </section>
    </div>
  )
}

export default TopDeals
