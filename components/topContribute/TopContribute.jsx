"use client";
import React, { useEffect, useState } from "react";
import styles from "./topcontribute.module.css";

const TopContribute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchTopUsers = async () => {
      try {
        const res = await fetch("/api/topcontribute"); // 👈 API route
        if (!res.ok) throw new Error("Failed to fetch top contributors");

        const data = await res.json();
        setUsers(data.topUsers || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopUsers();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.topcard}>
        <p>Name</p>
        <p>Posts</p>
      </div>

 {users.length > 0 ? (
  <>
    {users[0] && (
      <div className={styles.info}>
        <p className={styles.info1}>{users[0].userName}</p>
        <p>{users[0].postCount}</p>
      </div>
    )}

    {users[1] && (
      <div className={styles.info}>
        <p className={styles.info2}>{users[1].userName}</p>
        <p>{users[1].postCount}</p>
      </div>
    )}

    {users[2] && (
      <div className={styles.info}>
        <p className={styles.info3}>{users[2].userName}</p>
        <p>{users[2].postCount}</p>
      </div>
    )}
  </>
) : (
  <p>No contributors found</p>
)}

    </div>
  );
};

export default TopContribute;
