import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/education-50.png")}
              alt="Cursor icon"
              style={{ marginRight: "1.5rem" }}
            />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <p>
                  <p style={{ color: "rgb(37, 150, 190)" }}>
                    Master of Computer Application
                  </p>
                  <span>PES University 2022 – 05/2024 | Bangalore, India </span>
                  <br />
                  <span style={{ color: "#93dce5" }}>8.635 CGPA</span>
                </p>
                <p>
                  <p style={{ color: "rgb(37, 150, 190)" }}>
                    Bachelor of Science, Computer-Science (PMC)
                  </p>

                  <span>SDM Degree College 2019 – 2022 | Ujire, India</span>
                  <br />
                  <span style={{ color: "#93dce5" }}>8.28 CGPA</span>
                </p>
                <p>
                  <p style={{ color: "rgb(37, 150, 190)" }}>Senior Secondary</p>
                  <span>SDM PU College 2017 – 2019 | Ujire, India</span>
                  <br />
                  <span style={{ color: "#93dce5" }}>86.66</span> - Physics,
                  Chemistry, Mathematics and Computer Science
                </p>
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/awards-48.png")}
              alt="Server icon"
              style={{ marginRight: "1.5rem" }}
            />
            <div className={styles.aboutItemText}>
              <h3>Awards</h3>
              <br />
              <div>
                <p style={{ color: "rgb(37, 150, 190)" }}>
                  Secured Second place in Physica-2k22 Quiz
                </p>
                <p>
                  Physics Association, Department of Studies in Physics,
                  Mangalore University.
                </p>
                <br />

                <p style={{ color: "rgb(37, 150, 190)" }}>
                  CNR Scholarship, PES University
                </p>
                <p>Awarded to top 5% students, PES University</p>
              </div>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
