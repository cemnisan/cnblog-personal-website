import React, { useState } from "react";
import { useRouter } from "next/router";
import emailjs, { send } from "emailjs-com";
import { validEmail, validOtherInput } from "../utilities/regex";

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
    if (!validOtherInput.test(contact.user_name)) setNameErr(true);
    if (!validOtherInput.test(contact.user_lastName)) setLastNameErr(true);
    if (!validOtherInput.test(contact.user_city)) setCityErr(true);
  };

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (emailErr || nameErr || lastNameErr || cityErr) {
      setTimeout(() => {
        router.reload(window.location.pathname);
      }, 1700);
      
    } else {
      emailjs
        .sendForm(
          `${process.env.NEXT_PUBLIC_EMAIL_SERVICE}`,
          `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE}`,
          e.target,
          `${process.env.NEXT_PUBLIC_EMAIL_USER}`
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
  };

  return [
    onChange,
    sendEmail,
    validate,
    emailErr,
    nameErr,
    lastNameErr,
    cityErr,
  ];
};
