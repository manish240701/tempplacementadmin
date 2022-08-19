//dependencies
import React from "react";

//css
import "./Modal.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AddCompanyForm from "../assets/forms/AddCompanyForm";
import AddAluminiForm  from "../assets/forms/AddAluminiForm";

//code
const Modal = () => {
  //states
  const [form, setForm] = useState();
  const modalLocation = useLocation();
  const [modalHead, setModalHead] = useState("");
  useEffect(() => {
    if (modalLocation.pathname === "/addcompany") {
      setModalHead("ADD COMPANY");
      setForm(<AddCompanyForm />);
    } else if (modalLocation.pathname === "/addalumini") {
      setModalHead("ADD ALUMINI");
      setForm(<AddAluminiForm />);

    }
    console.log(modalHead);
  }, [modalLocation.pathname, modalHead]);

  return (
    // display modal
    <div className="modal-container">
      <div className="modal fade" id="addEditModal" tabIndex="-1">
        <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header text-center d-block">
              <h1 className="modal-title">{modalHead}</h1>
            </div>
            <div className="modal-body">
              {form}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
