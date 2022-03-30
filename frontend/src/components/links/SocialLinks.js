import React from "react";
import {
  FaBehanceSquare,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquarespace,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import "../../index.css";

function SocialLinks() {
  return (
    <ul className="social-icons">
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100039997063450"
          className="social-icon"
        >
          <FaFacebook className="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/abin-vinod-a50b65227"
          className="social-icon"
        >
          <FaLinkedin className="fab fa-linkedin" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Abin007v" className="social-icon">
          <BsGithub className="fab fa-squarespace" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/_abin_v_/" className="social-icon">
          <FaInstagram className="fab fa-instagram" />
        </a>
      </li>
      <li>
        <a href="mailto:abinvv9108834737@gmail.com" className="social-icon">
          <SiGmail className="fab fa-squarespace" />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
