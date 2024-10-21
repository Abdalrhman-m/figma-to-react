import React from 'react';
import styles from './Header.module.css';

const NavItem = ({ text, imageSrc }) => {
  return (
    <div className={styles.navItem} tabIndex={0} role="menuitem" aria-label={text}>
      <div className={styles.navText}>{text}</div>
      <div className={styles.downArrow}>
        <img 
          loading="lazy" 
          src={imageSrc} 
          alt={`${text} navigation arrow`} 
          className={styles.arrowImage}
          width="16"
          height="16"
        />
      </div>
    </div>
  );
};

export default React.memo(NavItem);
