import React, {useEffect} from 'react';


const PrBackground: React.FC = () => {
  const imageUrl = '/images/general/practivities/0.png';
  const fontUrl = 'https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap';

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = fontUrl;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);  


  return (
    <div className='relative'>
      <img
        src={imageUrl}
        style={{
          filter: 'brightness(50%)',
          height: '25rem',
          objectFit: 'cover',
        }}
        className='left-0 w-full'
      />
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="text-4xl mb-4" style={{ fontFamily: "'Lato', Helvetica, Arial, sans-serif", fontWeight: '300' }}>
          PR activities
        </p>
        <p className="text-xl" style={{ fontFamily: "'Lato', Helvetica, Arial, sans-serif", fontWeight: '300' }}>
          We do our best to keep our sponsors satisfied by branding them through our various PR activities and exciting marketing campaigns

        </p>
      </div>
    </div>
  );
};

export default PrBackground;
