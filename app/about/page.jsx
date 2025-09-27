import React from "react";
import styles from "./about.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>About lifeToday</h1>
      </div>
      <div className={styles.describe}>
        LifeToday isn’t just a blog—it’s a living journal of moments, ideas, and
        inspirations. It’s a place where writers and readers come together to
        celebrate the small joys, big dreams, and everyday experiences that
        shape our lives. From heartfelt personal stories to creative thoughts,
        from tips and reflections to fun explorations, LifeToday is about
        capturing the essence of living in the present. Your voice matters
        here—share it, and discover the beauty of life through the eyes of
        others.
      </div>

      <div className={styles.title}>
        <h1>How to write</h1>
      </div>
      <div className={styles.describe}>
        Just Login or Create an account ,and you are ready to wite a post.
      </div>

      <div className={styles.title}>
        <h1>Feeds</h1>
      </div>
      <div className={styles.describe}>
        All posts are available in the Feeds section, where you can filter them
        by category, newest, oldest, or most viewed.
      </div>
    </div>
  );
};

export default about;
