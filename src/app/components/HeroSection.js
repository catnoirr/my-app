import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col gap-28 md:flex-row items-center justify-between p-8 md:p-16 bg-white">
      {/* Left Side Text Section */}
      <div className="md:w-1/2 mb-8 md:mb-0 h-content">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 h-h">
          Connect, Collaborate, And Grow With Oohpoint’s WhatsApp Communities!
        </h1>
        <p className="text-gray-600 mb-6">
          Join our dynamic communities of startups, founders, students, freelancers, and more—designed to help you build connections, access resources, and unlock new opportunities.
        </p>
        <button className=" buttoncolor text-white font-semibold px-6 py-3 rounded-lg hover:bg-white transition duration-300">
          Join Community
        </button>
      </div>

      {/* Right Side Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src="/HeroImage.png" alt="Community" className=" h-image" />
      </div>
    </section>
  );
};

export default Hero;
