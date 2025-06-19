import React from "react";
import styles from "./shopHeader.module.css";

const ShopHeader = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Discover our products</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
    </div>
  );
};

export default ShopHeader;
