import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:karthikgr010@gmail.com">karthikgr010@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/grkarthik/" target="_blank">
            linkedin.com/grkarthik
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Karthik-GR" target="_blank">
            github.com/Karthik-GR
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/leetcode.png")} alt="Leetcode icon" />
          <a href="https://leetcode.com/u/Karthik-G_R/" target="_blank">
            leetcode.com/Karthik-G_R
          </a>
        </li>
      </ul>
    </footer>
  );
};
