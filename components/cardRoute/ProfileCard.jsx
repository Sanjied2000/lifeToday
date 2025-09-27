"use client";

import React, { useState, useEffect } from "react";
import CardList from "../cardList/CardList";
import styles from "./pagination.module.css";

const ProfileCard = ({ user_id }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/profileposts/${user_id}?page=${page}`);
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        setPosts(data.posts || []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        console.error(err);
      }
    };

    if (user_id) fetchPosts();
  }, [user_id, page]);

  return (
    <div>
      <CardList posts={posts} />

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          className={styles.button}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className={styles.button}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
