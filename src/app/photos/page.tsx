'use client';
import { useEffect, useState } from 'react';

import styles from '../../styles/Home.module.css';
import PhotosBackground from '../../components/PhotosBackground';
import Loading from '../../components/Loading'; // Import the Loading component


const generateImagePaths = (count, basePath) => {
  return Array.from({ length: count }, (_, i) => `${basePath}/${i + 1}.jpg`);
};

const imageData = {
  "Formula Student Germany 2023": generateImagePaths(15, '/images/general/media/fsg23'),  // Adjust the count as needed
  "Formula Student East 2023": generateImagePaths(15, '/images/general/media/fse23'),    // Adjust the count as needed
  "Formula Bharat 2023": generateImagePaths(15, '/images/general/media/fb23'),
  "Formula Student Germany 2019": generateImagePaths(12, '/images/general/media/fsg19'),
  "Riviera 2019": generateImagePaths(10, '/images/general/media/riviera19'),
  "Riviera 2018": generateImagePaths(5, '/images/general/media/riviera18'),
  "Rollout 2018": generateImagePaths(6, '/images/general/media/rollout18'),
  "Formula SAE Australasia 2018": generateImagePaths(6, '/images/general/media/fSAE'),
  "Formula Student Germany 2017": generateImagePaths(8, '/images/general/media/fsg17'),
  "Grand Rollout 2017": generateImagePaths(6, '/images/general/media/rollout17'),
  "Riviera 2014": generateImagePaths(8, '/images/general/media/riviera14'),
  "Rollout 2014": generateImagePaths(10, '/images/general/media/launch14'),
  "Formula Student India 2016": generateImagePaths(7, '/images/general/media/fsi16'),
  "Formula Student India 2015": generateImagePaths(7, '/images/general/media/fsi15'),
  "Formula Student Germany 2016": generateImagePaths(9, '/images/general/media/fsg16'),
  "Formula Student Germany 2015": generateImagePaths(8, '/images/general/media/fsg15'),
  "Formula Student Germany 2014": generateImagePaths(10, '/images/general/media/fsg14'),

};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(
    'Formula Student Germany 2023',
  );
  const [currentImages, setCurrentImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setCurrentImages(imageData[activeCategory]);
      setLoading(false);
    }, 1500); // Adjust this time to match your image loading time
  }, [activeCategory]);

  const handleNavClick = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>{/* Header content */}</header>
      <div className={styles.content}>
        <nav className={styles.sidebar}>
          <ul className={styles.navList}>
            {Object.keys(imageData).map((category) => (
              <li
                key={category}
                className={`${styles.navItem} ${activeCategory === category ? styles.active : ''}`}
                onClick={() => handleNavClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>
        <main className={styles.main}>
          {loading ? <Loading /> : (

            <div className={styles.grid}>
              {currentImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Description of ${img}`}
                  className={styles.img}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
