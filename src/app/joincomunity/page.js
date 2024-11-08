import React from 'react';
import Hero from '../components/HeroSection.jsx'; // Adjust the path if `Hero.js` is in a different directory
import Section from '../components/Section'; // Adjust the path if `Hero.js` is in a different directory
import SecondSection from '../components/Section2'; // Adjust the path if `Hero.js` is in a different directory
import SponsorshipSection from '../components/SponsorshipSection.jsx'
import Testimonials from '../components/Solved.jsx'
const Page = () => {
  return (
    <div className='bg-gray-100'>
      <Hero />
     
      <SecondSection/>
       <Section/>
       <SponsorshipSection/>
       <Testimonials/>
    </div>
  );
};

export default Page;
