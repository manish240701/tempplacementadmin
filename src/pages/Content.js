//dependencies
import React from "react";
import { Link } from "react-router-dom";
import Alumini from "../Components/Alumini";
import Details from "../Components/Details";

//components
import MoreDetails from "../Components/MoreDetails";

//css
import "./Content.css";

//code
const Content = () => {
  return (
    <div className="content-container">
      <div className="header-container">
        {/* back button */}
        <Link to="/">
          <div className="back-button">
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

        {/* cover */}
        <div className="detail-header-content">
          <h1>Cracking Maersk</h1>
          <p>
            A.P. Moller - Maersk is an integrated logistics company. We go all
            the way to connect and simplify global trade for a growing world.
          </p>
          <button>Visit website</button>
        </div>
      </div>

      {/* contents */}
      <div className="details-body">
        <Details />
        <MoreDetails />
        <Alumini/>
      </div>

      {/* footer */}
      <footer className="footer">&#169; A design by Manish</footer>
    </div>
  );
};

export default Content;
