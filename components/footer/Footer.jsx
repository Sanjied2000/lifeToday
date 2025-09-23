import react from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>lifeToday</h1>
          <p className={styles.copy}>corporation 2000©all rights received</p>
        </div>
        <div className={styles.social}>
          <Image
            src="/facebook.png"
            alt="F"
            width={24}
            height={24}
            className={styles.icon}
          ></Image>
          <Image
            src="/github.png"
            alt="F"
            width={24}
            height={24}
            className={styles.icon}
          ></Image>
          <Image
            src="/telegram.png"
            alt="F"
            width={24}
            height={24}
            className={styles.icon}
          ></Image>
          <Image
            src="/discord.png"
            alt="F"
            width={24}
            height={24}
            className={styles.icon}
          ></Image>
        </div>
        <div className={styles.address}> <p>Dhaka,Bangladesh</p><p>lifetoday2000c@gmail.com</p><p>developer's journey</p></div>
      </div>
    </>
  );
};
export default Footer;
