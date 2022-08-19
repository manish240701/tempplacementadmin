//dependencies
import React from "react";

//css
import "./forms.css";

//code
const AddAluminiForm = () => {
  return (
    <div className="add-alumini-container">
      <form>
        {/* placed in */}
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

        {/* Company Name */}
        <div className="individual-form-container">
          <label htmlFor="alumini-name" className="form-label">
            Alumini Name
          </label>

          <input
            type="text"
            defaultValue=""
            id="alumini-name"
            name="alumini-name"
            className="form-control form-input"
            placeholder="Company Name"
          />
        </div>

        {/* CTC */}
        <div className="individual-form-container">
          <label htmlFor="ctc" className="form-label">
            CTC
          </label>

          <input
            type="text"
            defaultValue=""
            id="ctc"
            name="ctc"
            className="form-control form-input"
            placeholder="CTC"
          />
        </div>

        {/* linkedin Link */}
        <div className="individual-form-container">
          <label htmlFor="linkedin" className="form-label">
            Linkedin Link
          </label>

          <input
            type="text"
            defaultValue=""
            id="linkedin"
            name="linkedin"
            className="form-control form-input"
            placeholder="LinkedIn Link"
          />
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
      </form>
    </div>
  );
};

export default AddAluminiForm;
