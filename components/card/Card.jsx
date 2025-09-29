import react from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { getImage } from "@/lib/getImage";
import { getCategory } from "@/lib/getCategory";


async function deletePost(post_id) {
  await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });
  window.location.href = "/profile";
}
const Card = ({ post, self }) => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgcontainer}>
          <Image src={getImage(post.category)} alt="Image" fill></Image>
        </div>

        <div className={styles.textcontainer}>
          <div className={styles.details}>
            <span className={styles.date}>{post.updatedAt.slice(0, 10)} </span>
            <span className={styles.categorys}>
              - {getCategory(post.category)}
            </span>
          </div>
          <h1 className={styles.cardtitle}>{post.title}</h1>
          <p className={styles.desc}>
            {post.content.split(" ").slice(0, 20).join(" ")}...
          </p>
          <div className={styles.actions}>
            <Link href={`/posts/${post._id}`} className={styles.link}>
              Read More
            </Link>
            {self && (
              <button  onClick={() => deletePost(post._id)} className={styles.buttonlink}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
