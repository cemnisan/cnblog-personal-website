import React, { useState } from "react";
import { useRouter } from "next/router";
import emailjs from "emailjs-com";
import ContactFrom from './form/ContactForm';

function Contact() {
  
  const [contact, setContact] = useState({
    user_name: "",
    user_lastName: "",
    user_city: "",
    user_email: "",
    message: "",
  });

  const router = useRouter();

  function onChange(e) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();
    if (
      contact.user_name &&
      contact.user_lastName &&
      contact.user_city &&
      contact.user_email &&
      contact.message
    ) {
      emailjs
        .sendForm(
          "service_6md8sco",
          "template_lkc39me",
          e.target,
          "user_bm3DhejnzHNMsgiZuI9kR"
        )
        .then(
          () => {
            alert(
              "Mesajınız başarıyla gönderildi, size ek kısa zamanda dönüş yapacağım! ^_^ "
            );
            router.push("/");
          },
          (err) => {
            alert("Hmm, bir şeyler ters gitti!", err);
          }
        );
    } else {
      alert("Lütfen gerekli alanları doldurunuz.");
    }
  }

  return (
    <div className="container">
      <div className="formTitle">
        <h4 className="text-center mt-5">Contact</h4>
      </div>
      <form onSubmit={sendEmail}>
        <div className="row">
          <ContactFrom onChange={onChange}/>
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
