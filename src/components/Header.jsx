import React, { memo } from 'react';
import styles from './Header.module.css';
import NavItem from './NavItem';

const navItems = [
  { text: 'Products', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cd9c62f64ca91225fefa83b8e52a23c2eaa273b5a008331ee4102cb93de98bf?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85' },
  { text: 'Solutions', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cd9c62f64ca91225fefa83b8e52a23c2eaa273b5a008331ee4102cb93de98bf?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85' },
  { text: 'Resources', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cd9c62f64ca91225fefa83b8e52a23c2eaa273b5a008331ee4102cb93de98bf?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85' },
  { text: 'Pricing', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9cd9c62f64ca91225fefa83b8e52a23c2eaa273b5a008331ee4102cb93de98bf?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85' },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoWrapper}>
          <img 
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd47aeb4d17506a5ff6f302bf935511e4c9598328a7e84f42efc168f9ec9575f?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85" 
            alt="Whitepace logo" 
            className={styles.logoImage}
            width="50"
            height="50"
            aria-label="Whitepace logo"
          />
          <div className={styles.logoText}>whitepace</div>
        </div>
      </div>
      <nav className={styles.navWrapper}>
        <div className={styles.navMenu}>
          {navItems.map((item, index) => (
            <MemoizedNavItem key={index} text={item.text} imageSrc={item.imageSrc} />
          ))}
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.loginButton} aria-label="Login">
            Login
          </button>
          <button className={styles.freeTrialButton} aria-label="Try Whitepace free">
            <span className={styles.freeTrialText}>Try Whitepace free</span>
            <span className={styles.iconWrapper}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c719fdb6889a01467bef9a5deae9b0e769fc5459aaf38f8d4594133632ed0d2?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85"
                alt="Free trial icon"
                className={styles.icon}
                width="20"
                height="20"
              />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

const MemoizedNavItem = memo(NavItem);

export default Header;
