import styles from "./OurTeamCard.module.css";

function OurTeamCard() {
  return (
    <div className={styles.eachTeam}>
      <div className={styles.imgDiv}>
        <img src="../team001.png" alt="A Team Member" />
      </div>
      <h3>Jimoh Monsuru</h3>
      <h6>Director</h6>
      <ul className={styles.cardIcons}>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <g clipPath="url(#clip0_699_1273)">
              <path
                d="M8.25 16.7305C8.25 16.7305 3.07969 13.7305 3.82312 5.4805C3.82312 5.4805 7.54125 9.2305 12 9.9805V8.4805C12 6.418 13.6875 4.70519 15.75 4.7305C16.4779 4.73896 17.1882 4.95523 17.7972 5.35386C18.4063 5.75248 18.8888 6.31685 19.1878 6.9805H22.5L19.5 9.9805C19.1006 16.2468 13.8675 21.2305 7.5 21.2305C4.5 21.2305 3.75 20.1055 3.75 20.1055C3.75 20.1055 6.75 18.9805 8.25 16.7305Z"
                stroke="#005CB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_699_1273">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.230469)"
                />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <g clipPath="url(#clip0_699_1277)">
              <path
                d="M12 15.9805C14.0711 15.9805 15.75 14.3015 15.75 12.2305C15.75 10.1594 14.0711 8.48047 12 8.48047C9.92893 8.48047 8.25 10.1594 8.25 12.2305C8.25 14.3015 9.92893 15.9805 12 15.9805Z"
                stroke="#005CB7"
                strokeWidth="2"
                strokeMiterlimit="10"
              />
              <path
                d="M16.5 3.23047H7.5C5.01472 3.23047 3 5.24519 3 7.73047V16.7305C3 19.2157 5.01472 21.2305 7.5 21.2305H16.5C18.9853 21.2305 21 19.2157 21 16.7305V7.73047C21 5.24519 18.9853 3.23047 16.5 3.23047Z"
                stroke="#005CB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.875 8.48047C17.4963 8.48047 18 7.97679 18 7.35547C18 6.73415 17.4963 6.23047 16.875 6.23047C16.2537 6.23047 15.75 6.73415 15.75 7.35547C15.75 7.97679 16.2537 8.48047 16.875 8.48047Z"
                fill="#005CB7"
              />
            </g>
            <defs>
              <clipPath id="clip0_699_1277">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.230469)"
                />
              </clipPath>
            </defs>
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <g clipPath="url(#clip0_699_1283)">
              <path
                d="M12 21.2305C16.9706 21.2305 21 17.201 21 12.2305C21 7.25991 16.9706 3.23047 12 3.23047C7.02944 3.23047 3 7.25991 3 12.2305C3 17.201 7.02944 21.2305 12 21.2305Z"
                stroke="#005CB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 8.48047H14.25C13.6533 8.48047 13.081 8.71752 12.659 9.13948C12.2371 9.56144 12 10.1337 12 10.7305V21.2305"
                stroke="#005CB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 13.7305H15"
                stroke="#005CB7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_699_1283">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.230469)"
                />
              </clipPath>
            </defs>
          </svg>
        </li>
      </ul>
    </div>
  );
}

export default OurTeamCard;
