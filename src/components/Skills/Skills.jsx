import React from 'react'
import skills from "../../Data/skills.json";
import { getImageUrl } from '../../utils';
import styles from "./Skills.module.css";

export const Skills = () => {
    return (
      <section>
        <div className={styles.content}>
          <div className={styles.skills}>
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
          </div>
          </div>
     </section>
    );
}