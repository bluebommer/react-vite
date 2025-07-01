import React from 'react'
import AboutUs from './AboutUs.jsx';
import ContactUs from './ContactUs.jsx';
import Footer from './Footer.jsx';
import Gallery from './Gallery.jsx';
import NavBar from './NavBar.jsx';
import Newsletter from './Newsletter.jsx';
import Services from './Services.jsx';
import Slider from './Slider.jsx';
import Testimonials from './Testimonials.jsx';
import TopDeals from './TopDeals.jsx';
import TopDealsSection from './TopDealsSection.jsx';


const Home = () => {
  return (
  
      <div className='font-sans mt-[50px]'>
      
      {/* <NavBar/> */}
        <Slider/>
         <Services/>
          <TopDeals/>
          {/* <TopDealsSection/> */}
          <Gallery/>
           <AboutUs/>
            <Testimonials/>
            <ContactUs/>
            <Newsletter/>
            <Footer/>
        
      {/* <Services/>
      <TopDeals/>
      <Gallery/>
      <AboutUs/>
      <Testimonials/>
      <ContactUs/>
      <Newsletter/>
      <Footer/>
     */}
   
  

    </div>
  )
}

export default Home
