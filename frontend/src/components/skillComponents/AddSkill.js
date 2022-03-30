import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
function AddSkill() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [skillname, setSKillname] = useState("javaScript"); //skillname
  const [skillvalue, setskillvalue] = useState("value-70"); //valueclass
  const [skillper, setskillper] = useState("70"); //percentage
  const [skilltext, setskilltext] = useState("skill-text-70"); //valueper
  const submithandler = async () => {
    window.confirm("add this skill?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    axios
      .post(
        `/skill/addskill/${id}`,
        {
          skillname: skillname,
          valueclass: skillvalue,
          percentage: skillper,
          valueper: skilltext,
        },
        config
      )
      .then((res) => {
        console.log(res);
        navigate(`/skill/edit/${id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="single-skill">
      <div className="single-skill-main">
        <div>
          <div
            style={{
              marginLeft: "35%",
              fontSize: "3rem",
              marginBottom: "20px",
              textTransform: "capitalize",
            }}
          >
            Add Skill
          </div>
        </div>
        <div className="skill">
          <p style={{ fontWeight: "1000", fontSize: "2rem" }}>{skillname}</p>
          <div className="single-skill-title">skillName</div>
          <input
            style={{
              marginTop: "10px",
              height: "2rem",
              border: "none",
              borderRadius: "10px",
              textAlign: "center",
            }}
            value={skillname}
            onChange={(e) => {
              setSKillname(e.target.value);
            }}
          />

          <div style={{ marginTop: "20px" }}>
            <div className="skill-container">
              <div className={`skill-value ${skillvalue}`}></div>

              <p className={`skill-text ${skilltext}`}>{skillper}%</p>
            </div>
          </div>
          <div className="single-skill-title">skillValue</div>
          <input
            style={{
              marginTop: "10px",
              height: "2rem",
              border: "none",
              borderRadius: "10px",
              textAlign: "center",
            }}
            value={skillvalue}
            onChange={(e) => {
              setskillvalue(e.target.value);
            }}
          />
          <div className="single-skill-title">SkillText</div>
          <input
            style={{
              marginTop: "10px",
              height: "2rem",
              border: "none",
              borderRadius: "10px",
              textAlign: "center",
            }}
            value={skilltext}
            onChange={(e) => {
              setskilltext(e.target.value);
            }}
          />
          <div className="single-skill-title">skillPer</div>
          <input
            style={{
              marginTop: "10px",
              height: "2rem",
              border: "none",
              borderRadius: "10px",
              textAlign: "center",
            }}
            value={skillper}
            onChange={(e) => {
              setskillper(e.target.value);
            }}
          />
        </div>
        <div>
          <div className="single-skill-edit-btn">
            <button onClick={submithandler}>submit</button>
            <Link to={`/skill/edit/${id}`}>
              <button>Go Back</button>
            </Link>
          </div>
        </div>
        <div>
          (skill value = value-70 or value-80 or "" for value-50) (skill text
          =skill-text-70 || for extra gap skill-text-extra-50 )(per = 70) )
        </div>
      </div>
    </div>
  );
}

export default AddSkill;
