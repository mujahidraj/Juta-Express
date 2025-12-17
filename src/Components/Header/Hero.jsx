import React from 'react';
import heroImage from '../../assets/Untitled design.png'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  return (
    <div className="hero md:relative  -z-10  ">
      
      <div className="  flex md:relative mx-auto  flex-col  gap-7 lg:flex-row">
        <img className='md:w-full min-h-screen' src={heroImage} alt="" />
        <div className='absolute backdrop-blur-2xl rounded-sm flex flex-col md:flex-row w-11/12 items-center md:top-17 top-30 md:left-13 left-5 mx-auto'>
          <Player
          autoplay
          loop
          src="https://lottie.host/8808d876-22d6-4b3c-af56-ab903c0be43d/kaV1Tt5G42.json" className='md:h-125 md:w-125 h-70 w-70'
        >
        </Player>
        <div className='md:px-20 py-5 px-3'>
          <h1 className="md:text-5xl text-xl font-bold">Step up your style with exclusive footwear</h1>
          <p className="md:py-6 text-lg py-2">
           Exclusive footwear | Delivery All Over Bangladesh | WhatsApp/Call: <span className='font-bold'>+8801796059406</span> | Contact us to Order | Email: <span className='font-bold'>jutaexpress@gmail.com</span>
          </p>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;