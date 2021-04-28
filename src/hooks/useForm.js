import React, { useState } from "react";
import { useRouter } from "next/router";
import emailjs, { send } from "emailjs-com";
import { validEmail, nameAndLastName, validCity } from "../utilities/regex";

export default () => {
  const router = useRouter();
  const [contact, setContact] = useState({
    user_name: "",
    user_lastName: "",
    user_city: "",
    user_email: "",
    message: "",
  });
  const [emailErr, setEmailErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);

  const validate = () => {
    if (!validEmail.test(contact.user_email)) setEmailErr(true);
    if (!nameAndLastName.test(contact.user_name)) setNameErr(true);
    if (!nameAndLastName.test(contact.user_lastName)) setLastNameErr(true);
    if (!validCity.test(contact.user_city)) setCityErr(true);
  };

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      contact.user_name &&
      contact.user_lastName &&
      contact.user_email &&
      contact.user_city &&
      contact.message
    ) {
      if (emailErr) {
        alert("Yazdığınız E-mail adresi geçersiz.");
      }
      if (nameErr) {
        alert("Yazdığınız İsim geçersiz.");
      }
      if (lastNameErr) {
        alert("Yazdığınız Soy İsmi geçersiz.");
      }
      if (cityErr) {
        alert("Yazdığınız Şehir İsmi geçersiz.");
      } else {
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
                "Mesajınız başarıyla gönderildi, size en kısa zamanda dönüş yapacağım! ^_^ "
              );
              router.push("/");
            },
            (err) => {
              alert("Hmm, bir şeyler ters gitti!", err);
            }
          );
      }
    }else{
        alert("Lütfen gerekli alanları doldurunuz.")
    }
  };
  return [onChange, sendEmail, validate];
};
