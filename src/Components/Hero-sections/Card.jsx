import styles from "./SummaryOfJobs.module.css";

function Card({ heading, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.eachCard}>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default Card;
