// // src/components/CustomImage.tsx
// import React from 'react';
// import Image from 'next/image';
// import withDynamicImport from '@/hoc/withDynamicImport';
// import Loading from '@/components/Loading';

// const imageLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };

// const CustomImage = (props) => {
//   return <Image loader={imageLoader} {...props} />;
// };

// export default withDynamicImport(() => Promise.resolve(CustomImage), <Loading />);