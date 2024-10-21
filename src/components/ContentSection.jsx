import React from "react";
import PropTypes from "prop-types";
import styles from './ProjectManagement.module.css';

function ContentSection({ data, imageContainer = null, additionalContent = null }) {
  return (
    <section className={styles.contentSection}>
      <div className={styles.headlineContainer}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>{data.title}</h2>
          <p className={styles.description}>{data.description}</p>
        </div>
        <button className={styles.ctaButton} aria-label={`Call to action: ${data.buttonText}`}>
          <span className={styles.buttonText}>{data.buttonText}</span>
          <div className={styles.iconWrapper}>
            <img
              loading="lazy"
              src={data.iconSrc}
              className={styles.icon}
              alt={`${data.title} icon`}
              aria-hidden="true"
            />
          </div>
        </button>
      </div>
      
      {imageContainer && <div className={styles.imageWrapper}>{imageContainer}</div>}

      {additionalContent && (
        <div className={styles.textContentSecondary}>
          {additionalContent}
        </div>
      )}
    </section>
  );
}

ContentSection.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    iconSrc: PropTypes.string.isRequired,
  }).isRequired,
  imageContainer: PropTypes.node,
  additionalContent: PropTypes.node,
};

export default ContentSection;
