import React from 'react';

const Section = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-28  bg-white">
      
      {/* Left Side Text Section */}
      <div className="md:w-1/2  md:mb-0 h-screen">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 pt-[59px] pr-[76px] pb-[45px] pl-[9px]">
          What is the Oohpoint Community Hub?
        </h1>
        <div className='pl-5 border-l-4 border-black'>
        <p className="text-gray-600 mb-6">
          Connect with like-minded individuals who share your goals and aspirations. Whether you’re a start-up founder, student, freelancer, or professional, there’s a place for you here.
        </p>
        <ul className="text-gray-600 mb-6 space-y-2">
          <li>• Collaboration</li>
          <li>• Real-time discussions</li>
          <li>• Diverse opportunities</li>
          <li>• Resource sharing</li>
        </ul>
        <a href="#" className="text-purple-600 font-semibold hover:underline">
          Join the Community →
        </a>
      </div>
      </div>

      {/* Right Side Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src="/Image_gallery.png" alt="Community" className="h-full" />
      </div>
      
    </section>
  );
};

export default Section;
