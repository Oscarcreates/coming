import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import logo from '/assets/transparentChora.png'

const Body = () => {

  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email) return alert("Please enter an email");

    const templateParams = {
      email: email,
    };

    emailjs.send(
      "service_z9446uu",
      "template_sgrfaat",
      templateParams,
      "mFTlttSKWEdNXtuOf"
    )
    .then(() => {
      alert("You will be notified!");
      setEmail(""); // Clear input
    })
    .catch((error) => {
      console.error(error);
      alert("Something went wrong");
    });
  };

  return (
    <>
      <div className='h-[600px] flex flex-col items-center justify-center text-center mt-[140px] md:mt-[30px]'>

        <div className='mx-auto flex justify-center px-4'>
          <img className='w-[150px]' src={logo} alt="" />
        </div>

        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">Coming Soon</h1>
        <p className='text-gray-400 my-4'>
          Get ready everyone, we are currently working on something awesome
        </p>


        <form onSubmit={sendEmail} className='flex items-center my-6'>
          <input
            className='py-2 px-4 text-white border-gray-400 border rounded-sm'
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className='text-black px-4 ml-2 py-2 border border-gray-300 bg-white rounded-sm cursor-pointer '
          >
            Notify Me
          </button>
        </form>

  
        <div className='flex my-6 gap-4'>
         <a href="https://twitter.com/ChoraBridge" target="_blank" rel="noopener noreferrer">
  <FaSquareXTwitter color='white' size={30} />
</a>
          <a href="">
            <FaLinkedin color='white' size={30} />
          </a>
         <a href="https://www.instagram.com/chora_bridge/">
            <FaSquareInstagram color='white' size={30} />
         </a> 
          <a href="wa.link/hmbire">
            <FaWhatsapp color='white' size={30} />
          </a>
        </div>
        
      </div>
    </>
  )
}

export default Body
