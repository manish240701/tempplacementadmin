//dependencies
import React from "react";
import { Link } from "react-router-dom";

//components
import AddButton from "../components/AddButton";
import Modal from "../components/Modal";
import linkedin from "../assets/linkedin.png";
//css
import "./AddAlumini.css";

//code
const AddAlumini = () => {
  return (
    <div className="add-alumini-container">
      <div className="add-company-cover">
        <Link to="/">
          <div className="back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </div>
        </Link>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for aluminis or companies ..."
            className="form-control search-input"
          />
        </div>
      </div>

      <div className="add-alumini-body">
        {/* grid */}
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
              <img
                src={linkedin}
                alt="linkedin"
                width="20%"
                className="image-fluid me-1"
              />
              LinkedIn
            </button>
          </div>

          {/* individual-container */}
          <div className="individual-alumini-container">
            {/* cover */}
            <div className="cover-image-container">
              <div className="company-name">
                <h2 className="header-white">MAERSK</h2>
              </div>
            </div>

            {/* name */}
            <h2 className="alumini-name mt-4 header">SHANKAR</h2>

            {/* salary */}
            <p>CTC 2000000</p>

            {/* linkedin */}
            <button className="connect-button ">
              <img
                src={linkedin}
                alt="linkedin"
                width="20%"
                className="image-fluid me-1"
              />
              LinkedIn
            </button>
          </div>

          {/* individual-container */}
          <div className="individual-alumini-container">
            {/* cover */}
            <div className="cover-image-container">
              <div className="company-name">
                <h2 className="header-white">COGNIZANT</h2>
              </div>
            </div>

            {/* name */}
            <h2 className="alumini-name mt-4 header">SHANKAR</h2>

            {/* salary */}
            <p>CTC 2000000</p>

            {/* linkedin */}
            <button className="connect-button ">
              <img
                src={linkedin}
                alt="linkedin"
                width="20%"
                className="image-fluid me-1"
              />
              LinkedIn
            </button>
          </div>

          {/* individual-container */}
          <div className="individual-alumini-container">
            {/* cover */}
            <div className="cover-image-container">
              <div className="company-name">
                <h2 className="header-white">AMAZON</h2>
              </div>
            </div>

            {/* name */}
            <h2 className="alumini-name mt-4 header">SHANKAR</h2>

            {/* salary */}
            <p>CTC 2000000</p>

            {/* linkedin */}
            <button className="connect-button ">
              <img
                src={linkedin}
                alt="linkedin"
                width="20%"
                className="image-fluid me-1"
              />
              LinkedIn
            </button>
          </div>

          {/* individual-container */}
          <div className="individual-alumini-container">
            {/* cover */}
            <div className="cover-image-container">
              <div className="company-name">
                <h2 className="header-white">FLIPKART</h2>
              </div>
            </div>

            {/* name */}
            <h2 className="alumini-name mt-4 header">SHANKAR</h2>

            {/* salary */}
            <p>CTC 2000000</p>

            {/* linkedin */}
            <button className="connect-button ">
              <img
                src={linkedin}
                alt="linkedin"
                width="20%"
                className="image-fluid me-1"
              />
              LinkedIn
            </button>
          </div>
        </div>
      </div>

      <button
        className="company-add-btn mt-4"
        data-toggle="modal"
        data-target="#modal-fullscreen-xl"
        data-bs-toggle="modal"
        data-bs-target="#addEditModal"
      >
        <AddButton />
      </button>
      <Modal />
    </div>
  );
};

export default AddAlumini;
