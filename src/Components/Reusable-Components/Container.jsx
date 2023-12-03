import styles from "./Container.module.css";

function Container({
  children,
  paddingType = "sidePaddings",
  background = "#fff",
  //   background = "#FAFBFC",
}) {
  //   const paddingType = paddingType;
  return (
    <div
      style={{ background }}
      className={`${styles.container} ${styles[paddingType]} `}
    >
      {children}
    </div>
  );
}

export default Container;
