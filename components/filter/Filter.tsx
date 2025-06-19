import React, { useState } from "react";
import styles from "./filter.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const filters = [
  {
    title: "IDEAL FOR",
    options: ["Men", "Women", "Baby & Kids"],
  },
  { title: "OCCASION" },
  { title: "WORK" },
  { title: "FABRIC" },
  { title: "SEGMENT" },
  { title: "SUITABLE FOR" },
  { title: "RAW MATERIALS" },
  { title: "PATTERN" },
];

const Filter = () => {
  const [expanded, setExpanded] = useState({});
  const [idealForSelections, setIdealForSelections] = useState([]);

  const toggleSection = (title: string) => {
    setExpanded((prev: any) => ({ ...prev, [title]: !prev[title] }));
  };

  const toggleIdealFor = (option: [string]) => {
    setIdealForSelections((prev: any) =>
      prev.includes(option)
        ? prev.filter((item: any) => item !== option)
        : [...prev, option]
    );
  };

  const unselectAll = () => {
    setIdealForSelections([]);
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable" className={styles.checkboxLabel}>
          CUSTOMIZBLE
        </label>
      </div>

      {filters.map(({ title, options }) => (
        <div key={title} className={styles.filterSection}>
          <div
            className={styles.filterHeader}
            onClick={() => toggleSection(title)}
          >
            <span>{title}</span>
            <MdKeyboardArrowDown
              size={16}
              style={{
                transform: (expanded as any)[title]
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
          <div className={styles.allText}>All</div>

          {(expanded as any)[title] && title === "IDEAL FOR" && (
            <div className={styles.optionsContainer}>
              <div onClick={unselectAll} className={styles.unselectAll}>
                Unselect all
              </div>
              {(options as any).map((option: any) => (
                <label key={option} className={styles.optionLabel}>
                  <input
                    type="checkbox"
                    checked={(idealForSelections as any).includes(option)}
                    onChange={() => toggleIdealFor(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
