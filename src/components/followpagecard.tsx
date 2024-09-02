import Image from 'next/image';

import styles from '/src/styles/FollowPageCard.module.css';

const FollowPageCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Image
          src='/images/1.jpg'
          alt='Pravega Racing'
          width={50}
          height={50}
          className={styles.profileImage}
        />
        <div className={styles.title}>
          <h1>Pravega Racing</h1>
          <span>12,757 followers</span>
        </div>
      </div>

      <div className={styles.socialButtons}>
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
          className={`${styles.socialButton} ${styles.facebook}`}
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
          className={`${styles.socialButton} ${styles.twitter}`}
        >
          <button
            className={`${styles.socialButton} ${styles.twitter}`}
            aria-label='Twitter'
          ></button>
        </a>
      </div>
    </div>
  );
};

export default FollowPageCard;
