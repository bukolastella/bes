import { useState } from "react";
import Container from "../Reusable-Components/Container";
import styles from "./CompanyContentDiv.module.css";
import Button from "../Reusable-Components/Button";

function CompanyContentDiv() {
  const [open, setOpen] = useState(true);

  const [name, setName] = useState("");
  const [gmail, setGmail] = useState("Eisoft@gmail.com");
  const [service, setServices] = useState("");
  const [textArea, setTextArea] = useState("");
  const accordiumHandler = () => setOpen((open) => !open);
  console.log(open, accordiumHandler);
  const submitHandler = function (e) {
    e.preventDefault();
  };
  return (
    <Container>
      <div className={styles.companyContentDiv}>
        <h2>Let’s Work Together.</h2>
        <p>
          Your expertise and projects matter to us. Before accessing our contact
          form and head office details, we welcome your inquiries and feedback.
          Let&apos;s collaborate to elevate your construction endeavors
        </p>
        <div className={styles.contentDiv}>
          <ul className={styles.left}>
            <li>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M21 15.5C21 16.0304 20.7893 16.5391 20.4142 16.9142C20.0391 17.2893 19.5304 17.5 19 17.5H7L3 21.5V5.5C3 4.96957 3.21071 4.46086 3.58579 4.08579C3.96086 3.71071 4.46957 3.5 5 3.5H19C19.5304 3.5 20.0391 3.71071 20.4142 4.08579C20.7893 4.46086 21 4.96957 21 5.5V15.5Z"
                    stroke="#00703C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>unreal@outlook.com</span>
              </div>
              <span onClick={accordiumHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M12.75 10.625L8.5 6.375L4.25 10.625"
                    stroke="#00703C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="#00703C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#00703C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>932 Eibert summit Suote 375 Lake Leonardchester</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M22.0004 17.4201V20.4201C22.0016 20.6986 21.9445 20.9743 21.8329 21.2294C21.7214 21.4846 21.5577 21.7137 21.3525 21.902C21.1473 22.0902 20.905 22.2336 20.6412 22.3228C20.3773 22.412 20.0978 22.4452 19.8204 22.4201C16.7433 22.0857 13.7874 21.0342 11.1904 19.3501C8.77425 17.8148 6.72576 15.7663 5.19042 13.3501C3.5004 10.7413 2.44866 7.77109 2.12042 4.6801C2.09543 4.40356 2.1283 4.12486 2.21692 3.86172C2.30555 3.59859 2.44799 3.35679 2.63519 3.15172C2.82238 2.94665 3.05023 2.78281 3.30421 2.67062C3.5582 2.55843 3.83276 2.50036 4.11042 2.5001H7.11042C7.59573 2.49532 8.06621 2.66718 8.43418 2.98363C8.80215 3.30008 9.0425 3.73954 9.11042 4.2201C9.23704 5.18016 9.47187 6.12282 9.81042 7.0301C9.94497 7.38802 9.97408 7.77701 9.89433 8.15098C9.81457 8.52494 9.62928 8.86821 9.36042 9.1401L8.09042 10.4101C9.51398 12.9136 11.5869 14.9865 14.0904 16.4101L15.3604 15.1401C15.6323 14.8712 15.9756 14.6859 16.3495 14.6062C16.7235 14.5264 17.1125 14.5556 17.4704 14.6901C18.3777 15.0286 19.3204 15.2635 20.2804 15.3901C20.7662 15.4586 21.2098 15.7033 21.527 16.0776C21.8441 16.4519 22.0126 16.9297 22.0004 17.4201Z"
                  stroke="#00703C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>+ 84 090 700 788</span>
            </li>
          </ul>
          {open && (
            <form onSubmit={submitHandler} className={styles.right}>
              <div className={styles.name}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    e.preventDefault();
                    return setName(e.target.value);
                  }}
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.3337 14V12.6667C13.3337 11.9594 13.0527 11.2811 12.5526 10.781C12.0525 10.281 11.3742 10 10.667 10H5.33366C4.62641 10 3.94814 10.281 3.44804 10.781C2.94794 11.2811 2.66699 11.9594 2.66699 12.6667V14M10.667 4.66667C10.667 6.13943 9.47308 7.33333 8.00033 7.33333C6.52757 7.33333 5.33366 6.13943 5.33366 4.66667C5.33366 3.19391 6.52757 2 8.00033 2C9.47308 2 10.667 3.19391 10.667 4.66667Z"
                      stroke="#CED3DC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className={styles.gmail}>
                <input
                  disabled
                  type="text"
                  placeholder="Name"
                  value={gmail}
                  onChange={(e) => {
                    e.preventDefault();
                    return setGmail(e.target.value);
                  }}
                />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M5.83301 14.1666L14.1663 5.83325M14.1663 5.83325H5.83301M14.1663 5.83325V14.1666"
                      stroke="#348CD3"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className={styles.services}>
                <select
                  id=""
                  value={service}
                  onChange={(e) => setServices(e.target.value)}
                >
                  <option value="">Which of our services do you need?</option>
                  <option value="1">Which of our services do you need?</option>
                  <option value="2">Which of our services do you need?</option>
                  <option value="2">Which of our services do you need?</option>
                </select>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#CED3DC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className={styles.textAreaDiv}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  value={textArea}
                  onChange={(e) => setTextArea(e.target.value)}
                ></textarea>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z"
                      stroke="#CED3DC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <Button
                background="#00703C"
                color="#FFF"
                onHandler={submitHandler}
              >
                Lets Talk
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4.16699 10.0001H15.8337M15.8337 10.0001L10.0003 4.16675M15.8337 10.0001L10.0003 15.8334"
                      stroke="white"
                      strokeWidth="1.67"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
}

export default CompanyContentDiv;
