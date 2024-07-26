import React from 'react';


const ContactUsbackground: React.FC = () => {
  const imageUrl = '/images/general/contactus/contact.png'; 

  return (
    <div className="relative w-full">
      <img
        src={imageUrl}
        style={{ filter: 'brightness(50%)', height: '25rem', objectFit: 'cover',objectPosition: 'bottom' }}
        className="left-0 w-full "
      />
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="text-4xl mb-4">
          Contact Us
        </p>
        <p className="text-xl ">
        If you have any queries or would like to know more about the team, feel free to contact us
        </p>
      </div>
    </div>
  );
};

export default ContactUsbackground;