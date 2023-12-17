import { Link } from "react-router-dom";
import SuccessfulProject from "../Hero-sections/SuccessfulProject";
import Button from "../Reusable-Components/Button";
import Container from "../Reusable-Components/Container";
import styles from "./RecentProject.module.css";
function RecentProject() {
  return (
    <Container>
      <div className={styles.recentProject}>
        <h3>Take A Look At Our Recent Projects</h3>
        <p>
          Explore our portfolio of successfully completed projects that showcase
          our expertise and commitment to excellence.
        </p>
        <div className={styles.space1}></div>
        <SuccessfulProject />
        <div className={styles.space2}></div>
        <Link>
          <Button
            background="#C9ECFB"
            color="#67696E"
            handler={() => console.log("hello baby")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.2686 3.66829C13.5686 3.36833 13.9755 3.19983 14.3998 3.19983C14.8241 3.19983 15.231 3.36833 15.531 3.66829L22.731 10.8683C23.031 11.1683 23.1995 11.5752 23.1995 11.9995C23.1995 12.4237 23.031 12.8306 22.731 13.1307L15.531 20.3307C15.2292 20.6221 14.8251 20.7834 14.4056 20.7798C13.986 20.7761 13.5847 20.6079 13.2881 20.3112C12.9914 20.0145 12.8232 19.6132 12.8195 19.1937C12.8159 18.7742 12.9772 18.3701 13.2686 18.0683L17.5998 13.5995H2.3998C1.97546 13.5995 1.56849 13.4309 1.26843 13.1309C0.968376 12.8308 0.799805 12.4238 0.799805 11.9995C0.799805 11.5751 0.968376 11.1682 1.26843 10.8681C1.56849 10.5681 1.97546 10.3995 2.3998 10.3995H17.5998L13.2686 5.93069C12.9687 5.63064 12.8001 5.22375 12.8001 4.79949C12.8001 4.37522 12.9687 3.96833 13.2686 3.66829Z"
                  fill="#005CB7"
                />
              </svg>
            </span>
            Explore more
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default RecentProject;
