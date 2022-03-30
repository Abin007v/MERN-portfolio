import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../ImageInput.css";

import data from "../data/skills";
import Authorized from "../Authorized";
function SkillEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  // const item = data[0];
  const [item, setitem] = useState([]);
  const [authorized, setAuthorized] = useState(true);

  const catdeltehandler = () => {
    window.confirm("delte this catogory?");
    axios
      .delete(`/skill/edit/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/adminpage");
      })
      .catch((err) => console.log(err));
  };
  const getSkillArray = async () => {
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .get(`/skill/edit/${id}`, config)
      .then((res) => {
        if (res.data.message) {
          setAuthorized(false);
          return;
        }
        console.log(res);
        if (res.data) {
          setitem(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getSkillArray();
  }, []);
  return (
    <>
      {authorized && (
        <div className="skill-edit-main">
          <div>
            <Link to={"/adminpage"}>
              <button
                style={{
                  marginTop: "30px",
                  marginLeft: "46%",
                  border: "none",
                  width: "6rem",
                  fontWeight: "1000",
                }}
              >
                AdminPage
              </button>
            </Link>
          </div>
          <div>
            {item && item.name && <h3 className="skill-name">{item.name}</h3>}
            <article className="skill-edit-cont">
              {item &&
                item.skillAtributes &&
                item.skillAtributes.map((x, i) => {
                  return (
                    <div className="skill" key={i}>
                      <p>{x.skillname}</p>
                      <div className="skill-container">
                        <div className={`skill-value ${x.valueclass}`}></div>
                        <p className={`skill-text ${x.valueper}`}>
                          {x.percentage}%
                        </p>
                      </div>
                      <Link to={`/editsingleskill/${id}/${x._id}`}>
                        <button style={{ margin: "10px" }}>edit</button>
                      </Link>
                    </div>
                  );
                })}
              <div style={{ height: "3rem", position: "relative" }}>
                <div className="skill-edit-buttons">
                  <Link to={`/skill/addskill/${id}`}>
                    <button style={{ margin: "10px" }}>add skill</button>
                  </Link>
                  <button style={{ margin: "10px" }} onClick={catdeltehandler}>
                    delete this category
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      )}

      {!authorized && <Authorized />}
    </>
  );
}

export default SkillEdit;
