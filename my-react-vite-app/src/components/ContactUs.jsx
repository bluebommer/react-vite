import React, { useState } from 'react'
import emailjs from 'emailjs-com'
const ContactUs = () => {
    const[formData,setFormData] = useState({
        name:"",
        email:"",   
        phone: "",
        message:""
    });
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Sending:',formData);
        emailjs.send(
            "service_vrt1ur8", //serviceid
            'template_vd9lkds',//templateid
            formData,
            'XvE1xDdcbNyAO9s9K'// public key

        )
        .then((result) =>{
            alert('Message sent successfully!');
            setFormData({ name:"",email:"",   phone: "",message:""});
        })
        .catch((error) =>{
            alert('Message failed to send!   ');
            console.error(error);
        });
    };
  return (
    <div>
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-rose-50 rounded-2xl shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:w-1/2 bg-rose-600 text-white p-12">
                        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                        <p className="mb-8">Have questions or want to book an appointment? Reach out to us through any of these channels.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-white/20 p-3 rounded-full mr-4">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold">Location</h4>
                                    <p>123 Beauty Street, Suite 45 
                                      New York, NY 10001</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-white/20 p-3 rounded-full mr-4">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p>405-593-3199</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-white/20 p-3 rounded-full mr-4">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p>rose.aweathers@yahoo.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-10">
                            <h4 className="font-bold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
                                    <i className="fab fa-pinterest-p"></i>
                                </a>
                                <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition">
                                    <i className="fab fa-tiktok"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 p-12">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label  className="block text-gray-700 mb-2">Name</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:outline-none" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                            
                            <div className="mb-4">
                                <label  className="block text-gray-700 mb-2">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:outline-none" name="email" value={formData.email} onChange={handleChange}/>
                            </div>
                            
                            <div className="mb-4" >
                                <label  className="block text-gray-700 mb-2">Phone</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:outline-none" name="phone" value={formData.phone} onChange={handleChange}/>
                            </div>
                            
                            <div className="mb-6">
                                <label  className="block text-gray-700 mb-2">Message</label>
                                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:outline-none" name="message" value={formData.message} onChange={handleChange}></textarea>
                            </div>
                            
                            <button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-medium transition">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default ContactUs
