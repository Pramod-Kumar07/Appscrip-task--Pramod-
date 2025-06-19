import React from "react";
import styles from "./contactus.module.css";
import { USAIcon } from "../icons";
import { PiDiamondFill } from "react-icons/pi";

const ContactUs = () => {
  return (
    <div className={styles.contactUsWrapper}>
      <div>
        <h2 className={styles.heading}>Be the first to know</h2>
        <p className={styles.text}>Sign up for updates from mettā muse.</p>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            placeholder="Enter your e-mail..."
            className={styles.input}
          />
          <button className={styles.button}>Subscribe</button>
        </div>
      </div>
      <div>
        <h2 className={styles.contactUs}>CONTACT US</h2>
        <p className={styles.contactNum}>+44 221 133 5360</p>
        <p className={styles.email}>customercare@mettamuse.com</p>
        <h2 className={styles.currencyTitle}>Currency</h2>
        <div className={styles.iconWrapper}>
          <USAIcon />
          <PiDiamondFill />
          <span>USD</span>
        </div>
        <p className={styles.currencyText}>
          Transactions will be completed in Euros and a currency reference is
          available on hover.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
