import Carousel from "react-multi-carousel";
import Container from "../Reusable-Components/Container";
import styles from "./Testimonial.module.css";
import TestimonialCard from "./TestimonialCard";

function Testimonial() {
  const testimonialArrayLength = 3;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container>
      <div className={styles.testimonial}>
        <h3>Testimonials</h3>
        <div className={styles.testimonailContent}>
          <Carousel responsive={responsive}>
            {Array.from({ length: testimonialArrayLength }, (_, i) => (
              <TestimonialCard maxRating="5" key={i} />
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
}

export default Testimonial;
