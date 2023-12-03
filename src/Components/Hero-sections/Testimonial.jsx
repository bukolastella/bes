import Container from "../Reusable-Components/Container";
import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  const testimonialArrayLength = 3;
  return (
    <Container>
      <div className={styles.testimonial}>
        <h3>Testimonials</h3>
        <div className={styles.testimonailContent}>
          {Array.from({ length: testimonialArrayLength }, (_, i) => (
            <TestimonialCard maxRating="5" key={i} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Testimonial;
