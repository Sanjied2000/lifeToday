"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./filterDropdown.module.css";

export default function FilterDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    onSelect?.(value); // send value to parent if needed
    setOpen(false);
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
    
      <div className={styles.filterBtn} onClick={() => setOpen(!open)}>
        Filter
      </div>

      {open && (
        <div className={styles.dropdown}>
          <div
            className={styles.option}
            onClick={() => handleSelect("new")}
          >
            Newest
          </div>
          <div
            className={styles.option}
            onClick={() => handleSelect("old")}
          >
            Oldest
          </div>
          <div
            className={styles.option}
            onClick={() => handleSelect("mview")}
          >
            Most Viewed
          </div>
                    <div
            className={styles.option}
            onClick={() => handleSelect("")}
          >
            None
          </div>
        </div>
      )}
    </div>
  );
}
