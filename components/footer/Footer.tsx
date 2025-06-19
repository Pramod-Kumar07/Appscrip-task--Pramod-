import React from "react";
import styles from "./footer.module.css";
import ContactUs from "./ContactUs";
import { AiFillInstagram } from "react-icons/ai";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { PaymentIcons } from "../icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContactUs />

      <hr className={styles.divider} />

      <div className={styles.desktopLinks}>
        <div>
          <h5>mettā muse</h5>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div>
          <h5>QUICK LINKS</h5>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h5>FOLLOW US</h5>
          <section>
            <span>
              <AiFillInstagram size={16} />
            </span>
            <span>
              <RiLinkedinBoxFill size={16} />
            </span>
          </section>
          <div className={styles.paymentSection}>
            <h5>mettā muse Accepts</h5>
            <PaymentIcons />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
