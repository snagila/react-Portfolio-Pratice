import React from "react";

const Skills = () => {
  return (
    <>
      <div className="skills container flex" id="Skills">
        <div className="skill-title">
          <p>Skills</p>
        </div>
        <div className="skill-list flex">
          <div>
            <a href="" style={{ color: "orangered" }}>
              <i className="fa-brands fa-html5"> </i>
              <span>HTML</span>
            </a>
          </div>
          <div>
            <a href="" style={{ color: "blue" }}>
              <i className="fa-brands fa-css3-alt"></i>
              <span>CSS</span>
            </a>
          </div>
          <div>
            <a href="" style={{ color: "yellow" }}>
              <i className="fa-brands fa-js"></i>
              <span>JAVASCRIPT</span>
            </a>
          </div>
          <div>
            <a href="">
              <i className="fa-brands fa-github"></i>
              <span>GITHUB</span>
            </a>
          </div>
          <div>
            <a href="">
              <i className="fa-brands fa-figma"></i>
              <span>FIGMA</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
