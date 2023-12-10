import styles from "./WhatBottomCards.module.css";

function CardImage({ image }) {
  return (
    <div className={styles.imgHeight}>
      <img src={image} alt="site image" />
    </div>
  );
}
export default CardImage;
