"use client";
import React from "react";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
};

export default Loader;
