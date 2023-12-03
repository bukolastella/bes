import Container from "../Reusable-Components/Container";
import styles from "./Expertise.module.css";

function ExperienceInAction() {
  return (
    <Container>
      <div className={styles.experience}>
        <p>500+ Successful Projects</p>
        <h4>Experience Our Expertise in Action</h4>
        <div className={styles.experienceImageDiv}>
          <img src="../experience-bg.png" alt="Our Work" />
        </div>
      </div>
    </Container>
  );
}

export default ExperienceInAction;
