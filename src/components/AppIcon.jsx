import React from 'react';
import styles from './FreeTrial.module.css';

const AppIcon = ({ src, alt }) => (
  <img loading="lazy" src={src} alt={alt} className={styles.appIcon} />
);

export default AppIcon;