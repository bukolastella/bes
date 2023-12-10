import Button from "../Reusable-Components/Button";
import Container from "../Reusable-Components/Container";
import styles from "./ProjectHeroSection.module.css";

const btnArray = ["Mission", "Vision", "Our Value"];

function ProjectHeroSection() {
  return (
    <Container background="#FAFBFC">
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1440"
              height="248"
              viewBox="0 0 1440 248"
              fill="none"
            >
              <path
                d="M1440 0H2.5L0 195.131C569.715 269.143 884.288 262.013 1440 195.131V0Z"
                fill="#00703C"
              />
            </svg>

            <div className={styles.headingContent}>
              <h3>Discover Our Story, Vision, and Mission </h3>
              <p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.2686 3.66865C13.5686 3.3687 13.9755 3.2002 14.3998 3.2002C14.8241 3.2002 15.231 3.3687 15.531 3.66865L22.731 10.8687C23.031 11.1687 23.1995 11.5756 23.1995 11.9999C23.1995 12.4241 23.031 12.831 22.731 13.1311L15.531 20.3311C15.2292 20.6225 14.8251 20.7838 14.4056 20.7801C13.986 20.7765 13.5847 20.6082 13.2881 20.3116C12.9914 20.0149 12.8232 19.6136 12.8195 19.1941C12.8159 18.7746 12.9772 18.3704 13.2686 18.0687L17.5998 13.5999H2.3998C1.97546 13.5999 1.56849 13.4313 1.26843 13.1312C0.968376 12.8312 0.799805 12.4242 0.799805 11.9999C0.799805 11.5755 0.968376 11.1685 1.26843 10.8685C1.56849 10.5684 1.97546 10.3999 2.3998 10.3999H17.5998L13.2686 5.93105C12.9687 5.63101 12.8001 5.22412 12.8001 4.79985C12.8001 4.37559 12.9687 3.9687 13.2686 3.66865Z"
                      fill="#C9ECFB"
                    />
                  </svg>
                </span>
                Get to Know Bortarr Engineering Service Better in this Section.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.bottom}>
        <div className={styles.bottomUp}>
          <div className={styles.leftUp}>
            <h3>We Help Bring Your Visions to Life</h3>
            <p>
              BORTTAR ENGINEERING SERVICES LTD is a fast growing indigenous
              engineering company with experience and expertise in the areas of
              Civil, Structural, Geotechnical, Marine Engineering, Harbour and
              Dredging Services Project Management and General Construction
              activities. The firm is well experienced and adequately equipped
              with the right machinery in all her areas of operation.
            </p>
          </div>
          <div className={styles.rightUp}>
            <img src="../project-hero.png" alt="project-hero-Image" />
          </div>
        </div>
        <div className={styles.bottomDown}>
          <hr />
          <div className={styles.btns}>
            {btnArray.map((each) => (
              <Button key={each}>{each}</Button>
            ))}
          </div>
          <p>
            At [Your Company Name], our mission is to lead the construction
            industry with eco-friendly practices, unwavering commitment to
            quality, and the creation of enduring, sustainable structures that
            enrich our world while earning the trust of our clients, partners,
            and communities.&quot;
          </p>
        </div>
      </div>
    </Container>
  );
}

export default ProjectHeroSection;

{
  /* <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1440"
                height="248"
                viewBox="0 0 1440 248"
                fill="none"
              >
                <path
                  d="M1440 0H2.5L0 195.131C569.715 269.143 884.288 262.013 1440 195.131V0Z"
                  fill="#00703C"
                />
              </svg>
            </div> */
}
