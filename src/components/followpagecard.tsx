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
      <div className={styles.buttons}>
        <button className={styles.followButton}>Follow Page</button>
        <button className={styles.shareButton}>Share</button>
      </div>
    </div>
  );
};

export default FollowPageCard;
