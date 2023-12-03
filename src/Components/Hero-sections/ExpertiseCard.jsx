import styles from "./Expertise.module.css";

function ExpertiseCard({ each }) {
  return (
    <div className={styles.expertiseCard}>
      <span>{each.icon}</span>
      <h4>{each.heading}</h4>
      <p>{each.text}</p>
    </div>
  );
}

export default ExpertiseCard;
