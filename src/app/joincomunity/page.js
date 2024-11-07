import React from 'react';
import Hero from '../components/HeroSection.jsx'; // Adjust the path if `Hero.js` is in a different directory
import Section from '../components/Section'; // Adjust the path if `Hero.js` is in a different directory
import SecondSection from '../components/Section2'; // Adjust the path if `Hero.js` is in a different directory

const Page = () => {
  return (
    <div className='bg-gray-100'>
      <Hero />
      {/* <Section/>
      <SecondSection/> */}
    </div>
  );
};

export default Page;
