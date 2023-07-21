import React from "react";
import "./styles.css";

const Footer: React.FC = (): JSX.Element => (
  <footer className="footer-container">
    <p className="title-text">
      created by{" "}
      <span>
        <a
          className="bold-underline"
          href="https://github.com/ridopurnomo86"
          target="__blank"
        >
          ridopurnomo86
        </a>
      </span>{" "}
      - devChallenges.io
    </p>
  </footer>
);

export default Footer;
