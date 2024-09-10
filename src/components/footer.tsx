'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '/src/styles/slider1.css';
import styles from '/src/styles/FollowPageCard.module.css';

export default function Footer() {
  const form = useRef();
  const [message, setMessage] = useState(''); // State for success/failure notification

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lc4i3wf', // Replace with your EmailJS service ID
        'template_zyzfuyw', // Replace with your EmailJS template ID
        form.current,
        'XTE3GS1zjUvWG9Url' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setMessage('Email sent successfully!');
          e.target.reset(); // Clear the input field
        },
        (error) => {
          setMessage('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <footer
      className='container bg-gray-800'
      style={{ maxWidth: '100%', height: 200 }}
    >
      <div className='footThing mx-5 md:mx-20 flex items-center'>
        <div className='mt-4'>
          <img src='images/general/logowhite.png' className='footImg'></img>
          <div className='buttonsAtEnd ml-2'>
            <a
              href='https://www.instagram.com/pravegaracing/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className={`${styles.socialButton} ${styles.instagram} `}
            >
              <button
                className={`${styles.socialButton} ${styles.instagram} `}
                aria-label='Instagram'
              ></button>
            </a>
            <a
              href='https://m.facebook.com/pravegaracing/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              className={`ml-2 ${styles.socialButton} ${styles.facebook}`}
            >
              <button
                className={`${styles.socialButton} ${styles.facebook}`}
                aria-label='Facebook'
              ></button>
            </a>
            <a
              href='https://x.com/pravegaracing'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
              className={`ml-2 ${styles.socialButton} ${styles.twitter}`}
            >
              <button
                className={`${styles.socialButton} ${styles.twitter}`}
                aria-label='Twitter'
              ></button>
            </a>
          </div>
        </div>
        <div className='flex-col mt-[4vh]'>
          <p className='textEnd text-left text-xl' style={{ color: 'white' }}>
            Sign Up
          </p>
          <p className='textEnd text-left text-gray-300'>
            Want to keep informed? Join our infrequent mailing list, and you will never miss out on our upcoming events.
          </p>
          <span
            className='flex flex-row gap-x-8'
            style={{ width: '100%', marginBottom: '0px', height: '25px' }}
          >
            <input
              type='text'
              placeholder='Email'
              style={{ width: '80%', marginLeft: '0px', marginRight: '0px' }}
            ></input>
            <button
              className='bg-yellow-400 px-2 text-black hover:bg-red-600 w-[6vw]'
              style={{ height: '25px', marginLeft: '0px', marginRight: '0px' }}
            >
              <input
                type='email'
                name='user_email'
                style={{ width: '80%', marginLeft: '0px', marginRight: '0px' }}
                placeholder='Enter your email'
                required
              />
              <button
                type='submit'
                className='bg-black px-2 text-gray-400 hover:bg-white'
                style={{ height: '25px', marginLeft: '0px', marginRight: '0px' }}
              >
                Submit
              </button>
            </span>
          </form>
          {message && (
            <p className='text-green-400 mt-2'>{message}</p> // Display the notification
          )}
        </div>
        <div className='ieeecs mt-8' style={{ marginLeft: '100px' }}>
          <img src='images/general/ieeecslogo.png' className='footImg md:h-[10vh]'></img>
        </div>
      </div>
    </footer>
  );
}
