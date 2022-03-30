import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logimg from "./images/abinlogonoback.png";

import project1 from "./images/project-1.jpeg";

import vid from "./videos/jsvid.mp4";

import { FaBars, FaTimes } from "react-icons/fa";
import { GrDownload } from "react-icons/gr";
import SocialLinks from "./links/SocialLinks";
// import skillobj from "./data/skills";
// import projectObj from "./data/projectsObj";
import axios from "axios";

function Index() {
  const [profileImage, setProfileImage] = useState(
    "https://res.cloudinary.com/dykmiet9x/image/upload/v1646158420/yjnuq4pbqpyhsrvoiudj.jpg"
  );

  const [aboutImage, setAboutImage] = useState(
    "https://res.cloudinary.com/dykmiet9x/image/upload/v1645112137/n0xy7gpab95mk3zn9vla.jpg"
  );
  const [aboutText, setAboutText] = useState(" about text");

  const [resumeLink, setResumeLink] = useState(
    "https://drive.google.com/file/d/1COsRyw0BuJ8l3UqnY8HwgqBoENkA80ZL/view?usp=drivesdk"
  );

  const [skillobj, setSkillObj] = useState([]);
  const [projectObj, setProjectObj] = useState([]);

  const [baropen, setBaropen] = useState(false);
  const navbar = () => {
    setBaropen(true);
  };
  const sidebarclose = () => {
    setBaropen(false);
  };

  const GetAllData = () => {
    axios
      .get("/getMainPagedata")
      .then((res) => {
        console.log(res);
        if (res.data.data.profileImage) {
          setProfileImage(res.data.data.profileImage.image);
        }
        if (res.data.data.aboutImage) {
          setAboutImage(res.data.data.aboutImage.image);
        }
        if (res.data.data.aboutText) {
          setAboutText(res.data.data.aboutText.aboutText);
        }
        if (res.data.data.project) {
          setProjectObj(res.data.data.project);
        }
        if (res.data.data.skill) {
          setSkillObj(res.data.data.skill);
        }
        if (res.data.data.resume) {
          setResumeLink(res.data.data.resume.link);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetAllData();
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
            <div style={{ position: "relative", width: "100%" }}>
              <button
                style={{
                  width: "auto",
                  marginLeft: "20px",
                  display: "flex",
                  padding: "5px",
                }}
              >
                <a href={resumeLink} style={{ display: "flex" }}>
                  <div style={{ margin: "1px", textAlign: "center" }}>
                    resume
                  </div>
                  <div
                    style={{
                      marginLeft: "5px",
                      margin: "1px",
                      textAlign: "center",
                    }}
                  >
                    <GrDownload />
                  </div>
                </a>
              </button>
            </div>
          </ul>
        </div>
      </nav>

      <aside className={baropen ? "sidebar show-sidebar" : "sidebar"}>
        <div>
          <button className="close-btn" onClick={sidebarclose}>
            <FaTimes className="fas fa-times" />
          </button>

          <ul className="sidebar-links">
            <Link to={"/"} onClick={sidebarclose}>
              home
            </Link>
            <Link to={"/contact"}>contact</Link>
            <Link to={"/adminverify"}>admin</Link>
          </ul>
          <SocialLinks />
        </div>
      </aside>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>i'm abin</h1>
            <h4>full stack webdeveloper</h4>
            <Link to={"/contact"} className="btn hero-btn">
              hire me
            </Link>
            <div className="hero-info-links">
              <SocialLinks />
            </div>
          </article>
          <article className="hero-img">
            <img src={profileImage} className="hero-photo" alt="Abin" />
          </article>
        </div>
      </header>
      <section className="section about">
        <div className="section-center about-center">
          <article className="about-img">
            <img src={aboutImage} className="hero-photo" alt="about img" />
          </article>
          <article className="about-info">
            <div className="section-title about-title">
              <h2>about</h2>
              <div className="underline"></div>
            </div>
            <p>{aboutText}</p>
          </article>
        </div>
      </section>

      <section className="section projects">
        <div className="section-title">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center projects-center">
          {projectObj &&
            projectObj.map((item) => {
              return (
                <Link to={`/projects/${item._id}`} key={item._id}>
                  <article className="project">
                    <img
                      src={item.image}
                      alt="single project"
                      className="project-img"
                    />
                    <div className="project-info">
                      <h4>{item.title}</h4>
                      <p>ClickMe for source</p>
                    </div>
                  </article>
                </Link>
              );
            })}
        </div>
      </section>

      <section className="section skills">
        <div className="section-title">
          <h2>skills</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center skills-center">
          {skillobj &&
            skillobj.map((item) => {
              return (
                <article key={item._id}>
                  <h3>{item.name}</h3>
                  {item.skillAtributes &&
                    item.skillAtributes.map((x, i) => {
                      return (
                        <div className="skill" key={i}>
                          <p>{x.skillname}</p>
                          <div className="skill-container">
                            <div
                              className={`skill-value ${x.valueclass}`}
                            ></div>
                            <p className={`skill-text ${x.valueper}`}>
                              {x.percentage}%
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </article>
              );
            })}
        </div>
      </section>

      <section className="connect">
        <video
          autoPlay
          muted
          loop
          className="video-container"
          poster={project1}
        >
          <source src={vid} type="video/mp4" />
          Sorry, your browser does not support embedded videos
        </video>
        <div className="video-banner">
          <div className="section-title">
            <h2>let's get in touch</h2>
            <div className="underline"></div>
          </div>
          <Link to={"/contact"} className="btn">
            contact me
          </Link>
        </div>
      </section>
      <footer className="footer">
        <SocialLinks />
        <p>
          &copy; <span id="date"></span> abin v v. all rights reserved
        </p>
      </footer>
    </>
  );
}

export default Index;
