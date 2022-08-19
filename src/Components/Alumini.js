//dependencies
import React from "react";

//components
import linkedin from "../assets/linkedin.png"

//css
import "./Alumini.css";

//code
const Alumini = () => {
  return (
    <div className="alumini-contaniner">
      {/* header */}
      <h1 className="alumini-header">ALUMINIS</h1>

      {/* container */}
      <div className="alumini-grid mt-5">

        {/* individual-container */}
        <div className="individual-alumini-container">

          {/* cover */}
          <div className="cover-image-container">
            <div className="company-name">
              <h2 className="header-white">Software AG</h2>
            </div>
          </div>

          {/* name */}
          <h2 className="alumini-name mt-4 header">SHANKAR</h2>

          {/* salary */}
          <p>CTC 2000000</p>

          {/* linkedin */}
          <button className="connect-button ">
            <img src={linkedin} alt="linkedin" width="20%" className="image-fluid me-1" />
            LinkedIn</button>
        </div>

        <div className="individual-alumini-container">
          <div className="cover-image-container">
            <div className="company-name">
              <h2 className="header-white">MAERSK</h2>
            </div>
          </div>
          <h2 className="alumini-name mt-4 header">SHANKAR</h2>
          <p>CTC 2000000</p>
          <button className="connect-button">
            <img src={linkedin} alt="linkedin" width="20%" className="image-fluid me-1" />
            LinkedIn</button>
        </div>

        <div className="individual-alumini-container">
          <div className="cover-image-container">
            <div className="company-name">
              <h2 className="header-white">MAERSK</h2>
            </div>
          </div>
          <h2 className="alumini-name mt-4 header">SHANKAR</h2>
          <p>CTC 2000000</p>
          <button className="connect-button">
            <img src={linkedin} alt="linkedin" width="20%" className="image-fluid me-1" />
            LinkedIn</button>
        </div>

        <div className="individual-alumini-container">
          <div className="cover-image-container">
            <div className="company-name">
              <h2 className="header-white">MAERSK</h2>
            </div>
          </div>
          <h2 className="alumini-name mt-4 header">SHANKAR</h2>
          <p>CTC 2000000</p>
          <button className="connect-button">
            <img src={linkedin} alt="linkedin" width="20%" className="image-fluid me-1" />
            LinkedIn</button>
        </div>

        <div className="individual-alumini-container">
          <div className="cover-image-container">
            <div className="company-name">
              <h2 className="header-white">MAERSK</h2>
            </div>
          </div>
          <h2 className="alumini-name mt-4 header">SHANKAR</h2>
          <p>CTC 2000000</p>
          <button className="connect-button">
            <img src={linkedin} alt="linkedin" width="20%" className="image-fluid" />
            LinkedIn</button>
        </div>
      </div>
    </div>
  );
};

export default Alumini;
