"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./themeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      className={`${styles.toggle} ${theme === "dark" ? styles.dark : ""}`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      
      <div className={styles.icon}>
        {theme === "light" ? "☀️" : "🌙"}
      </div>
    </div>
  );
}
