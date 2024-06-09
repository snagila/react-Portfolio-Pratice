import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
// import picture from "./assets/profilePic.png";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/skills">Skills</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </header>
      </div>
      <footer>@Sachin_Nagila</footer>
      go to top
      <a href="#Home" className="goup">
        <i className="fa-solid fa-up-long"></i>
      </a>
    </>
  );
}

export default App;
