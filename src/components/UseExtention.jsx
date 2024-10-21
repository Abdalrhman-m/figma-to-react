import React from 'react';
import styles from './UseExtention.module.css';

const UseExtention = () => {
  return (
    <section className={styles.UseExtention}>
      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Use as Extension</h1>
          <p className={styles.description}>
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

          </p>
          <button className={styles.ctaButton} aria-label="Try Whitepace for free">
            <span className={styles.buttonText}>Let’s Go</span>
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
          {/* Optionally, add an image here for the interface preview */}
        </div>
      </div>
    </section>
  );
};

export default UseExtention;
