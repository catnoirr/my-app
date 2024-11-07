import React from 'react';

const ThirdSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-50">
      {/* Left Section - Text and Button */}
      <div className="md:w-1/2 space-y-6 h-screen flex flex-col">
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">Our Dedicated Communities</h2>
        <p className="text-gray-600">
          Explore our focused communities designed to cater to different professional needs
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700">
          Choose Your Community
        </button>
        </div>
        <div className='flex'>
        {/* Community Cards */}
        <div className=" flex flex-col md:flex-row  gap-4">
          {/* <CommunityCard
            title="Startups & Founders"
            description="Learn more about our resources for startups."
            className="p-0"
          /> */}
          <div  className="flex flex-col   p-4 bg-white shadow-md rounded-lg mr-10"> 
          <h3 className="text-lg font-semibold text-gray-800">Startups & Founders</h3>
          <p>
          Learn more about our resources for startups.</p>
          </div>
          <div  className="flex flex-col justify-between  p-4 bg-white shadow-md rounded-lg"> 
          <h3 className="text-lg font-semibold text-gray-800">Startups & Founders</h3>
          <p>
          Learn more about our resources for startups.</p>
          </div>
          
            </div>

          </div>
          <CommunityCard
            title="Freelancers & Creatives"
            description="Join a space for freelancers to thrive."
            imageSrc="link_to_image" // Replace with actual image link
          />
        </div>

      {/* Right Section - Image */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
        <div className="relative">
          <img
            src="./HeroImage2.png" // Replace with actual image link
            alt="Community Image"
            className="rounded-lg shadow-lg"
          />
          
        </div>
      </div>
    </section>
  );
};

// Component for each community card
const CommunityCard = ({ title, description, imageSrc }) => (
  <div className="flex items-center  p-4 bg-white shadow-md rounded-lg">
    {imageSrc && <img src={imageSrc} alt={title} className="w-16 h-16 rounded-md" />}
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default ThirdSection;
