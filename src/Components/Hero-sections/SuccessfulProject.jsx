import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./Expertise.module.css";
function SuccessfulProject() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const projectImages = [
    "proj1.png",
    "proj2.png",
    "proj3.png",
    "proj4.png",
    "proj5.png",
  ];
  return (
    <div className={styles.successfulProjectsImageDiv}>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        draggable={true}
        showDots={false}
        infinite
        pauseOnHover
        keyBoardControl={true}
        responsive={responsive}
      >
        {projectImages.map((each) => (
          <div key={each}>
            <img src={`../${each}`} alt="Our Project" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SuccessfulProject;
