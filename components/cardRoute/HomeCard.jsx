"use client";

import React, { useState, useEffect } from "react";
import CardList from "../cardList/CardList";

const HomeCard = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);

  return <CardList posts={posts} self={false} />;
};

export default HomeCard;
