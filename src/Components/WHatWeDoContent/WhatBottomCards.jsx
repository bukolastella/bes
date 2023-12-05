import Container from "../Reusable-Components/Container";
import CardImage from "./CardImage";
import styles from "./WhatBottomCards.module.css";

function WhatBottomCards({ bottomArray }) {
  return (
    <Container>
      <div className={styles.bottonContainer}>
        <div className={styles.left}>
          <CardImage image={bottomArray[0]} key={bottomArray[0]} />
        </div>

        <div className={styles.right}>
          <CardImage image={bottomArray[1]} key={bottomArray[1]} />
          <CardImage image={bottomArray[2]} key={bottomArray[2]} />
        </div>
      </div>
      <div className={styles.space}></div>
    </Container>
  );
}

export default WhatBottomCards;
