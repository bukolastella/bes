import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Container from "../Reusable-Components/Container";
import styles from "./OurTeam.module.css";
import OurTeamCard from "./OurTeamCard";

function OurTeam() {
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
      <div className={styles.ourTeam}>
        <div></div>
        <h6>Our Team</h6>
        <h3>Meet Our Team</h3>
        <p>
          Discover the Passion, Dedication, and Expertise that Drive Our Success
        </p>

        <div className={styles.content}>
          <div></div>
          <div className={styles.svggs}>
            {Array.from({ length: 9 }, (_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
              >
                <circle
                  cx="4.03132"
                  cy="4.27442"
                  r="3.5"
                  transform="rotate(41 4.03132 4.27442)"
                  stroke="#00703C"
                />
              </svg>
            ))}
          </div>
          <div className={styles.cards}>
            <Carousel responsive={responsive}>
              {Array.from({ length: 5 }, (_, i) => (
                <OurTeamCard key={i} />
              ))}
            </Carousel>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
}

export default OurTeam;

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import Container from "../Reusable-Components/Container";
// import styles from "./OurTeam.module.css";
// import OurTeamCard from "./OurTeamCard";

// function OurTeam() {
//   return (
//     <Container>
//       <div className={styles.ourTeam}>
//         <div></div>
//         <h6>Our Team</h6>
//         <h3>Meet Our Team</h3>
//         <p>
//           Discover the Passion, Dedication, and Expertise that Drive Our Success
//         </p>

//         <div className={styles.content}>
//           <div></div>
//           <div className={styles.svggs}>
//             {Array.from({ length: 9 }, (_, i) => (
//               <svg
//                 key={i}
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="9"
//                 height="9"
//                 viewBox="0 0 9 9"
//                 fill="none"
//               >
//                 <circle
//                   cx="4.03132"
//                   cy="4.27442"
//                   r="3.5"
//                   transform="rotate(41 4.03132 4.27442)"
//                   stroke="#00703C"
//                 />
//               </svg>
//             ))}
//           </div>
//           <div className={styles.cards}>
//             {Array.from({ length: 3 }, (_, i) => (
//               <OurTeamCard key={i} />
//             ))}
//           </div>
//           <div></div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default OurTeam;
