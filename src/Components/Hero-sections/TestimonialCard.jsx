import styles from "./Testimonial.module.css";

function TestimonialCard({ client }) {
  // const maxrating = client.rating
  const maxRating = 5;
  console.log(client);
  return (
    <div className={styles.testimonialCard}>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
        >
          <path
            d="M0 20.5C2.47905 11.5694 3.96661 6.95462 7 0H13C10.4618 7.89551 9.41947 12.3703 9 20.5H0Z"
            fill="#00703C"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
        >
          <path
            d="M0 20.5C2.47905 11.5694 3.96661 6.95462 7 0H13C10.4618 7.89551 9.41947 12.3703 9 20.5H0Z"
            fill="#00703C"
          />
        </svg>
      </span>

      <div className={styles.imageDiv}></div>
      <div className={styles.rating}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span key={i}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.5 17.27L18.68 21L17.04 13.97L22.5 9.24L15.31 8.63L12.5 2L9.69 8.63L2.5 9.24L7.96 13.97L6.32 21L12.5 17.27Z"
                fill="#00703C"
              />
            </svg>
          </span>
        ))}
      </div>
      <h4>
        Moore Joe
        {/* {client.name} */}
      </h4>
      <h6>
        Doctor
        {/* {client.profession} */}
      </h6>
      <hr />
      <p>
        This Construction service exceeded my expectation! they delivered high
        quality work, met deadlines, and were a pleasure to work with. Highly
        recommended!
        {/* {client.testimonial} */}
      </p>
    </div>
  );
}

export default TestimonialCard;
