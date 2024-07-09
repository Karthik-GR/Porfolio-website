import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Karthik</h1>
        <p className={styles.description}>
          I'm a graduted MCA Student who is passionate about learning and
          seeking professional experience. To work for an organization which
          provides me the opportunity to improve my skills and knowledge to
          growth along with the organization objective.
        </p>
        <a href="mailto:karthikgr010@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
