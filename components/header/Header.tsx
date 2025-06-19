import React from "react";
import styles from "./header.module.css";
import { LoremIcon } from "../icons";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <LoremIcon />
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={styles.content}>
        <LoremIcon />
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={styles.content}>
        <LoremIcon />
        <span>Lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default Header;
