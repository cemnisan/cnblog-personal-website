import React from "react";
import useForm from "../../../../hooks/useForm";
import Error from "../Error";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./form/ContactForm"), { ssr: false });

function Contact() {
  const [
    onChange,
    sendEmail,
    validate,
    emailErr,
    nameErr,
    lastNameErr,
    cityErr,
  ] = useForm();

  return (
    <div className="container">
      <Error
        emailErr={emailErr}
        nameErr={nameErr}
        lastNameErr={lastNameErr}
        cityErr={cityErr}
      />
      <div className="formTitle">
        <h4 className="text-center mt-5">İletişim</h4>
      </div>
      <form onSubmit={sendEmail}>
        <div className="row">
          <ContactForm onChange={onChange} />
        </div>
        <div className="formButton d-flex justify-content-center">
          <button
            onClick={validate}
            className="btn btn-dark mt-3"
            type="submit"
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
