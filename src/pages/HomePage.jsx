import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="hero-section container flex">
        <div className="hero-disc flex">
          <p>
            Hi I'm <span> Sachin Nagila</span>
          </p>
          <span>Full Stack Developer</span>
          <p>I love coding and teach others what I know</p>
          <a href="" download="test image">
            <button>
              Download CV <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
        <div className="image">
          <img src="" width="100%" alt="" />
        </div>
      </div>
      <section className="banner container flex">
        <div className="awards flex">
          <div className="logo flex">
            <i className="fa-solid fa-award"></i>
          </div>
          <div className="logo-disc">
            <span>Full Stack Developer</span>
            <p>Bootcamp Certification</p>
          </div>
        </div>
        <div className="awards flex">
          <div className="logo flex">
            <i className="fa-solid fa-award"></i>
          </div>
          <div className="logo-disc">
            <span>5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>
        <div className="awards flex">
          <div className="logo flex">
            <i className="fa-solid fa-award"></i>
          </div>
          <div className="logo-disc">
            <span>1+ year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
