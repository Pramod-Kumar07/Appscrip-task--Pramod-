"use client";
import React from "react";
import styles from "./navigation.module.css";
import { DesktopLogo, MobileLogo } from "../icons";
import { useIsMobileView } from "../utils/useMobileView";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineHeart, HiOutlineUser } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const Navigation = () => {
  const languages = ["Eng", "Hindi"];
  const links = [
    { name: "Shop", href: "/" },
    { name: "Skills", href: "/" },
    { name: "Stories", href: "/" },
    { name: "About", href: "/" },
    { name: "Contact us", href: "/" },
  ];
  const isMobileView = useIsMobileView();

  return (
    <>
      <nav className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          <div className={styles.humburger}>
            {isMobileView && (
              <button type="button">
                <RxHamburgerMenu size={20} />
              </button>
            )}
            {isMobileView ? <MobileLogo /> : <DesktopLogo />}
          </div>

          <div className={styles.logoText}>
            <h1 className={styles.logo}>LOGO</h1>
          </div>

          <div className={styles.iconWrapper}>
            <RiSearch2Line size={!isMobileView ? 24 : 20} />
            <HiOutlineHeart size={!isMobileView ? 24 : 20} />
            <LiaShoppingBagSolid size={!isMobileView ? 24 : 20} />
            {!isMobileView && (
              <>
                <HiOutlineUser size={!isMobileView ? 24 : 20} />
                <select className={styles.language_dropdown}>
                  {languages.map((e) => (
                    <option key={e}>{e}</option>
                  ))}
                </select>
              </>
            )}
          </div>
        </div>
        {!isMobileView && (
          <div className={styles.linkWrapper}>
            {links.map((e) => (
              <Link href={e.href} className={styles.link} key={e.name}>
                {e.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
      {isMobileView && <Breadcrumb />}
    </>
  );
};

export default Navigation;
