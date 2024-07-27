// src/components/SkeletonLoader.tsx
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader: React.FC = () => {
  return (
    <div>
      <Skeleton height={200} />
      <Skeleton count={5} />
    </div>
  );
};

export default SkeletonLoader;