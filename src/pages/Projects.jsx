import React from "react";

const Projects = () => {
  return (
    <>
      <div className="my-projects container" id="Projects">
        <h2 className="project-title flex">
          <span>My Projects</span>
        </h2>
        <div className="projects">
          <div className="project-1">
            <img src="./assets/projects.png" width="100%" alt="" />
            <div className="project-links flex">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-chrome"></i>
            </div>
            <div className="disc">
              <h3>Personal Portfolio</h3>
              <span>Techstack: HTML, CSS, Javascript, React</span>
            </div>
          </div>
          <div className="project-2">
            <img src="./assets/projects.png" width="100%" alt="" />
            <div className="project-links flex">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-chrome"></i>
            </div>
            <div className="disc">
              <h3>Personal Portfolio</h3>
              <span>Techstack: HTML, CSS, Javascript, React</span>
            </div>
          </div>
          <div className="project-3">
            <img src="./assets/projects.png" width="100%" alt="" />
            <div className="project-links flex">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-chrome"></i>
            </div>
            <div className="disc">
              <h3>Personal Portfolio</h3>
              <span>Techstack: HTML, CSS, Javascript, React</span>
            </div>
          </div>
          <div className="project-4">
            <img src="./assets/projects.png" width="100%" alt="" />
            <div className="project-links flex">
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-chrome"></i>
            </div>
            <div className="disc">
              <h3>Personal Portfolio</h3>
              <span>Techstack: HTML, CSS, Javascript, React</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
