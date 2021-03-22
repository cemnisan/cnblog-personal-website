import React from "react";
import styles from "../Contact.module.css";
import formData from "../../../../../data/FormData.json";

function ContactForm({ onChange }) {
  return (
    <>
      {formData &&
        formData.form.map((item, index) => (
          <React.Fragment key={index}>
            {item.id <= 4 ? (
              <div
                className={`col-md-6 form-group mt-3 mb-4 text-center ${styles.formGroup}`}
              >
                <label
                  className={`mb-3 ${styles.formLabel}`}
                  htmlFor={item.for}
                >
                  {item.placeHolder}
                </label>
                <input
                  type={item.type}
                  name={item.name}
                  onChange={onChange}
                  className="form-control"
                  id={item.idForm}
                  placeholder={item.placeHolder}
                />
              </div>
            ) : (
              <div
                className={`col-md-8 form-group text-center ${styles.formMessage} mt-3`}
              >
                <label
                  className={`mb-3 ${styles.formLabel}`}
                  htmlFor={item.for}
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  onChange={onChange}
                  name={item.name}
                  id={item.idForm}
                  rows="5"
                ></textarea>
              </div>
            )}
          </React.Fragment>
        ))}
    </>
  );
}

export default ContactForm;
