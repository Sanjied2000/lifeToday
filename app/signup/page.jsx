"use client";
import React, { useState } from "react";
import styles from "./signup.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Password error! Please make sure both passwords are same.");
      return;
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message || "Signup failed");
        return;
      }
      router.push("/login");
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
       <Link href="/">  <h1>lifeToday</h1></Link>
        </div>

        <form className={styles.form} onSubmit={handleSignup}>
          <input
            className={styles.name}
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <input
            className={styles.password}
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className={styles.button} type="submit">
            SignUp
          </button>
        </form>

        {errorMessage && <div className={styles.errorText}>{errorMessage}</div>}

        <div className={styles.signup}>
          <p>Already have an account?</p>
          <Link className={styles.signuplink} href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
