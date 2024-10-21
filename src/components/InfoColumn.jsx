import React from 'react';
import styles from './Footer.module.css';

const InfoColumn = ({ title, items }) => {
  return (
    <div className={styles.infoColumn}>
      <h3 className={styles.columnTitle}>{title}</h3>
      {items.map((item, index) => (
        <div key={index} className={`${styles.columnItem} ${index === 0 ? styles.highlightedItem : ''}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default InfoColumn;