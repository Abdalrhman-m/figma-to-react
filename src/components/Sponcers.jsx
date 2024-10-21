import React from "react";
import styles from './Sponcers.module.css';

const Sponcers = () => {
    return (
        <section className={styles.heroSection}>
      
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Our sponsors</h1>
          
        </div>
        <div
          
        >
          <img
            src={require('./sponsors.png')} /* Assuming Element2.png is in the same folder */
            alt="Whitepace software interface preview"
            className={styles.previewImage}
          />
        </div>
      
    </section>
  );
};
export default Sponcers;
