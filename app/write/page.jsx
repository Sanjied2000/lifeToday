"use client";

import React, { useState } from "react";
import styles from "./writePage.module.css";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import CategoryDropdown from "@/components/categoryDropdown/CategoryDropdown";
import { useRouter } from "next/navigation";

const WritePage = () => {
  const { data: session, status } = useSession();


  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !content) {
      setErrorMessage("All fields are required");
      return;
    }

    const postData = {
      user_id: session.user.id,
      user_name:session.user.name,
      title,
      category,
      content,
    };
    console.log(postData)

    try {
      const res = await fetch("/api/write", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message || "Post failed");
        return;
      }
      router.push("/profile");
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Try again.");
    }


  };

  return (
    <div className={styles.container}>
      <form className={styles.textArea} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.title}
          placeholder="Title"
          maxLength={100}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <CategoryDropdown onSelect={(value) => setCategory(value)} />

        <textarea
          className={styles.post}
          name="message"
          rows="7"
          cols="50"
          placeholder="Tell your story.."
          maxLength={1000}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit" className={styles.button}>
          Publish
        </button>
      </form>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default WritePage;
