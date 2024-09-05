import '/src/styles/slider1.css';

import styles from '/src/styles/FollowPageCard.module.css';

export default function Footer() {
  return (
    <footer
      className='container bg-gray-800 '
      style={{ maxWidth: '100%', height: 200 }}
    >
      <div className='footThing mx-5 md:mx-20'>
        <div className='mt-4'>
          <img src='images/general/logowhite.png' className='footImg'></img>
          <div className='buttonsAtEnd ml-2 flex gap-x-'>
            <a
              href='https://www.instagram.com/pravegaracing/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className={`${styles.socialButton} ${styles.instagram}`}
            >
              <button
                className={`${styles.socialButton} ${styles.instagram}`}
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
        <div className='mt-4'>
          <p className='textEnd text-left text-xl' style={{ color: 'white' }}>
            Sign Up
          </p>
          <p className='textEnd text-left text-gray-300'>
            Want to keep informed? Join our infrequent mailing list, and you
            will never miss out on our upcoming events.
          </p>
          <span
            className='flex flex-row '
            style={{ width: '100%', marginBottom: '0px', height: '25px' }}
          >
            <input
              type='text'
              style={{ width: '80%', marginLeft: '0px', marginRight: '0px' }}
            ></input>
            <button
              className='bg-black px-2 text-gray-400 hover:bg-white'
              style={{ height: '25px', marginLeft: '0px', marginRight: '0px' }}
            >
              Submit
            </button>
          </span>
        </div>
        <div className='ieeecs mt-8' style={{ marginLeft: '100px' }}>
          <img src='images/general/ieeecslogo.png' className='footImg'></img>
        </div>
      </div>
    </footer>
  );
}
