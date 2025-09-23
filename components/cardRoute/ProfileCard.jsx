"use client";

import React, { useState, useEffect } from "react";
import CardList from "../cardList/CardList";

const ProfileCard = ({ user_id }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        
        const res = await fetch(`/api/profileposts/${user_id}`);
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();
        setPosts(data.posts || []);
      } catch (err) {
        console.error(err);
      }
    };

    if (user_id) fetchPosts();
  }, [user_id]);

  return <CardList posts={posts} />;
};

export default ProfileCard;
