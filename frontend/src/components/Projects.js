import React, { useEffect, useState } from "react";

import logimg from "./images/abinlogonoback.png";

import project1 from "./images/project-1.jpeg";
import { Link } from "react-router-dom";

import { FaGithub, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import SocialLinks from "./links/SocialLinks";
import { useParams } from "react-router-dom";
import axios from "axios";

function Projects() {
  const [baropen, setBaropen] = useState(false);
  const [project, setProject] = useState([]);
  const { id } = useParams();
  const navbar = () => {
    setBaropen(true);
  };
  const sidebarclose = () => {
    setBaropen(false);
  };

  const getData = () => {
    axios
      .get(`/projects/${id}`)
      .then((res) => {
        setProject(res.data);
        // console.log(project);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

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
            <Link to={"/contact"}>contact</Link>
            <Link to={"/adminverify"}>admin</Link>
          </ul>
          <SocialLinks />
        </div>
      </aside>

      <header class="projects-hero">
        <div class="section-title">
          <h1>my project</h1>
          <div class="underline"></div>
        </div>
      </header>
      <section class="section">
        <div class="section-center projects-page-center">
          <article class="single-project">
            <div class="project-container">
              <img src={project.image} alt="single project" />
              <a href={project.projectGitLink} class="project-icon">
                <i class="fas fa-home">
                  <FaHome />
                </i>
              </a>
            </div>
            <div class="project-details">
              <h4>{project.title}</h4>
              <p>{project.projectDesc}</p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github" style={{ fontSize: "3rem" }}>
                    <FaGithub />
                  </i>
                </span>
                <div className="project-dev-new">
                  <div className="project-dev-new-inner">
                    <a
                      style={{
                        color: "green",
                        border: "3px solid green",
                        textAlign: "center",
                        padding: "5px 20px",
                        height: "2.5rem",
                        borderRadius: "10px",
                        margin: "10px",
                      }}
                      href={project.liveProjectLink}
                    >
                      Live Link
                    </a>
                    <a
                      style={{
                        border: "3px solid hsl(42, 78%, 60%)",
                        textAlign: "center",
                        padding: "5px 20px",
                        height: "2.5rem",
                        borderRadius: "10px",
                        margin: "10px",
                      }}
                      href={project.projectGitLink}
                    >
                      source code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
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

export default Projects;
