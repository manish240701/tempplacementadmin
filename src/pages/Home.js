//dependencies
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
//components
import tcs from "../assets/companylogos/tcs.png";
import amazon from "../assets/companylogos/amazon.png";
import flipkart from "../assets/companylogos/flipkart.png";
import maersk from "../assets/companylogos/maersk.png";
import cognizant from "../assets/companylogos/cognizant.png";

//css
import "./Home.css";
import Content from "./Content";

//code
const Home = () => {
  //states

  //handlers
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="home-container">

            {/* search */}
            <div className="search-container">
              <div className="search-container-content">
                <h1 className="search-container-header">
                  Now getting into your dream company is just one step ahead
                </h1>
                <input
                  type="text"
                  className="form-control search-input"
                  name="search-filter"
                  placeholder="Search for companies ..."
                />
                <p className="text-center copyrights">
                  &#169; A design by Manish
                </p>
              </div>
            </div>

            {/* display companies */}
            <div className="companies-display-container">

              {/* grid */}
              <div className="companies-grid">

                {/* individual */}
                <Link to="/detail">
                  <div className="individual-company-container">
                    <img src={maersk} width="50%" className="image-fluid" alt="maersk"/>
                    <h1 className="company-name">MAERSK</h1>
                  </div>
                </Link>

                <Link to="/detail">
                  <div className="individual-company-container">
                    <img
                      src={flipkart}
                      width="50%"
                      height="30%"
                      alt="flipkart"
                      className="image-fluid"
                    />
                    <h1 className="company-name">FLIPKART</h1>
                  </div>
                </Link>
                <Link to="/detail">
                  <div className="individual-company-container">
                    <img src={amazon} width="50%" className="image-fluid" alt="amazon" />
                    <h1 className="company-name">AMAZON</h1>
                  </div>
                </Link>
                <Link to="/detail">
                  <div className="individual-company-container">
                    <img src={tcs} width="50%" className="image-fluid" alt="tcs" />
                    <h1 className="company-name">TCS</h1>
                  </div>
                </Link>
                <Link to="/detail">
                  <div className="individual-company-container">
                    <img src={cognizant} width="50%" className="image-fluid" alt="cognizant"/>
                    <h1 className="company-name">COGNIZANT</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/detail">
          <Content />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
