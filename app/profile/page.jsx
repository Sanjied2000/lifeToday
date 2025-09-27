"use client";
import React from "react";
import styles from "./profile.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Menu from "@/components/menu/menu";
import ProfileCard from "@/components/cardRoute/ProfileCard";

const Profile = () => {
  const { data: session, status } = useSession();
  
  
    if (status === "loading") {
    return <div>Loading...</div>;
  }


  return (
    <div className={styles.container}>
      <div className={styles.profileAndpost}>
        <div className={styles.userProfile}>
          <div className={styles.profileImage}>
            <Image className={styles.image} src="/user.png" alt="" fill></Image>
          </div>

          <div className={styles.profileText}>
            <h1>{session.user.name}</h1>
            <div className={styles.paraText}>
              <p className={styles.smallText}>Email : {session.user.email}</p>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <ProfileCard user_id={session.user.id}></ProfileCard>
      </div>

      <div className={styles.others}>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default Profile;
