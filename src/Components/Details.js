//dependencies
import React from "react";

//css
import "./Details.css";

//code
const Details = () => {
  return (
    <div className="details-container">
      {/* company details table */}
      <div className="details-table">
        <table>
          <tr>
            <th className="table-head">Founded in</th>
            <td className="table-data">1996</td>
          </tr>
          <tr>
            <th className="table-head">CEO</th>
            <td className="table-data">Sundar Pichai</td>
          </tr>
          <tr>
            <th className="table-head">Net Incom</th>
            <td className="table-data">US $18billion</td>
          </tr>
          <tr>
            <th className="table-head">Headquarters</th>
            <td className="table-data">United States of America</td>
          </tr>
          <tr>
            <th className="table-head">Number of Employess</th>
            <td className="table-data">83,000</td>
          </tr>
          <tr>
            <th className="table-head">Branches</th>
            <td className="table-data">Banglore, Cochin, Vishakapattinam</td>
          </tr>
        </table>
      </div>

      {/* about */}
      <h2 className="header mt-5">ABOUT MAERSK</h2>
      <p className="paragraph mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsa
        illum, inventore eius ex dolore amet laudantium voluptatem facilis est
        quo. Recusandae iste commodi quod impedit laboriosam temporibus
        doloribus, voluptatibus veniam asperiores tempore, amet magnam.
        Voluptatem qui quibusdam fugit.
      </p>

      {/* domains */}
      <h2 className="header mt-5">DOMAINS</h2>
      <div className="domains-container mt-3">
        <div className="domains-individual-container">
            WEB DEVELOPMENT
        </div>
        <div className="domains-individual-container">
            IOT
        </div>
        <div className="domains-individual-container">
            MOBILE
        </div>
        <div className="domains-individual-container">
            MACHINE LEARNING
        </div>
      </div>

      {/* achievementS */}
      <h2 className="header mt-5">MAERSK's ACHIEVEMENTS</h2>
      <p className="paragraph mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsa
        illum, inventore eius ex dolore amet laudantium voluptatem facilis est
        quo. Recusandae iste commodi quod impedit laboriosam temporibus
        doloribus, voluptatibus veniam asperiores tempore, amet magnam.
        Voluptatem qui quibusdam fugit.
      </p>

      {/* cracking the interview */}
      <h2 className="header mt-5">CRACKING MAERSK</h2>
      <button className="download-btn mt-3">
        <span>ACCESS MATERIALS</span>
      </button>
    </div>
  );
};

export default Details;
