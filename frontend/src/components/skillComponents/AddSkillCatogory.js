import React, { useState } from "react";
import axios from "axios";
import "../ImageInput.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AddSkillCatogory() {
  const navigate = useNavigate();
  const [catName, setCatname] = useState("front end");
  const submithandler = async () => {
    window.confirm("submit?");
    const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
    if (userInfo) {
      var config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
    }
    try {
      const { data } = await axios.post(
        "/addskill/catogory",
        {
          catName: catName,
        },
        config
      );
      console.log(data);
      navigate("/adminpage");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="add-skill-div">
      <div className="add-skill-home">
        <Link to={"/adminpage"}>
          <button
            style={{
              margin: "20px",
              marginLeft: "42%",
              border: "none",
              width: "6rem",
              fontWeight: "1000",
            }}
          >
            AdminPage
          </button>
        </Link>
      </div>
      <div className="add-skill-cnt">
        <p>{catName}</p>
        <div> catogory name</div>
        <input
          value={catName}
          onChange={(e) => {
            setCatname(e.target.value);
          }}
        />
        <button onClick={submithandler}>Create</button>
      </div>
    </div>
  );
}

export default AddSkillCatogory;
