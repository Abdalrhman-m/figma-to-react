import React from 'react';
import styles from './FreeTrial.module.css';
import AppIcon from './AppIcon';

const FreeTrial = () => {
  const appIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b62b7fb12eecb45dc1b6eb428abc2ad6a7928e6c8ea1aeba000d517606b26bd?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85", alt: "App icon 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb7023600bb85142504a3f4c8b14cd6747ca30cc56baed316d1c359ae03306a7?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85", alt: "App icon 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a67481a3de1dba5202c3d167fa95e54b98528f1dd8cdf171707e34cd3cf24ad1?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85", alt: "App icon 3" }
  ];

  return (
    <section className={styles.freeTrial}>
      <div className={styles.heading}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>Try Whitepace today</h2>
          <p className={styles.subtitle}>
            Get started for free. <br />
            Add your whole team as your needs grow.
          </p>
        </div>
        <button className={styles.ctaButton}>
          <span className={styles.buttonText}>Try Taskey free</span>
          <span className={styles.icon}>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f742508893eca853747499bd9beacc66e93ddbcfecf86e229727b3a3904feb4?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85" alt="" className={styles.iconImage} />
          </span>
        </button>
        <p className={styles.contactSales}>
          On a big team? Contact sales
        </p>
        <div className={styles.appIcons}>
          {appIcons.map((icon, index) => (
            <AppIcon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;