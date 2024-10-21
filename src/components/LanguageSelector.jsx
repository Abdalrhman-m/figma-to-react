import React from 'react';
import styles from './Footer.module.css';

const LanguageSelector = () => {
  return (
    <div className={styles.languageSelector}>
      <div className={styles.languageIcon}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7d6ef3bb144c7916252f11b3e6db25b9ed4e8cec6e285e57d092c363232f3e7?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85" className={styles.languageIconImage} alt="" />
      </div>
      <div className={styles.languageText}>English</div>
      <div className={styles.languageArrow}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9115f91244c06357a808514de37a07a2b9641a79bb70ab20be339b235acee75d?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85" className={styles.languageArrowImage} alt="" />
      </div>
    </div>
  );
};

export default LanguageSelector;