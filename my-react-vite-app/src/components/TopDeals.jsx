import React from 'react'
import TopDealCard from './TopDealCard.jsx'

const TopDeals = () => {
  return (
    <div>
      <section id="deals" className="py-16 bg-pink-100">
        <div className="container mx-auto px-4">
           <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Deals</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Special offers to help you look fabulous while saving money.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* <!-- Deal 1 --> */}
                <TopDealCard name="Valentine's Special"description="Romantic nail designs with heart patterns and red/pink color schemes."newprice={45.50} oldprice={65} background="bg-pink-600" percent={30} grad1="from-pink-400" grad2 = "to-pink-600" img="../../asset/christmas/S8.jpeg"/>
                
                
                {/* <!-- Deal 2 --> */}
                <TopDealCard name="Summer Glow"description="Bright summer colors with tropical designs and UV protection top coat."newprice={44} oldprice={55} background="bg-purple-600" percent={20} grad1="from-purple-400" grad2 = "to-purple-600" img="../../asset/summer/Su4.jpeg"/>


               {/* Deal 3 */}
                <TopDealCard name="Winter Wonderland"description="Sparkling winter designs with snowflakes and icy blue/silver colors."newprice={45} oldprice={60} background="bg-blue-600" percent={25} grad1="from-blue-400" grad2 = "to-blue-600" img="../../asset/artist simple/A16.jpeg"/>

            </div>
        </div>

      </section>
    </div>
  )
}

export default TopDeals
