"use client";
import React from "react";
import styles from "./filterCategory.module.css";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function FilterCategory() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.csbutton} onClick={() => setOpen(!open)}>
        Categories
      </div>

      {/* Dropdown */}
      {open && (
        <div className={styles.dropdown}>
          <Link href="/blog/travel" className={styles.link}>
            Travel
          </Link>
          <Link href="/blog/memories" className={styles.link}>
            Memories
          </Link>
          <Link href="/blog/cooking" className={styles.link}>
            Cooking
          </Link>
          <Link href="/blog/good_will" className={styles.link}>
            Good Will
          </Link>
          <Link href="/blog/ideas" className={styles.link}>
            Idea
          </Link>
          <Link href="/blog/sports" className={styles.link}>
            Sports
          </Link>
          <Link href="/blog/qna" className={styles.link}>
            Q&A
          </Link>
          <Link href="/blog/technology" className={styles.link}>
            Technology
          </Link>
        </div>
      )}
    </div>
  );
}

export default FilterCategory;
