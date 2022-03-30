import React, { useState } from "react";

import logimg from "./images/abinlogonoback.png";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import SocialLinks from "./links/SocialLinks";

function Contact() {
  const [baropen, setBaropen] = useState(false);

  const navbar = () => {
    setBaropen(true);
  };
  const sidebarclose = () => {
    setBaropen(false);
  };
  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logimg} className="nav-logo" alt="nav logo" />
            <button className="nav-btn" onClick={navbar}>
              <FaBars className="fas fa-bars" />
            </button>
          </div>

          <ul className="nav-links">
            <Link to={"/"}>home</Link>
            <Link to={"/contact"}>contact</Link>
            <Link to={"/adminverify"}>admin</Link>
          </ul>
        </div>
      </nav>
      <aside className={baropen ? "sidebar show-sidebar" : "sidebar"}>
        <div>
          <button className="close-btn" onClick={sidebarclose}>
            <FaTimes className="fas fa-times" />
          </button>
          <ul className="sidebar-links">
            <Link to={"/"}>home</Link>
            <Link to={"/contact"} onClick={sidebarclose}>
              contact
            </Link>
            <Link to={"/adminverify"}>admin</Link>
          </ul>

          <SocialLinks />
        </div>
      </aside>

      <section class="section single-page">
        <div class="section-title">
          <h1>contact</h1>
          <div class="underline"></div>
        </div>
        <div class="section-center page-info">
          <p>
            If you are looking to get ahold of me, you can send me an email at
            <a href="mailto:abinvv9108834737@gmail.com">@your_email</a>
          </p>
          <p>
            You can also reach me on linkedin at
            <a href="https://www.linkedin.com/in/abin-vinod-a50b65227">
              @your_social_media
            </a>
          </p>
        </div>
      </section>
      <footer class="footer">
        <SocialLinks />
        <p>
          &copy; <span id="date"></span> Abin v v. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Contact;
