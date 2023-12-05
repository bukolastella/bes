import Container from "../Reusable-Components/Container";
import TopCard from "./TopCard";
import styles from "./TopCard.module.css";

function WhatTopCards({ topArray }) {
  return (
    <Container>
      <div className={styles.topConatiner}>
        {topArray.map((elemt) => (
          <TopCard elemt={elemt} key={elemt.heading} />
        ))}
      </div>
    </Container>
  );
}

export default WhatTopCards;
