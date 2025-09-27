import React from "react";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h1>Comments</h1>
      <div className={styles.comment}>
        <div className={styles.userInfo}>
          <div className={styles.userImage}>
            <Image src="/user.png" alt="user" fill />
          </div>
          <div className={styles.userTextInfo}>
            <p>Jhon</p>
            <div className={styles.commentText}>
              <p className={styles.Date}>2025-11-12  </p>
              <p>Excellent Writing ❤️</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
