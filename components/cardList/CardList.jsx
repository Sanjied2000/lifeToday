import React from "react";
import styles from "./cardlist.module.css";
import Card from "../card/Card";

const CardList = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts && posts.length > 0 ? (
        posts.map((post) => <Card key={post._id} post={post} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CardList;