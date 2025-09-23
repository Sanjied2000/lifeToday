"use client";

import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import { getImage } from "@/lib/getImage";
import TopContribute from "../topContribute/TopContribute";

const Menu = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/menuPosts");
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>What's Hot!</div>
      <div className={styles.title}>Most Popular 🔥</div>

      <div className={styles.post}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post._id}
              href={`/posts/${post._id}`}
              className={styles.items}
            >
              <div className={styles.imgcontainer}>
                <Image
                  src={getImage(post.category)}
                  alt={post.title}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.textcontainer}>
                <span className={styles.category}>{post.category}</span>
                <h3>{post.title}</h3>
                <div className={styles.details}>
                  <span className={styles.username}>{post.user_name}</span>
                  <span className={styles.date}>
                    {new Date(post.updatedAt).toISOString().slice(0, 10)}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No popular posts yet.</p>
        )}
      </div>

      <div className={styles.top}>
        <div className={styles.subtitle}>Are You here!</div>
        <div className={styles.title}>Top Contributor 🏆</div>
        <TopContribute></TopContribute>
      </div>
    </div>
  );
};

export default Menu;
