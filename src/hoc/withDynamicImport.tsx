// src/hoc/withDynamicImport.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import SkeletonLoader from '@/components/SkeletonLoader';

const withDynamicImport = (
  importFunc: () => Promise<any>,
  loadingComponent: React.ReactElement<any, any> = <SkeletonLoader />
) => {
  return dynamic(importFunc, {
    loading: () => loadingComponent,
  });
};

export default withDynamicImport;