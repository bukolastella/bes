import styles from "./Button.module.css";
function Button({
  background = "#005CB7",
  color = "#FAFBFC",
  children,
  handler,
  eventType = "Click",
}) {
  // const event = {eventType ? onClick={handlerClick} :  onSubmit={handlerSubmit}}

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
      onClick={eventType === "Click" ? handler : undefined}
      onSubmit={eventType === "Submit" ? handler : undefined}
    >
      {children}
    </button>
  );
}

export default Button;
