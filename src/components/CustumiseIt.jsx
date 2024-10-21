import React from 'react';
import styles from './CustumiseIt.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
      <div
          className={styles.imageContainer}
          role="img"
          aria-label="Whitepace software interface preview"
        >
          {/* Optionally, add an image here for the interface preview */}
        </div>
        <div className={styles.textBlock}>
            
          <h1 className={styles.title}>Customise it
          to your needs</h1>
          <p className={styles.description}>
          Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.          </p>
          <button className={styles.ctaButton} aria-label="Try Whitepace for free">
            <span className={styles.buttonText}>Try Whitepace free</span>
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

export default HeroSection;
