import React, { useState } from "react";
import styles from "./sortDropdown.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const options = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");

  const handleSelect = (option: any) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <MdKeyboardArrowDown
          size={16}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>
      {isOpen && (
        <div className={styles.optionWrapper}>
          {options.map((option) => (
            <div
              key={option}
              className={`${styles.option} ${
                selected === option ? styles.active : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {selected === option && <FaCheck size={26} color="#292D32" />}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
