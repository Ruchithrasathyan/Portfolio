import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm Ruchithra Sathyanarayanan
            </h1>
            <p className={styles.description}>
                I'm a Software Developer with a passion for learning new technologies.
            </p>
            <a href="https://github.com/Ruchithrasathyan/resume.git" className={styles.contactBtn}>
                My Resume
            </a>
        </div>
        <img src= {getImageUrl("hero/computer.png")} alt = "Hero Image of me" className={styles.heroImg} />
        <div className= {styles.TopBlur} />
        <div className= {styles.BottomBlur} />
    </section>
  )
}
