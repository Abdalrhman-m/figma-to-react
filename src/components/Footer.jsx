import React from 'react';
import styles from './Footer.module.css';
import InfoColumn from './InfoColumn';
import LanguageSelector from './LanguageSelector';
import SocialIcon from './SocialIcon';

const Footer = () => {
  const productItems = ['Overview', 'Pricing', 'Customer stories'];
  const resourceItems = ['Blog', 'Guides & tutorials', 'Help center'];
  const companyItems = ['About us', 'Careers', 'Media kit'];
  const termsItems = ['Terms & privacy', 'Security', 'Status'];
  const socialIcons = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/02de1a5cdea4e6fad418aa7456eca488ca909cfff64bdf2c310517590a5191bc?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85', width: '9px', aspectRatio: '0.53' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e8ab40f598f951b0fbdfafd93288912e80c69e8378d63ca718823d14640958b?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85', width: '17px', aspectRatio: '1.31' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5900c010695b9eac299208f92dfcc7a0dcf2d79854eaf657f150dcb2dd600dc6?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85', width: '15px', aspectRatio: '1' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.logoDescription}>
            <div className={styles.logo}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f83279e840033e52fb82d1df6222417e75192311c028391dd9eae418da9963bb?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85" className={styles.logoImage} alt="Whitepace logo" />
              <div className={styles.logoText}>whitepace</div>
            </div>
            <p className={styles.description}>
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>
          <InfoColumn title="Product" items={productItems} />
          <InfoColumn title="Resources" items={resourceItems} />
          <InfoColumn title="Company" items={companyItems} />
          <div className={styles.trySection}>
            <h2 className={styles.trySectionTitle}>Try It Today</h2>
            <p className={styles.trySectionDescription}>
              Get started for free. Add your whole team as your needs grow.
            </p>
            <button className={styles.startButton}>
              <span className={styles.startButtonText}>Start today</span>
              <div className={styles.startButtonIcon}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/435f10604115297faa12ba38fa887b27045c1e2718f2508a3b0afc41ce3ba0f3?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85" className={styles.startButtonIconImage} alt="" />
              </div>
            </button>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.termsAndConditions}>
            <LanguageSelector />
            {termsItems.map((item, index) => (
              <div key={index} className={styles.termsItem}>{item}</div>
            ))}
            <div className={styles.copyright}>©2024 <span className={styles.copyspan}>MEDO</span></div>
          </div>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
        <div className={styles.divider} />
      </div>
    </footer>
  );
};

export default Footer;