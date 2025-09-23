import react from "react";
import styles from "./navbar.module.css";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
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
        <div className={styles.logo}>lifeToday</div>
        <div>
          <div className={styles.links}>
            <ThemeToggle />
            <Link href="/blog" className={styles.link}>
              
              <Image
                src="/feeds.png"
                alt=""
                width={20}
                height={20}
              ></Image>
              Feeds
            </Link>
            <AuthLinks />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
