import React from "react";
import styles from './ProjectManagement.module.css';
import ContentSection from './ContentSection';

const projectManagementData = {
  title: "Project Management",
  description: "Images, videos, PDFs, and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.",
  buttonText: "Get Started",
  iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fae551115e73e14e3a6affffb89928e8e570ec03da497699f11d4a1a983eb6f?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85"
};

const workTogetherData = {
  title: "Work Together",
  description: "With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.",
  buttonText: "Try it now",
  iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6aefee752fe90545b9ff94706f325d7e9e62123d9e0c99d45c884fc7587d1f0d?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85"
};

function ProjectManagement() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <article className={styles.workManagement}>
          <section className={styles.section}>
            <ContentSection
              data={projectManagementData}
              imageContainer={<div className={styles.imageContainer} aria-label="Project management image" />}
            />
          </section>

          <section className={styles.section}>
            <div className={styles.secondaryContent}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89a90ca25572fa86d8f954c4c3f8fd805d68e693a3e310fa1826e348bff5194e?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85"
                className={styles.featureImage}
                alt="Collaboration Feature Illustration"
              />
              <ContentSection
                data={workTogetherData}
                additionalContent={
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/30615f8e80d32f8d48ced651d923b0008188efe6237de5ac2267065deb983d31?placeholderIfAbsent=true&apiKey=549c0f22c76049b8a0ed4ccae1df4d85"
                    className={styles.decorativeImage}
                    alt="Decorative illustration for collaboration"
                  />
                }
              />
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default ProjectManagement;
