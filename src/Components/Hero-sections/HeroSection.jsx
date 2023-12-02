import Button from "../Reusable-Components/Button";
import Container from "../Reusable-Components/Container";

import styles from "./HeroSection.module.css";
import SummaryOfJobs from "./SummaryOfJobs";

function HeroSection() {
  return (
    <div>
      <Container paddingType="sidePaddings">
        <div className={styles.heroSection}>
          <div className={styles.heroSectionLeft}>
            <div className={styles.headingDiv}>
              <h1>
                Crafting Excellence in Infrastructure and Innovation through our
                Diverse <span>Engineering Expertise</span>
              </h1>
              <span className={styles.headingSvg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="394"
                  height="21"
                  viewBox="0 0 394 21"
                  fill="none"
                >
                  <path
                    d="M1 20C13.5112 -2.33642 103.705 -5.99477 393 14.4672"
                    stroke="#005CB7"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </div>

            <p>
              <span>&quot;</span>Empowering Your Vision with Comprehensive
              Engineering Excellence — From Piling works to Project Management,
              We Deliver Solutions That Build Success.<span>&quot;</span>
            </p>
            <Button background="#00703C">Get A Free Quote</Button>
          </div>
          <div className={styles.heroSectionRight}>
            <div className={styles.heroSectionRightImage}>
              <img src="../contractors-image.png" alt="contractors-image" />
            </div>
            {/* <p>hello</p> */}
          </div>
        </div>
        <div className={styles.sinceDiv}>
          <p>Helping Our Customer Create a Better World</p>
          <h2>Since 1999</h2>
        </div>
      </Container>
      <SummaryOfJobs />
    </div>
  );
}

export default HeroSection;
{
  /* <SummaryOfJobs /> */
}
