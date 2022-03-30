import React, { useEffect, useState } from "react";

import { FaGithub, FaHome, FaTimes } from "react-icons/fa";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Authorized from "../Authorized";

function SingleProjectEdit() {
  const navigate = useNavigate();
  const [baropen, setBaropen] = useState(false);

  const sidebarclose = () => {
    setBaropen(false);
  };

  const [projectImg, setProjectImg] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [gotProjectImg, setGotProjectImg] = useState(false);
  const [projctName, setProjectName] = useState("project name");
  const [projectDec, setProjectDec] = useState("project desc");
  const [projectLink, setProjectLink] = useState("https://github.com/Abin007v");
  const [projectLiveLink, setProjectLiveLink] = useState(
    "https://github.com/Abin007v"
  );
  const [authorized, setAuthorized] = useState(true);

  const postImageCloud = (pics) => {
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
          setProjectImg(data.url.toString());
          setGotProjectImg(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("please setelect proper image jpeg/png");
    }
  };
  const { id } = useParams();

  const updateHandler = async () => {
    window.confirm("Update?");
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
        `/projects/edit/${id}`,
        {
          name: projctName,
          image: projectImg,
          desc: projectDec,
          GitLink: projectLink,
          LiveLink: projectLiveLink,
        },
        config
      )
      .then((res) => {
        console.log(res.data);
        setProjectName(res.data.title);
        setProjectImg(res.data.image);
        setProjectDec(res.data.projectDesc);
        setProjectLink(res.data.projectGitLink);
        setProjectLiveLink(res.data.liveProjectLink);
      })
      .catch((err) => console.log(err));
  };
  const deltehandler = () => {
    window.confirm("delte thsi Project ?");
    axios
      .delete(`/projects/edit/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/adminpage");
      })
      .catch((err) => console.log(err));
  };

  const getSingleProject = async () => {
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .get(`/projects/edit/${id}`, config)
      .then((res) => {
        if (res.data.message) {
          setAuthorized(false);
          return;
        }
        console.log(res.data);
        setProjectName(res.data.title);
        setProjectImg(res.data.image);
        setProjectDec(res.data.projectDesc);
        setProjectLink(res.data.projectGitLink);
        setProjectLiveLink(res.data.liveProjectLink);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSingleProject();
  }, []);

  return (
    <>
      {authorized && (
        <>
          <aside className={baropen ? "sidebar show-sidebar" : "sidebar"}>
            <div>
              <button className="close-btn" onClick={sidebarclose}>
                <FaTimes className="fas fa-times" />
              </button>
            </div>
          </aside>

          <header class="projects-hero">
            <div class="section-title">
              <h1>my project</h1>
              <div class="underline"></div>
            </div>
          </header>
          <div>
            <section class="section">
              <div class="section-center projects-page-center">
                <article class="single-project">
                  <div class="project-container">
                    <img src={projectImg} alt="single project" />

                    <a href={projectLink} class="project-icon">
                      <i class="fas fa-home">
                        <FaHome />
                      </i>
                    </a>
                  </div>
                  <div class="project-details">
                    <div className="input-group">
                      <label style={{ fontWeight: "1000" }}>Image</label>

                      <div className="custom-file">
                        <input
                          onChange={(e) => postImageCloud(e.target.files[0])}
                          // onChange={(e) => console.log(e.target.value)}
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                        />
                      </div>
                    </div>
                    {gotProjectImg && (
                      <button
                        style={{
                          height: "2rem ",
                          margin: "10px",
                        }}
                        onClick={() => setGotProjectImg(false)}
                      >
                        ImageUploaded
                      </button>
                    )}
                    {/* <h4>{projctName}</h4> */}
                    <div>
                      <div style={{ fontWeight: "1000" }}>ProjctName</div>
                      <input
                        style={{
                          height: "2rem",
                          marginTop: "10px",
                          border: "none",
                          textAlign: "center",
                          borderRadius: "10px",
                        }}
                        value={projctName}
                        onChange={(e) => setProjectName(e.target.value)}
                      ></input>
                    </div>
                    <div>
                      <div style={{ fontWeight: "1000" }}>ProjectDesc</div>
                      <textarea
                        style={{
                          height: "4rem",
                          marginTop: "10px",
                          border: "none",
                          textAlign: "center",
                          borderRadius: "10px",
                        }}
                        value={projectDec}
                        onChange={(e) => setProjectDec(e.target.value)}
                      />
                    </div>
                    <div
                      class="project-footer"
                      style={{ display: "grid", gridTemplateColumns: "1fr" }}
                    >
                      <div>GitLink</div>
                      {/* <a href="https://github.com/Abin007v">source code</a> */}
                      <input
                        style={{
                          height: "2rem",
                          marginTop: "10px",
                          border: "none",
                          textAlign: "center",
                          borderRadius: "10px",
                        }}
                        value={projectLink}
                        onChange={(e) => setProjectLink(e.target.value)}
                      />
                      <div>LiveLink</div>
                      <input
                        style={{
                          height: "2rem",
                          marginTop: "10px",
                          border: "none",
                          textAlign: "center",
                          borderRadius: "10px",
                        }}
                        value={projectLiveLink}
                        onChange={(e) => setProjectLiveLink(e.target.value)}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      height: "3rem",
                      justifyItems: "center",
                      marginLeft: "20px",
                    }}
                  >
                    <button
                      style={{ height: "auto", padding: "5px", margin: "10px" }}
                      onClick={updateHandler}
                    >
                      submit
                    </button>
                    <button
                      style={{ height: "auto", padding: "5px", margin: "10px" }}
                      onClick={deltehandler}
                    >
                      delete
                    </button>
                    <Link to={"/adminpage"}>
                      <button
                        style={{
                          height: "auto",
                          padding: "5px",
                          margin: "10px",
                        }}
                      >
                        AdminPage
                      </button>
                    </Link>
                  </div>
                </article>
              </div>
            </section>
          </div>
          <footer class="footer">
            <p>
              &copy; <span id="date"></span> Abin v v. All rights reserved.
            </p>
          </footer>
        </>
      )}
      {!authorized && <Authorized />}
    </>
  );
}

export default SingleProjectEdit;
