import React from 'react'
import styles from "./Experience.module.css";
import history from "../../Data/history.json";
import { getImageUrl } from '../../utils';
// import { Skills } from '../Skills/Skills';

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.content}>
        {/* <div className={styles.skills}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsContents}>
        {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        </div> */}
        {/* <Skills/> */}
        
        <ul className={styles.history}>
        <h2 className={styles.title2}>Experience</h2>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                  className={styles.imageTopCSS}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul >
                    {historyItem.experiences.map((experience, id) => {
                      return <li className={styles.Description} key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
