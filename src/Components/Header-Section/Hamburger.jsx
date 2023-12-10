import { useState } from "react";
import styles from "./Header.module.css";

const Hamburger = () => {
  const [open, setOpen] = useState(true);
  function handler() {
    setOpen((open) => !open);
  }
  return (
    <span
      className={styles.hamburger}
      onClick={() => {
        handler(open);
      }}
    >
      {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          //   classes="bi bi-list"
          viewBox="0 0 16 16"
          width="24"
          height="24"
          style={{ color: "#333437", fontWeight: "900" }}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          //   classes="bi bi-x-lg"
          viewBox="0 0 16 16"
          width="24"
          height="24"
          style={{ color: "#333437", fontWeight: "900" }}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      )}
    </span>
  );
};

export default Hamburger;
