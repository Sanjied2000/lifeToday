"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./categoryDropdown.module.css";

export default function CategoryDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const options = [
    { value: "travel", label: "Travel" },
    { value: "qna", label: "Q&A" },
    { value: "good_will", label: "Good Will" },
    { value: "cooking", label: "Cooking" },
    { value: "entertainment", label: "Entertainment" },
    { value: "ideas", label: "Ideas" },
    { value: "technology", label: "Technology" },
    { value: "memories", label: "Memories" },
    { value: "sports", label: "Sports" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option.value); // pass only value to parent
    setOpen(false);
  };

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.filterBtn} onClick={() => setOpen(!open)}>
        {selected ? `${selected.label}` : "Select Category"}
      </div>

      {/* Dropdown options */}
      {open && (
        <div className={styles.dropdown}>
          {options.map((opt) => (
            <div
              key={opt.value}
              className={styles.option}
              onClick={() => handleSelect(opt)}
            >
            {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
