// components/LoadingSkeleton.tsx
import React from 'react';
import styles from '../styles/LoadingSkeleton.module.css';

const LoadingSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeleton}></div>
    </div>
  );
};

export default LoadingSkeleton;
