import react from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Popular Categories</h1>
        </div>
        <div className={styles.categories}>
          <Link
            href="/memories"
            className={`${styles.category} ${styles.memories}`}
          >
            <Image src="/memories.png" alt="" height={24} width={24}></Image>
            Memories
          </Link>
          <Link
            href="/travel"
            className={`${styles.category} ${styles.travel}`}
          >
            <Image src="/travel.png" alt="" height={24} width={24}></Image>
            Travel
          </Link>

          <Link
            href="/cooking"
            className={`${styles.category} ${styles.cooking}`}
          >
            <Image src="/cooking.png" alt="" height={24} width={24}></Image>
            Cooking
          </Link>
          <Link
            href="/goodwill"
            className={`${styles.category} ${styles.goodwill}`}
          >
            <Image src="/goodwill.png" alt="" height={24} width={24}></Image>
            GoodWill
          </Link>
          <Link href="/idea" className={`${styles.category} ${styles.memories}`}>
            <Image src="/idea.png" alt="" height={24} width={24}></Image>Ideas
          </Link>
          <Link
            href="/technology"
            className={`${styles.category} ${styles.travel}`}
          >
            <Image src="/technology.png" alt="" height={24} width={24}></Image>
            Technology
          </Link>

          <Link
            href="/technology"
            className={`${styles.category} ${styles.cooking}`}
          >
            <Image src="/sports.png" alt="" height={24} width={24}></Image>
            Sports
          </Link>

          <Link
            href="/qna"
            className={`${styles.category} ${styles.goodwill}`}
          >
            <Image src="/qna.png" alt="" height={24} width={24}></Image>
            Q&A
          </Link>
        </div>
      </div>
    </>
  );
};
export default CategoryList;
