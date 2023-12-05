import styles from "./TopCard.module.css";

function TopCard({ elemt }) {
  return (
    <div className={styles.whatTopCard}>
      <span>{elemt.icon}</span>
      <h4>{elemt.heading}</h4>
      <p>{elemt.text}</p>
    </div>
  );
}

export default TopCard;
