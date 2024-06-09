import "./App.css";
import picture from "./assets/profilePic.png";

function App() {
  return (
    <>
      {/* <!-- for dark mode toggler --> */}
      <label htmlFor="darkMode" className="dark-mode-toggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper" id="Home">
        {/* <!--   NAV BAR --> */}
        <header>
          <div className="header container flex">
            <div className="title_left">
              <div className="name">
                <h1 className="joti-one-regular">Sachin</h1>
                <h2 className="joti-one-regular">Nagila</h2>
              </div>
              <div className="line"></div>
              <h3>Full Stack Developer</h3>
            </div>
            <div className="title_right">
              <ul className="list flex">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* <!--     HERO SECTION --> */}
        <div className="hero-section container flex">
          <div className="hero-disc flex">
            <p>
              Hi I'm <span> Sachin Nagila</span>
            </p>
            <span>Full Stack Developer</span>
            <p>I love coding and teach others what I know</p>
            <a href="./assets/profie pic.png" download="test image">
              <button>
                Download CV <i className="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
          <div className="image">
            <img src={picture} width="100%" alt="" />
          </div>
        </div>

        {/* <!-- BANNER --> */}
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

        {/* <!-- SKILLS --> */}
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

        {/* <!-- MY PROJECTS --> */}
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

        {/* <!-- ABOUT ME --> */}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quas beatae illo quis accusamus provident laudantium unde ad
                  quam, ea fuga officia ipsa libero placeat eum, earum porro
                  enim tempore? Quas eligendi animi dignissimos minus, rem et ex
                  possimus corrupti alias, tempora culpa minima! Quo perferendis
                  facere ipsum hic maxime.
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

        {/* <!-- CONTACT --> */}
        <div className="contact" id="Contact">
          <p className="contact_title">
            <span>Contact</span>
          </p>
          <div className="contact-icons flex">
            <a href="www.linkedin.com" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="www.github.com" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="www.youtube.com" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="tel:0410263444">
              <i className="fa-solid fa-mobile"></i>
            </a>
          </div>
          <h3>OR</h3>
          <div className="email-section">
            <a href="mailto:real@email.com">
              <span>your-email@gmail.com</span>
            </a>
            <div className="send">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>

      <footer>@Sachin_Nagila</footer>

      <a href="#Home" className="goup">
        <i className="fa-solid fa-up-long"></i>
      </a>
    </>
  );
}

export default App;
