import Container from "../Reusable-Components/Container";
import styles from "./Expertise.module.css";
import SuccessfulProject from "./SuccessfulProject";

function ExperienceInAction() {
  return (
    <Container>
      <div className={styles.experience}>
        <p>500+ Successful Projects</p>
        <h4>Experience Our Expertise in Action</h4>
        <SuccessfulProject />
      </div>
    </Container>
  );
}

export default ExperienceInAction;
