"use client";
import React, { useState } from "react";
import ShopHeader from "./header/ShopHeader";
import useFetch from "../utils/useFetch";
import Loader from "../loader/Loader";
import Error from "../error/Error";
import ProductCard from "./products/ProductCard";
import styles from "./shop.module.css";
import Filter from "../filter/Filter";
import Footer from "../footer/Footer";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SortDropdown from "../sortDropdown/SortDropdown";

const Shop = () => {
  const { data, error, isLoading } = useFetch();
  const [isFilter, setIsFilter] = useState(false);
  return (
    <div>
      <ShopHeader />
      <div className={styles.shopContainer}>
        {isLoading && <Loader />}
        {error && <Error message={error} />}
        <div className={styles.headerWrapper}>
          <div className={styles.countWrapper}>
            <span className={styles.count}>
              {(data as any)?.length || 0} Items
            </span>
            <span
              className={styles.filterButton}
              onClick={() => setIsFilter(!isFilter)}
            >
              <MdKeyboardArrowLeft
                size={16}
                style={{
                  transform: isFilter ? "rotate(0deg)" : "rotate(180deg)",
                  transition: "transform 0.3s ease",
                }}
              />
              {isFilter ? "Hide Filter" : "Show Filter"}
            </span>
          </div>
          <SortDropdown />
        </div>
        <div className={styles.container}>
          {isFilter && (
            <div className={styles.filterContainer}>
              <Filter />
            </div>
          )}
          {data && (
            <div className={styles.productsWrapper}>
              {(data as any).map((p: any, i: number) => (
                <ProductCard data={p} key={p.id} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
