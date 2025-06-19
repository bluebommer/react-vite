import React from 'react'
import AboutUs from './components/AboutUs.jsx';
import ContactUs from './components/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import NavBar from './components/NavBar.jsx';
import Newsletter from './components/Newsletter.jsx';
import Services from './components/Services.jsx';
import Slider from './components/Slider.jsx';
import Testimonials from './components/Testimonials.jsx';
import TopDeals from './components/TopDeals.jsx';


const Home = () => {
  return (
  
      <div className='font-sans'>
      
      <NavBar/>
        <Slider/>
      <Services/>
      <TopDeals/>
      <Gallery/>
      <AboutUs/>
      <Testimonials/>
      <ContactUs/>
      <Newsletter/>
      <Footer/>
    
    {/* <section id='home' style={{height:'100vh'}}> Home</section>
     <section id='services' style={{height:'100vh'}}> Service</section>
     <section id='deals' style={{height:'100vh'}}> Top Deals</section>
     <section id='gallery' style={{height:'100vh'}}> Gallery </section>
     <section id='testimonials' style={{height:'100vh'}}> Testimonials</section>
     <section id='contact' style={{height:'100vh'}}> Contact Us</section>  */}
  

    </div>
  )
}

export default Home
