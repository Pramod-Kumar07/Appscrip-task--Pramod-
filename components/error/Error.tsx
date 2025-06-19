import React from "react";
import { MdErrorOutline } from "react-icons/md";
import styles from "./error.module.css";

const Error = ({ message }: { message: string }) => {
  return (
    <div className={styles.wrapper}>
      <MdErrorOutline size={40} color="red" />
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Error;
