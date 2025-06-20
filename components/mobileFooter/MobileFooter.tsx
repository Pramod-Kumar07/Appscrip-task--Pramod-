import React, { useState } from "react";
import { PiDiamondFill } from "react-icons/pi";
import { PaymentIcons, USAIcon } from "../icons";
import styles from "./mobileFooter.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { title } from "process";

const info = [
  {
    title: "mettā muse",
    elements: ["About Us", "Stories", "Artisans"],
  },
  {
    title: "Quick Links",
    elements: [
      "Orders & Shipping",
      "Join/Login as a Seller",
      "Payment & Pricing",
    ],
  },
  {
    title: "Follow Us",
    elements: ["About Us", "Stories", "Artisans"],
  },
];

const MobileFooter = () => {
  return (
    <footer className={styles.footerWrapper}>
      <h1 className={styles.header}>Be the first to know</h1>
      <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. this is simply dummy text.
      </p>
      <div className={styles.inputWrapper}>
        <input placeholder="Enter your e-mail..." className={styles.input} />
        <button type="button" className={styles.button}>
          Subscribe
        </button>
      </div>
      <hr style={{ marginBottom: "24px" }} />
      <span className={styles.callus}>Call Us</span>
      <div className={styles.contactsWrapper}>
        <span className={styles.contact}>+44 221 133 5360</span>
        <PiDiamondFill size={6} />
        <span className={styles.contact}>customercare@mettamuse.com</span>
      </div>
      <hr style={{ marginBottom: "24px" }} />
      <h1 className={styles.callus}>Currency</h1>
      <div className={styles.iconWrapper}>
        <USAIcon />
        <PiDiamondFill size={6} />
        <span>USD</span>
      </div>
      <hr
        style={{
          marginBottom: "24px",
          height: "2px",
          backgroundColor: "#ffffff",
        }}
      />
      <div>
        {info.map((e, i) => (
          <Dropdown key={i} title={e.title} elements={e.elements} />
        ))}
      </div>
      <div className={styles.paymentIconWrapper}>
        <span className={styles.callus}>mettā muse Accepts</span>
        <PaymentIcons />
      </div>
      <p className={styles.bottom}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default MobileFooter;

const Dropdown = ({
  title,
  elements,
}: {
  title: string;
  elements: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.titleWrapper}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className={styles.callus}>{title}</h4>
        <MdKeyboardArrowDown
          size={20}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      {isOpen && (
        <div className={styles.elementsWrapper}>
          {elements.map((e, i) => (
            <span key={i} className={styles.contact}>
              {e}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
