//dependencies
import React from "react";
import { Link } from "react-router-dom";

//components
import tcs from "../assets/companylogos/tcs.png";
import amazon from "../assets/companylogos/amazon.png";
import flipkart from "../assets/companylogos/flipkart.png";
import maersk from "../assets/companylogos/maersk.png";
import cognizant from "../assets/companylogos/cognizant.png";
import AddButton from "../components/AddButton.js"
import Modal from "../components/Modal.js"

//css
import "./AddCompany.css";


//code
const AddCompany = () => {
  return (
    <div className="add-company-container">
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
            placeholder="Search for companies ..."
            className="form-control search-input"
          />
        </div>
      </div>
      <button
        className="company-add-btn mt-4"
        data-toggle="modal"
        data-target="#modal-fullscreen-xl"
        data-bs-toggle="modal"
        data-bs-target="#addEditModal"
      >
        <AddButton/>
      </button>

      {/* display companies */}
      <div className="companies-display-container">
        {/* grid */}
        <div className="companies-grid">
          {/* individual */}
          <div className="individual-company-container">
            <img
              src={maersk}
              width="50%"
              className="image-fluid"
              alt="maersk"
            />
            <h1 className="company-name">MAERSK</h1>
          </div>

          <div className="individual-company-container">
            <img
              src={amazon}
              width="50%"
              className="image-fluid"
              alt="amazon"
            />
            <h1 className="company-name">AMAZON</h1>
          </div>
          <div className="individual-company-container">
            <img
              src={flipkart}
              width="50%"
              className="image-fluid"
              alt="flipkart"
            />
            <h1 className="company-name">FLIPKART</h1>
          </div>

          <div className="individual-company-container">
            <img src={tcs} width="50%" className="image-fluid" alt="tcs" />
            <h1 className="company-name">TCS</h1>
          </div>

          <div className="individual-company-container">
            <img
              src={cognizant}
              width="50%"
              className="image-fluid"
              alt="cognizant"
            />
            <h1 className="company-name">COGNIZANT</h1>
          </div>
        </div>
      </div>
      <Modal/>
    </div>
  );
};

export default AddCompany;
