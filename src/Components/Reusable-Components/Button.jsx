import styles from "./Button.module.css";
function Button({
  background = "#005CB7",
  color = "#FAFBFC",

  children,
}) {
  //   const btnStyles = {
  //     background,
  //     color,
  //     fontFamily: "Quicksand",
  //     fontSize: "16px",
  //     fontStyle: "normal",
  //     fontWeight: "500",
  //     lineHeight: "150%" /* 24px */,
  //     // text-decoration-line: underline;
  //   };
  return (
    <button
      style={{
        background,
        color,
        fontFamily: "Quicksand",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: "500",
        // fontSize: "16px",
        // lineHeight: "24px" /* 250% */,
        // text-decoration-line: underline;
      }}
      className={styles.btn}
    >
      {children}
    </button>
  );
}

export default Button;
