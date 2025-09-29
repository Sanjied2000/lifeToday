"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./authLinks.module.css";
import Image from "next/image";

export default function AuthStatus() {
  const { data: session, status } = useSession();
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

  if (status === "loading") return <p>Loading...</p>;

  if (session) {
    let username = session.user.name;
    let indexOfSpace = username.indexOf(" ");
    if (indexOfSpace !== -1) {
      username = username.slice(0, indexOfSpace);
    }
    

    return (
      <div className={styles.container} ref={dropdownRef}>
        
        <div className={styles.username} onClick={() => setOpen(!open)}>
          <Image
            className={styles.linkImage}
            src="/user.png"
            alt=""
            height={15}
            width={15}
          ></Image>

          {username}
        </div>

        {/* Dropdown */}
        {open && (
          <div className={styles.dropdown}>
            <Link href="/write" className={styles.link}>
              <Image
                className={styles.linkImage}
                src="/write.png"
                alt=""
                height={24}
                width={24}
              ></Image>
              Create New Post
            </Link>

            <Link href="/profile" className={styles.link}>
              <Image
                className={styles.linkImage}
                src="/userIcon.png"
                alt=""
                height={24}
                width={24}
              ></Image>
              Profile
            </Link>
            <button className={styles.button} onClick={() => signOut()}>
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link className={styles.login} href="/login">
      Login
    </Link>
  );
}
