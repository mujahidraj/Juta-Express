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
          src="https://lottie.host/8740ae73-12df-467d-b878-727fe8a04dab/YmrEhnwj2C.json" className='md:h-125 md:w-125 h-70 w-70'
        >
        </Player>
        <div className='md:px-20 py-5 px-3'>
          <h1 className="md:text-5xl text-xl font-bold">Meet you desire with Juta Express!</h1>
          <p className="md:py-6 py-2">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;