"use client";
import React, { useState } from "react";
import styles from "./productcard.module.css";
import { HiOutlineHeart } from "react-icons/hi2";
import { useIsMobileView } from "@/components/utils/useMobileView";

const ProductCard = ({ data }: { data: any }) => {
  const isMobileView = useIsMobileView();
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className={styles.productWrapper}>
      <div>
        <img
          src={data?.image || ""}
          alt={`${data?.id} product`}
          className={styles.image}
        />
      </div>
      <div className={styles.details}>
        <div className={styles.pNameWrapper}>
          <h3 className={styles.pName}>{data?.title || ""}</h3>
          {isMobileView && (
            <HiOutlineHeart
              size={16}
              onClick={() => setIsLiked(!isLiked)}
              fill={isLiked ? "red" : "none"}
              stroke={isLiked ? "red" : "black"}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <div className={styles.pNameWrapper}>
          <p className={styles.description}>
            <span>Sign in</span> or Create an account to see pricing
          </p>
          {!isMobileView && (
            <HiOutlineHeart
              size={24}
              onClick={() => setIsLiked(!isLiked)}
              fill={isLiked ? "red" : "none"}
              stroke={isLiked ? "red" : "black"}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
