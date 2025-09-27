import react from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <b className={styles.bold}>Wellcome, it's lifeToday!</b> Where you can
          share you daily acitivity that motivate others.
        </h1>

        <div className={styles.post}>
          <div className={styles.imgcontainer}>
            <Image src="/dummy.jpg" alt="" fill></Image>
          </div>
          <div className={styles.textcontainer}>
            <h1>LifeToday – Share Stories, Ideas, and Experiences</h1>
            <p>
              LifeToday isn’t just a blog—it’s a living journal of moments,
              ideas, and inspirations. It’s a place where writers and readers
              come together to celebrate the small joys, big dreams, and
              everyday experiences that shape our lives. From heartfelt personal
              stories to creative thoughts, from tips and reflections to fun
              explorations, LifeToday is about capturing the essence of living
              in the present. Your voice matters here—share it, and discover the
              beauty of life through the eyes of others.
            </p>

            <Link href="/about" className={styles.button}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Featured;
