import React from 'react';

const FeatureCards = () => {
  const features = [
    {
      title: "Time Management",
      image: "https://i.ibb.co/KGkjMS4/istockphoto-1098407382-612x612.jpg",
    },
    {
      title: "Assignment Management",
      image: "https://i.ibb.co/0n5TTWN/download-7.jpg",
    },
    {
      title: "Feedback",
      image: "https://i.ibb.co/V9354ZL/download-4.png",
    },
    {
      title: "Search and Filter",
      image: "https://i.ibb.co/WfXDstH/kmc-fixingsearch-W.jpg",
    },
    {
      title: "Discussion",
      image: "	https://i.ibb.co/pwqZ9QR/download-8.jpg",
    },
    {
      title: "Chat and Message",
      image: "	https://i.ibb.co/yncQK2d/download-9.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
        <h1 className='text-4xl my-6'>Feature</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
         
            key={index}
            className="card  shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{feature.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
