'use client'
import React from "react";
import styles from "./blog.module.css";
import FeedsCard from "@/components/cardRoute/FeedsCard";
import Menu from "@/components/menu/menu";
import FilterDropdown from "@/components/filterDropdown/FilterDropdown";
import { useState } from "react";

const Blog = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainpart}>
          
          <div className={styles.filter}>
             <div className={styles.filterName}>{filter}</div>
            <FilterDropdown onSelect={(val) => setFilter(val)} />
          </div>
          <div className={styles.cardlist}>
            <FeedsCard category='none' sortType={filter} ></FeedsCard>
          </div>
        </div>

        <div className={styles.menu}>
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
};

export default Blog;
