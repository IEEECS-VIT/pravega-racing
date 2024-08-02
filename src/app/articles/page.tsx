'use client';
import { useEffect } from 'react';

import styles from '../../styles/HomeArticles.module.css';

import PhotosBackground from '../../components/PhotosBackground';
const articles = [
  {
    title: "Meet Pravega Racing - One Of India's Best Formula Student Teams",
    source: 'Blog',
    link: 'http://autogurus.blogspot.com/2020/01/meet-pravega-racing-one-of-indias-best.html?m=1',
    image: '/images/general/media/blog.png',
  },
  {
    title:
      'Vellore Engineering Students Ready to Test Their Formula Car in Germany',
    source: 'NEWS 18',
    link: 'http://www.news18.com/news/formula-one/vellore-engineering-students-ready-to-test-their-formula-car-in-germany-1261808.html',
    image: '/images/general/media/news18.png',
  },
  {
    title: 'VIT students’ F1 race car design comes up a winner in Italy',
    source: 'THE HINDU',
    link: 'http://www.thehindu.com/todays-paper/tp-national/tp-tamilnadu/vit-students-f1-race-car-design-comes-up-a-winner-in-italy/article5287188.ece',
    image: '/images/general/media/thehindu.png',
  },
  {
    title: 'Bhopal boys in Germany for motorcar design contest',
    source: 'HINDUSTAN TIMES',
    link: 'http://www.hindustantimes.com/bhopal/bhopal-boys-in-germany-for-motorcar-design-contest/story-08ERPLWAuK45Iu8iMRAKdL.html',
    image: '/images/general/media/hindustantimes.png',
  },
  {
    title: 'Carbon Fibre Composites in Indian Racecar-PRV',
    source: '',
    link: '/images/onlineArticle.pdf',
    image: '/images/general/media/composite.png',
  },
];

export default function Home() {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    const status = document.getElementById('status');

    window.addEventListener('load', () => {
      status.style.display = 'none';
      preloader.style.display = 'none';
    });
  }, []);

  return (
    <div className={styles.container}>
      <PhotosBackground />

      <div id='preloader'>
        <div id='status'>&nbsp;</div>
      </div>

      <main className={styles.main}>
        <h2 className={styles.mainTitle}>Online Articles</h2>
        <div className={styles.articlesGrid}>
          {articles.map((article, index) => (
            <div className={styles.articleCard} key={index}>
              <a href={article.link} target='_blank' rel='noopener noreferrer'>
                <div className={styles.overlay}>
                  <div className={styles.overlayBackground}></div>
                  <div
                    className={`${styles.overlayContent} ${styles.textCenter}`}
                  >
                    <span className={styles.overlayHeading}>
                      {article.title}
                    </span>
                    {article.source && (
                      <span className={styles.overlayText}>
                        <b>{article.source}</b>
                      </span>
                    )}
                  </div>
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`${styles.overlayImage} ${styles.teamPhoto}`}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>{/* Add footer content here */}</footer>
    </div>
  );
}
