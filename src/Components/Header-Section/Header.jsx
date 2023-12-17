import { Link } from "react-router-dom";
import Button from "../Reusable-Components/Button";
import Container from "../Reusable-Components/Container";
import styles from "./Header.module.css";
import { useState } from "react";

// import Container from "./Components/Reusable-Components/Container";
import Logo from "./Logo";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Container paddingType="sidePaddings">
      <div className={styles.header}>
        <Logo />
        <Nav open={open} setOpen={setOpen} />
        <div className={styles.btnContainer}>
          <Link to="/contact">
            <Button>
              Contact Us
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g clipPath="url(#clip0_299_5239)">
                    <path
                      d="M6.54 5.61523C6.6 6.50523 6.75 7.37523 6.99 8.20523L5.79 9.40523C5.38 8.20523 5.12 6.93523 5.03 5.61523H6.54ZM16.4 17.6352C17.25 17.8752 18.12 18.0252 19 18.0852V19.5752C17.68 19.4852 16.41 19.2252 15.2 18.8252L16.4 17.6352ZM7.5 3.61523H4C3.45 3.61523 3 4.06523 3 4.61523C3 14.0052 10.61 21.6152 20 21.6152C20.55 21.6152 21 21.1652 21 20.6152V17.1252C21 16.5752 20.55 16.1252 20 16.1252C18.76 16.1252 17.55 15.9252 16.43 15.5552C16.33 15.5152 16.22 15.5052 16.12 15.5052C15.86 15.5052 15.61 15.6052 15.41 15.7952L13.21 17.9952C10.38 16.5452 8.06 14.2352 6.62 11.4052L8.82 9.20523C9.1 8.92523 9.18 8.53523 9.07 8.18523C8.7 7.06523 8.5 5.86523 8.5 4.61523C8.5 4.06523 8.05 3.61523 7.5 3.61523Z"
                      fill="#FAFBFC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_299_5239">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 0.615234)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </Button>
          </Link>
        </div>
        <Hamburger open={open} setOpen={setOpen} />
      </div>
    </Container>
  );
}

export default Header;
