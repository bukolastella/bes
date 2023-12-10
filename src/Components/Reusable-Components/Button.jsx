import styles from "./Button.module.css";
function Button({ background = "#005CB7", color = "#FAFBFC", children }) {
  return (
    <button
      style={{
        background,
        color,
        fontFamily: "Quicksand",
        fontSize: "15px",
        fontStyle: "normal",
        fontWeight: "500",
      }}
      className={styles.btn}
    >
      {children}
    </button>
  );
}

export default Button;
