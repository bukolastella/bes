import Button from "../Reusable-Components/Button";
import Container from "../Reusable-Components/Container";
import styles from "./Team.module.css";

function Team() {
  return (
    <Container background="#FAFBFC">
      <div className={styles.teamDiv}>
        <h3>Become A Part Of Our Team</h3>
        <p>
          Heres your opportunity to join a unique, global company with an
          incredible, life changing mission
        </p>
        <div className={styles.btnDiv}>
          <Button>
            Visit Us
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clipPath="url(#clip0_299_4968)">
                  <path
                    d="M4.25 12H20.75"
                    stroke="#FAFBFC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 5.25L20.75 12L14 18.75"
                    stroke="#FAFBFC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_299_4968">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Team;
