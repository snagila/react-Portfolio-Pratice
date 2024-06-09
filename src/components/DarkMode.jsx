import React from "react";

const DarkMode = () => {
  return (
    <>
      <label htmlFor="darkMode" className="dark-mode-toggler">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="darkMode" />
      <div className="wrapper" id="Home"></div>
    </>
  );
};

export default DarkMode;
