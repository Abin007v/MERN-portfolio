import React, { useEffect, useState } from "react";
import "./ImageInput.css";

import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import logimg from "./images/abinlogonoback.png";

import project1 from "./images/project-1.jpeg";
import axios from "axios";
import vid from "./videos/jsvid.mp4";
import { GrDownload } from "react-icons/gr";
import { FaBars, FaTimes } from "react-icons/fa";
import Authorized from "./Authorized";
// import skillobj from "./data/skills";
// import projectObj from "./data/projectsObj";
function AdminPage() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(
    "https://res.cloudinary.com/dykmiet9x/image/upload/v1646158420/yjnuq4pbqpyhsrvoiudj.jpg"
  );
  const [ProimageInDb, setProImageInDb] = useState(false);
  const [AbtimageInDb, setAbtImageInDb] = useState(false);

  const [aboutTextInDb, setAboutTextInDb] = useState(false);

  const [aboutImage, setAboutImage] = useState(
    "https://res.cloudinary.com/dykmiet9x/image/upload/v1645112137/n0xy7gpab95mk3zn9vla.jpg"
  );
  const [gotProfileImg, setGotProfileImg] = useState(false);
  const [gotAboutImg, setGotAboutImg] = useState(false);

  const [aboutTextinput, setAboutText] = useState(" about text");

  const [baropen, setBaropen] = useState(false);
  const [skillobj, setSkillObj] = useState([]);
  const [projectObj, setProjectObj] = useState([]);
  const [abouttextID, setAbouttextID] = useState("");
  const [profileImageID, setProfileImageID] = useState("");
  const [aboutImageID, setAboutImageID] = useState("");
  const [resumeLink, setResumeLink] = useState(
    "https://drive.google.com/file/d/1COsRyw0BuJ8l3UqnY8HwgqBoENkA80ZL/view?usp=drivesdk"
  );
  const [resumeLinkID, setResumeLinkID] = useState("");
  const [resumeLinkInDB, setResumeLinkInDB] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [authorized, setAuthorized] = useState(true);
  const navbar = () => {
    setBaropen(true);
  };
  const sidebarclose = () => {
    setBaropen(false);
  };

  const postProfileDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      console.log("same image selected");
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "portfolio");
      data.append("cloud_name", "dykmiet9x");
      fetch("https://api.cloudinary.com/v1_1/dykmiet9x/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProfileImage(data.url.toString());
          setGotProfileImg(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("please setelect proper image jpeg/png");
    }
  };

  const postAboutDetails = (pics) => {
    if (
      pics ===
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    ) {
      console.log("same image selected");
      return;
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "portfolio");
      data.append("cloud_name", "dykmiet9x");
      fetch("https://api.cloudinary.com/v1_1/dykmiet9x/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAboutImage(data.url.toString());
          console.log(aboutImage);
          setGotAboutImg(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("please setelect proper image jpeg/png");
    }
  };
  const uploadProfileImage = async () => {
    window.confirm("Profile imgae uploaded?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    try {
      const data = await axios.post(
        `/adminpage/proimg/:id`,
        {
          profileImg: profileImage,
        },
        config
      );
      console.log(data);
      setProImageInDb(false);
    } catch (err) {
      console.log(err);
    }
  };
  const uploadAboutImage = async () => {
    window.confirm("Profile imgae uploaded?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    try {
      const data = await axios.post(
        `/adminpage/abtimg/:id`,
        {
          aboutImg: aboutImage,
        },
        config
      );
      console.log(data);
      setAbtImageInDb(false);
    } catch (err) {
      console.log(err);
    }
  };
  const abouttexthandler = async () => {
    window.confirm("about text upload ");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    try {
      const data = await axios.post(
        "/adminpage/abouttext/:id",
        {
          text: aboutTextinput,
        },
        config
      );
      setAboutTextInDb(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const updateabouttext = async () => {
    window.confirm("update text?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .put(
        `/adminpage/abouttext/${abouttextID}`,
        { text: aboutTextinput },
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const updateProfileImage = async () => {
    window.confirm("update profile image?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .put(`/adminpage/proimg/${profileImageID}`, { img: profileImage }, config)
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          setAuthorized(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const updateAboutImage = async () => {
    window.confirm("update about image?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .put(`/adminpage/abtimg/${aboutImageID}`, { img: aboutImage }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const uploadresumehandler = async () => {
    window.confirm("upload resume?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .post(`/resume/:id`, { link: resumeLink }, config)
      .then((res) => {
        console.log(res);
        setResumeLinkID(res.data._id);
        setResumeLinkInDB(false);
      })
      .catch((err) => console.log(err));
  };

  const updateresumehandler = async () => {
    window.confirm("update resume?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .put(`/resume/${resumeLinkID}`, { link: resumeLink }, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const registeruserhandler = () => {
    window.confirm("register this user?");
    axios
      .post("/user/register", { email: userEmail, pass: userPass })
      .then((res) => {
        window.alert("user refister sucessfull");
      })
      .catch((err) => console.log(err));
  };

  const logouthandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const GetAllData = async () => {
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .get("/adminpage", config)
      .then((res) => {
        console.log(res);

        if (res.data.message) {
          setAuthorized(false);
          return;
        }
        if (!res.data.data.profileImage) {
          setProImageInDb(true);
        } else {
          setProfileImage(res.data.data.profileImage.image);
          setProfileImageID(res.data.data.profileImage._id);
        }
        if (!res.data.data.aboutImage) {
          setAbtImageInDb(true);
        } else {
          setAboutImage(res.data.data.aboutImage.image);
          setAboutImageID(res.data.data.aboutImage._id);
        }
        if (!res.data.data.aboutText) {
          setAboutTextInDb(true);
        } else {
          setAboutText(res.data.data.aboutText.aboutText);
          setAbouttextID(res.data.data.aboutText._id);
        }
        if (res.data.data.project) {
          setProjectObj(res.data.data.project);
        }
        if (res.data.data.skill) {
          setSkillObj(res.data.data.skill);
        }
        if (!res.data.data.resume) {
          setResumeLinkInDB(true);
        } else {
          setResumeLink(res.data.data.resume.link);
          setResumeLinkID(res.data.data.resume._id);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    GetAllData();
  }, [AbtimageInDb, ProimageInDb, aboutTextInDb, resumeLinkInDB]);
  return (
    <>
      {authorized && (
        <>
          <nav className="nav" id="nav">
            <div className="nav-center">
              <div className="nav-header">
                <img src={logimg} className="nav-logo" alt="nav logo" />
                <button className="nav-btn" onClick={navbar}>
                  <FaBars className="fas fa-bars" />
                </button>
                <Link to={"/"}>
                  <button
                    style={{
                      border: "none",
                      fontWeight: "1000",
                      width: "4rem",
                    }}
                  >
                    HOME
                  </button>
                </Link>
                <button onClick={logouthandler}>logout</button>
              </div>
              <div style={{ position: "relative", width: "100%" }}>
                <button
                  style={{
                    width: "auto",
                    marginLeft: "20px",
                    display: "flex",
                    position: "absolute",
                    right: "0",
                    top: "-13px",
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
            </div>
          </nav>

          <aside className={baropen ? "sidebar show-sidebar" : "sidebar"}>
            <div>
              <button className="close-btn" onClick={sidebarclose}>
                <FaTimes className="fas fa-times" />
              </button>
            </div>
          </aside>
          {/* <form onSubmit={submithandler}> */}

          <header className="hero">
            <div className="section-center hero-center">
              <article className="hero-img">
                <div className="image-update">
                  <img src={profileImage} className="hero-photo" alt="Abin" />
                </div>
              </article>
              <div
                className="input-group"
                style={{
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="custom-file">
                  <input
                    onChange={(e) => postProfileDetails(e.target.files[0])}
                    // onChange={(e) => console.log(e.target.value)}
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                  />
                </div>
                {gotProfileImg && (
                  <button
                    style={{ height: "2rem " }}
                    onClick={() => setGotProfileImg(false)}
                  >
                    ImageUloadedToCloud
                  </button>
                )}
              </div>
            </div>
          </header>
          <div className="img-style">
            {ProimageInDb && (
              <button className="btn-2" onClick={uploadProfileImage}>
                uploadProfileImgaes
              </button>
            )}
            {!ProimageInDb && (
              <button className="btn-1" onClick={updateProfileImage}>
                UpdateProfileImgaes
              </button>
            )}
          </div>
          <section className="section about">
            <div className="section-center about-center">
              <article className="about-img">
                <img src={aboutImage} className="hero-photo" alt="about img" />
              </article>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                }}
                className="input-group"
              >
                <div className="custom-file">
                  <input
                    onChange={(e) => postAboutDetails(e.target.files[0])}
                    // onChange={(e) => console.log(e.target.value)}
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    style={{
                      margin: "10px",
                      position: "absolute",
                      top: "180px",
                    }}
                  />
                </div>
                {gotAboutImg && (
                  <button
                    style={{
                      height: "2rem ",
                      marginTop: "30px",
                      marginLeft: "15px",
                    }}
                    onClick={() => setGotAboutImg(false)}
                  >
                    ImageUloadedToCloud
                  </button>
                )}
              </div>

              <article
                style={{
                  height: "auto",
                  width: "auto",
                  padding: "10px",
                  marginLeft: "30%",
                  marginTop: "20%",
                }}
                className="about-info"
              >
                <div className="section-title about-title">
                  <h2>about</h2>
                  <div className="underline"></div>
                </div>
                {/* <p>{aboutText}</p> */}
                <form>
                  <textarea
                    style={{
                      border: "none",
                      height: "154px",
                      width: "954px",
                      borderRadius: "10px",
                      backgroundColor: "hsl(45, 86%, 81%)",
                      padding: "10px",
                    }}
                    value={aboutTextinput}
                    onChange={(e) => {
                      setAboutText(e.target.value);
                    }}
                  />
                </form>
                <div>
                  {aboutTextInDb && (
                    <button
                      style={{ height: "2rem", padding: "5px" }}
                      onClick={abouttexthandler}
                    >
                      uploadAboutText
                    </button>
                  )}
                  {!aboutTextInDb && (
                    <button
                      style={{ height: "2rem", padding: "5px" }}
                      onClick={updateabouttext}
                    >
                      {" "}
                      updateAboutText
                    </button>
                  )}
                </div>
              </article>
              <div style={{ display: "flex" }}>
                {AbtimageInDb && (
                  <button
                    style={{ height: "2rem", padding: "5px", margin: "10px" }}
                    onClick={uploadAboutImage}
                  >
                    uploadAboutImgaes
                  </button>
                )}
                {!AbtimageInDb && (
                  <button
                    style={{ height: "2rem", padding: "5px", margin: "10px" }}
                    onClick={updateAboutImage}
                  >
                    UpdateAboutImgaes
                  </button>
                )}
              </div>
            </div>
          </section>
          <section className="section projects">
            <div className="section-title">
              <h2>Projects</h2>
              <div className="underline"></div>
              {/* <p className="projects-text">{projectText}</p> */}
            </div>
            <div className="section-center projects-center">
              {projectObj.map((item) => {
                return (
                  <Link to={`/projects/edit/${item._id}`} key={item._id}>
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
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link className="section-title" to={`/projects/addproject`}>
                  <button style={{ height: "2rem" }}> Add new Project</button>
                </Link>
              </div>
            </div>
          </section>

          <section className="section skills">
            <div className="section-title">
              <h2>skills</h2>
              <div className="underline"></div>
            </div>
            <div className="section-center skills-center">
              {skillobj.map((item) => {
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
                    <Link to={`/skill/edit/${item._id}`}>
                      <button style={{ height: "2rem" }}>edit</button>
                    </Link>
                  </article>
                );
              })}
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link to={"/addskill/catogory"}>
                  <button style={{ height: "2rem" }}>add new category</button>
                </Link>
              </div>
            </div>
          </section>

          <div
            style={{
              height: "6rem",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "100px",
              height: "auto",
            }}
          >
            <div
              style={{
                display: "grid",
                backgroundColor: "wheat",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <input
                style={{
                  marginTop: "10px",
                  height: "2rem",
                  width: "300px",
                  border: "none",
                  borderRadius: "10px",
                  textAlign: "center",
                  margin: "20px",
                  padding: "10px",
                }}
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
              />
              <div style={{ marginLeft: "30%" }}>
                {resumeLinkInDB && (
                  <button
                    style={{ margin: "10px" }}
                    onClick={uploadresumehandler}
                  >
                    uploadResume
                  </button>
                )}
                {!resumeLinkInDB && (
                  <button
                    style={{ margin: "10px" }}
                    onClick={updateresumehandler}
                  >
                    updateResume
                  </button>
                )}
              </div>
            </div>
          </div>
          <div
            style={{
              height: "6rem",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "100px",
              height: "auto",
            }}
          >
            <div
              style={{
                display: "grid",
                backgroundColor: "wheat",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "2rem",
                  fontWeight: "1000",
                }}
              >
                <div>Register User</div>
              </div>
              <label style={{ marginLeft: "20px" }}>Email</label>
              <input
                style={{
                  marginTop: "10px",
                  height: "2rem",
                  width: "300px",
                  border: "none",
                  borderRadius: "10px",
                  textAlign: "center",
                  margin: "20px",
                  padding: "10px",
                }}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <label style={{ marginLeft: "20px" }}>password</label>
              <input
                type="password"
                style={{
                  marginTop: "10px",
                  height: "2rem",
                  width: "300px",
                  border: "none",
                  borderRadius: "10px",
                  textAlign: "center",
                  margin: "20px",
                  padding: "10px",
                }}
                value={userPass}
                onChange={(e) => setUserPass(e.target.value)}
              />
              <div style={{ marginLeft: "30%" }}>
                <button
                  style={{ margin: "10px" }}
                  onClick={registeruserhandler}
                >
                  RegisterUser
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "160px",
            }}
          ></div>
          {/* </form> */}

          <footer className="footer">
            <p>
              &copy; <span id="date"></span> abin v v. all rights reserved
            </p>
          </footer>
        </>
      )}
      {!authorized && <Authorized />}
    </>
  );
}

export default AdminPage;
