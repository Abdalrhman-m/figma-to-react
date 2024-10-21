import React from 'react';
import styles from './YourData.module.css';

const YourData = () => {
  return (
    <section className={styles.UseExtention}>
      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>100% your data</h1>
          <p className={styles.description}>
          The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.          </p>
          <button className={styles.ctaButton} aria-label="Try Whitepace for free">
            <span className={styles.buttonText}>Read more</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4456f4aab5c1bbf96faf97b68c700d3e9e0d09055dff96b95dc973016ac5436c?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85"
              alt="Arrow icon"
              className={styles.buttonIcon}
            />
          </button>
        </div>
        <div
          className={styles.imageContainer}
          role="img"
          aria-label="Whitepace software interface preview"
        >
          <img
            src={require('./Element2.png')} /* Assuming Element2.png is in the same folder */
            alt="Whitepace software interface preview"
            className={styles.previewImage}
          />
        </div>
      </div>
    </section>
  );
};

export default YourData;
