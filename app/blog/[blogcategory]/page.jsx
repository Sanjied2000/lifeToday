"use client";
import React from "react";
import styles from "../blog.module.css";
import FeedsCard from "@/components/cardRoute/FeedsCard";
import Menu from "@/components/menu/menu";
import FilterDropdown from "@/components/filterDropdown/FilterDropdown";
import { useState } from "react";
import { useParams } from "next/navigation";
import FilterCategory from "@/components/filterCategory/FilterCategory";
import { getCategory } from "@/lib/getCategory";
import { getFilter } from "@/lib/getFilter";

const BlogCategory = () => {
  const { blogcategory } = useParams();
  const [filter, setFilter] = useState("");
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainpart}>
          <div className={styles.filter}>
            <div className={styles.filterName}>{getCategory(blogcategory)}--{getFilter(filter)}</div>
            <div className={styles.activity}>
              <FilterCategory></FilterCategory>
              <FilterDropdown onSelect={(val) => setFilter(val)} />
            </div>
          </div>
          <div className={styles.cardlist}>
            <FeedsCard category={blogcategory} sortType={filter}></FeedsCard>
          </div>
        </div>

        <div className={styles.menu}>
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
};

export default BlogCategory;
