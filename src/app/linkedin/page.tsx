'use client';
import Head from 'next/head';
import { useEffect } from 'react';

import styles from '../../styles/HomeLinkedin.module.css';

import PhotosBackground from '../../components/PhotosBackground';
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
      <PhotosBackground></PhotosBackground>
      <Head>
        <title>Pravega Racing - LinkedIn Articles</title>
        <meta
          name='description'
          content='We are a team of engineers who seek to enhance the learning experience of the student community at VIT University by implementation of engineering fundamentals within the context of building a formula style Racecar.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.sectionTitle}>LinkedIn Articles</h3>
        <div className={styles.articlesGrid}>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6785930710541725696?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6785165877101785088?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6722824383338954752?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6720280074110676993?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6718496752443392000?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6717388479908589569?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6716667226721660930?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6707276476678471680?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          <div className='col-12 col-md-6'>
            <iframe
              src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6705766467331223552?compact=1'
              height='284'
              width='504'
              frameBorder='0'
              allowFullScreen
              title='Embedded post'
            ></iframe>
            <br />
          </div>
          {/* Add more LinkedIn articles as needed */}
        </div>
      </main>
    </div>
  );
}
