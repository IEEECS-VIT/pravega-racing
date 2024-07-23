import React from 'react';

const PrBackground: React.FC = () => {
  const imageUrl = '/images/general/practivities/0.png'; 

  return (
    <div className="relative">
      <img
        src={imageUrl}
        style={{ filter: 'brightness(50%)', height: '25rem', objectFit:'cover'  }}
        className="left-0 w-full"
      />
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="text-4xl mb-4">
          PR activities
        </p>
        <p className="text-xl  ">
          We do our best to keep our sponsors satisfied by branding them through our various PR activities and exciting marketing campaigns
        </p>
      </div>
    </div>
  );
};

export default PrBackground;