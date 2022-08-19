//dependencies
import React from "react";

//css
import "./forms.css";
import "../../components/Modal.css"
//code
const AddCompanyForm = () => {
  //states

  return (
    <div className="add-companies-container">
      <form>
        <div className="form-grid">
          {/* Company Name */}
          <div className="individual-form-container">
            <label htmlFor="company-name" className="form-label">
              Company Name
            </label>

            <input
              type="text"
              defaultValue=""
              id="company-name"
              name="company-name"
              className="form-control form-input"
              placeholder="Company Name"
            />
          </div>
          {/* Company cover words*/}
          <div className="individual-form-container">
            <label htmlFor="cover-para" className="form-label">
              Cover Para
            </label>

            <textarea
              type="text"
              defaultValue=""
              id="cover-para"
              name="cover-para"
              className="form-control form-input"
              placeholder="Cover text"
            ></textarea>
          </div>
          {/* website link */}
          <div className="individual-form-container">
            <label htmlFor="website-link" className="form-label">
              Website Link
            </label>

            <input
              type="text"
              defaultValue=""
              id="website-link"
              name="website-link"
              className="form-control form-input"
              placeholder="Website URL"
            />
          </div>

          {/* founded in */}
          <div className="individual-form-container">
            <label htmlFor="founded-date" className="form-label">
              Founded Date (In years)
            </label>

            <input
              type="text"
              defaultValue=""
              id="founded-date"
              name="founded-date"
              className="form-control form-input"
              placeholder="Founded Date"
            />
          </div>

          {/* founded by */}
          <div className="individual-form-container">
            <label htmlFor="founder" className="form-label">
              Founder
            </label>

            <input
              type="text"
              defaultValue=""
              id="founder"
              name="founder"
              className="form-control form-input"
              placeholder="Founder"
            />
          </div>

          {/* headquarters */}
          <div className="individual-form-container">
            <label htmlFor="headquarters" className="form-label">
              Headquarters
            </label>

            <input
              type="text"
              defaultValue=""
              id="headquarters"
              name="headquarters"
              className="form-control form-input"
              placeholder="Headquarters"
            />
          </div>
          {/* Net worth */}
          <div className="individual-form-container">
            <label htmlFor="net-worth" className="form-label">
              Net worth
            </label>

            <input
              type="number"
              defaultValue=""
              id="net-worth"
              name="net-worth"
              className="form-control form-input"
              placeholder="Net worth"
            />
          </div>
          {/* number of employess */}
          <div className="individual-form-container">
            <label htmlFor="website-link" className="form-label">
              No of Employees
            </label>

            <input
              type="number"
              defaultValue=""
              id="website-link"
              name="website-link"
              className="form-control form-input"
              placeholder="No of Employees"
            />
          </div>

          {/* Branches */}
          <div className="individual-form-container">
            <label htmlFor="branches" className="form-label">
              Branches
            </label>

            <input
              type="text"
              defaultValue=""
              id="branches"
              name="branches"
              className="form-control form-input"
              placeholder="Branches"
            />
          </div>

          {/* About the company */}
          <div className="individual-form-container">
            <label htmlFor="about" className="form-label">
              About the company
            </label>

            <textarea
              type="text"
              defaultValue=""
              id="about"
              name="about"
              rows="5"
              className="form-control form-input"
              placeholder="About text"
            ></textarea>
          </div>

          {/* Domain */}
          <div className="individual-form-container">
            <label htmlFor="domains" className="form-label">
              Domains (Separated by space)
            </label>
            <input
              type="text"
              defaultValue=""
              id="domains"
              name="domains"
              className="form-control form-input"
              placeholder="Domains"
            />
          </div>

          {/* Achievements*/}
          <div className="individual-form-container">
            <label htmlFor="achievements" className="form-label">
              Achievements
            </label>
            <textarea
              type="text"
              defaultValue=""
              id="achievements"
              name="achievements"
              rows="3"
              className="form-control form-input"
              placeholder="Achievements"
            ></textarea>
          </div>
          {/*material link */}
          <div className="individual-form-container">
            <label htmlFor="material-link" className="form-label">
              Material Link
            </label>

            <input
              type="text"
              defaultValue=""
              id="material-link"
              name="material-link"
              className="form-control form-input"
              placeholder="Material URL"
            />
          </div>
          {/*Work Culture*/}
          <div className="individual-form-container">
            <label htmlFor="work-culture" className="form-label">
              Work Culture
            </label>
            <textarea
              type="text"
              defaultValue=""
              id="work-culture"
              name="work-culture"
              rows="3"
              className="form-control form-input"
              placeholder="Work-culture"
            ></textarea>
          </div>

          {/*Employee benefits*/}
          <div className="individual-form-container">
            <label htmlFor="employee-benefits" className="form-label">
              Employee Benefits
            </label>
            <textarea
              type="text"
              defaultValue=""
              id="employee-benefits"
              name="employee-benefits"
              rows="3"
              className="form-control form-input"
              placeholder="employee-benefits"
            ></textarea>
          </div>

          <br />
          {/*Submit buttons */}
          <div className="modal-footer">
            <button
              type="button"
              className="form-btn secondary-btn"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="form-btn primary-btn"
              data-bs-dismiss="modal"
            >
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCompanyForm;
