import React from 'react';
import styles from './YourWork.module.css';

const YourWork = () => {
  return (
    <section className={styles.heroSection}>
      
        <div className={styles.textBlock}>
          <h1 className={styles.title}>Your work, everywhere you are</h1>
          <p className={styles.description}>
          Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!          </p>
          <button className={styles.ctaButton} aria-label="Try Whitepace for free">
            <span className={styles.buttonText}>Try Whitepace free</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4456f4aab5c1bbf96faf97b68c700d3e9e0d09055dff96b95dc973016ac5436c?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85"
              alt="Arrow icon"
              className={styles.buttonIcon}
            />
          </button>
        </div>
       
      
    </section>
  );
};

export default YourWork;
