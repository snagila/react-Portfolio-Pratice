import React from "react";

const About = () => {
  return (
    <>
      {" "}
      <div className="about-me" id="#About">
        <div className="container">
          <p className="about_title">
            <span>About me</span>
          </p>
          <div className="disc flex">
            <div className="img">
              <img src="./assets/profie pic.png" width="80%" />
            </div>
            <div className="content flex">
              <h2>Sachin Nagila</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas
                beatae illo quis accusamus provident laudantium unde ad quam, ea
                fuga officia ipsa libero placeat eum, earum porro enim tempore?
                Quas eligendi animi dignissimos minus, rem et ex possimus
                corrupti alias, tempora culpa minima! Quo perferendis facere
                ipsum hic maxime.
              </p>
              <h3>Sydney, Australia</h3>
              <div className="interest">
                <h3>Interest</h3>
                <span>Coding</span>
                <span>
                  Football
                  <span>Super Hero Movies</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
