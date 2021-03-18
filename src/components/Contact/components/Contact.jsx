import React from "react";
import styles from './Contact.module.css'
import { formData } from "../../../data/FormData";

function Contact() {
  const itemForm =
    formData &&
    formData.map((item, index) => (
      <React.Fragment key={index}>
        {item.id <= 4 ? (
          <div className={`col-md-6 form-group mt-3 mb-4 text-center ${styles.formGroup}`}>
            <label className={`mb-3 ${styles.formLabel}`} htmlFor={item.for}>{item.placeHolder}</label>
            <input
              type={item.type}
              className="form-control"
              id={item.idForm}
              placeholder={item.placeHolder}
            />
          </div>
        ) : (
          <div className={`col-md-8 form-group text-center ${styles.formMessage} mt-3`}>
            <label className={`mb-3 ${styles.formLabel}`} htmlFor={item.for}>Message</label>
            <textarea
              className="form-control"
              id={item.idForm}
              rows="5"
            ></textarea>
          </div>
        )}
      </React.Fragment>
    ));
  return (
    <div className="container">
      <div className="formTitle">
        <h4 className="text-center mt-5">Contact</h4>
      </div>
      <form>
        <div className="row">
            {itemForm}
        </div>
        <div className="formButton d-flex justify-content-center">
          <button className="btn btn-dark mt-3" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
