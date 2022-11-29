import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer bg-dark py-3 mt-auto">
      <div class="container text-center">
        <span class="text-muted">
          Made by Pranjal Katiyar
          <a href="https://www.linkedin.com/in/pranjal-katiyar-3235971b7/">
            {" "}<FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
