"use client";
import React from "react";
import styles from "./breadcrumb.module.css";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArr = pathname.split("/");
  pathArr.unshift("Home");
  return (
    <div className={styles.wrapper}>
      {pathArr.map((e, i) => {
        if (e == "" || e == " ") return;
        return (
          <div className={styles.path}>
            <span
              className={
                i !== pathArr.length - 1 ? styles.inactive : styles.active
              }
            >
              {e}
            </span>
            {i !== pathArr.length - 1 && (
              <span className={styles.inactive}>|</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
