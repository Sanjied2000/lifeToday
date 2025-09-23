import react from "react";
import styles from "./featured.module.css";
import Image from "next/image";

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
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              vel eaque, laborum provident minus impedit deleniti! Fugiat
              placeat ipsam soluta?
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis atque voluptas dolorem officia alias, quam blanditiis
              perferendis? Ut magnam eum quod? Nihil harum debitis dolorem cum
              soluta earum nam possimus ut, eius fuga nisi eveniet! Molestiae
              maxime dignissimos exercitationem natus consectetur quidem
              distinctio impedit dolores, beatae ipsa quas, nihil architecto
              illum dolor doloribus optio porro ullam excepturi incidunt maiores
              eveniet?
            </p>
            <button className={styles.button}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Featured;
