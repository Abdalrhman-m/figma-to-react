import React from 'react';
import styles from './Footer.module.css';

const SocialIcon = ({ src, width, aspectRatio }) => {
  return (
    <img
      loading="lazy"
      src={src}
      className={styles.socialIcon}
      style={{ width, aspectRatio }}
      alt="Social media icon"
    />
  );
};

export default SocialIcon;