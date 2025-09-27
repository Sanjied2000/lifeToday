"use client";
import { use } from "react";
import { useEffect, useState } from "react";
import styles from "./singlepost.module.css";
import Image from "next/image";
import Menu from "@/components/menu/menu";
import Commentbox from "@/components/commentbox/Commentbox";
import Comments from "@/components/comments/Comments";
import { getImage } from "@/lib/getImage";
import { getCategory } from "@/lib/getCategory";

export default function SinglePost({ params }) {
  const unwrappedParams = use(params);
  const { post_id } = unwrappedParams;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${post_id}`);
        if (!res.ok) throw new Error("Failed to fetch post");
        const data = await res.json();
        setPost(data.post);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (post_id) {
      fetchPost();
    }
  }, [post_id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.postAndComments} >
        <div className={styles.postdetails}>
          <div className={styles.postImage}>
            <Image src={getImage(post.category)} alt="post image" fill />
          </div>
          <div className={styles.title}>
            <h1>{post.title}</h1>
            <div className={styles.user}>
              <div className={styles.userImage}>
                <Image src="/user.png" alt="user" fill />
              </div>
              <div className={styles.usertextInfo}>
                <div className={styles.userName}>{post.user_name}</div>
                <div className={styles.date}>
                {post.updatedAt.slice(0,10)} 
                </div>
              </div>
              <div className={styles.category}>{getCategory(post.category)}</div>
            </div>
          </div>
          <div className={styles.postContent}>{post.content}</div>
        </div>
      <Commentbox></Commentbox>
      <Comments/>
      </div>

      <div className={styles.menupart}>
        <Menu />
      </div>
    </div>
  );
}
