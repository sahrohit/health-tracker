import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.headingText}>
          <div>
            <h1>Great Minds Think Alike.</h1>
            <p>but greater minds think beyond !</p>
          </div>
        </div>
      </header>

      <div className={styles.blob}>
        <svg
          className="blob-motion"
          id="visual"
          viewBox="0 0 960 540"
          width="960"
          height="540"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(450.7256843113689 283.4942824330989)">
            <path
              id="blob1"
              d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
              fill="#BB004B"
            ></path>
          </g>
          <g
            transform="translate(509.54377535978017 281.49390864595887)"
            style={{ visibility: "hidden" }}
          >
            <path
              id="blob2"
              d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
              fill="#BB004B"
            ></path>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Header;