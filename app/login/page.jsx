"use client";

import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setErrorMessage(result.error);
    } else {
      router.push("/");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h1>lifeToday</h1>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <input
            className={styles.email}
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className={styles.password}
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.button} type="submit">
            Login
          </button>
        </form>

        {errorMessage && <div className={styles.errorText}>{errorMessage}</div>}

        <div className={styles.signup}>
          <p>Not have an account?</p>
          <Link className={styles.signuplink} href="/signup">
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
