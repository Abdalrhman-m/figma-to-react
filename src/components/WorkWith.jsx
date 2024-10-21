import React from 'react';
import styles from './WorkWith.module.css';

const WorkWith = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
      <div
          className={styles.imageContainer}
          role="img"
          aria-label="Whitepace software interface preview"
        >
          <img
            src={require('./Apps.png')} /* Assuming Element2.png is in the same folder */
            alt="Whitepace software interface preview"
            className={styles.previewImage}
          />
        </div>
        <div className={styles.textBlock}>
            
          <h1 className={styles.title}>Work with Your Favorite Apps Using whitepace</h1>
          <p className={styles.description}>
          Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.          </p>
          <button className={styles.ctaButton} aria-label="Try Whitepace for free">
            <span className={styles.buttonText}>Read more</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4456f4aab5c1bbf96faf97b68c700d3e9e0d09055dff96b95dc973016ac5436c?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85"
              alt="Arrow icon"
              className={styles.buttonIcon}
            />
          </button>
        </div>
       
      </div>
    </section>
  );
};

export default WorkWith;
