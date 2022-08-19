//dependencies
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

//components
import AddAlumini from "./AddAlumini";
import AddCompany from "./AddCompany";

//css
import "./Home.css";

//code
const Home = () => {
  return (
    <Router>
      {/* router */}
      <Switch>
        <Route exact path="/">
          <div className="home-container">
            <div className="home-content text-center">
              <h1 className="college-title">KEC COMPANY PORTAL</h1>
              <br />

              <div className="home-button-group">
                <Link to="/addcompany">
                    <button className="home-btn">Companies</button>
                </Link>
                <br />
                <Link to="/addalumini">
                    <button className="home-btn">Aluminis</button>
                </Link>
              </div>
            </div>
          </div>
        </Route>
        <Route exact path="/addalumini">
          <AddAlumini />
        </Route>
        <Route exact path="/addcompany">
          <AddCompany />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
